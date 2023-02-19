const path = require("path");
const fs = require("fs");
const NodemonPlugin = require("nodemon-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");

const entriesProd = {};
const entriesDev = {
  test: "./src/test.ts",
};

const replacementFiles = {};

fs.readdirSync("./src/")
  .filter((file) => file.match(/_?\d?\.ts$/i))
  .forEach((file) => {
    const name = file.replace(/_*\d*\.ts$/i, "");

    if (name !== "test") {
      entriesProd[file.replace(".ts", "")] = ["./src/" + file];
    }

    entriesDev[name] = ["./src/" + file];
    replacementFiles[name] = file.replace("ts", "js");
  });

const replacements = [
  {
    search: "{{specification}}",
    replace: (..._) => replacementFiles["specification"],
  },
  {
    search: "{{logics}}",
    replace: (..._) => replacementFiles["logics"],
  },
  {
    search: "{{calc}}",
    replace: (..._) => replacementFiles["calculator"],
  },
  {
    search: "{{specificationP}}",
    replace: (..._) => replacementFiles["specification_portugal"],
  },
  {
    search: "{{logicsP}}",
    replace: (..._) => replacementFiles["logics_portugal"],
  },
  {
    search: "{{calcP}}",
    replace: (..._) => replacementFiles["calculator_portugal"],
  },
];

module.exports = [
  {
    stats: "errors-only",
    target: "node",
    entry: entriesProd,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      clean: true,
    },
    mode: "production",
    module: {
      rules: [
        {
          test: /injection/gi,
          loader: "string-replace-loader",
          options: {
            multiple: replacements,
          },
        },
        {
          test: /\.(js|jsx|ts|tsx)?$/,
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "es2015",
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [new ForkTsCheckerPlugin(), new NodemonPlugin()],
    resolve: {
      extensions: [".ts", ".js", ".json"],
    },
  },
  {
    stats: "errors-only",
    target: "node",
    entry: entriesDev,
    devtool: "inline-source-map",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].js",
      clean: true,
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)?$/,
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "es2015",
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [new ForkTsCheckerPlugin(), new NodemonPlugin()],
    resolve: {
      extensions: [".ts", ".js", ".json"],
    },
  },
];
