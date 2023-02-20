const path = require("path");
const fs = require("fs");
const TerserPlugin = require("terser-webpack-plugin");
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

    if (name !== "test" && !name.includes("snippet")) {
      entriesProd[file.replace(".ts", "")] = ["./src/" + file];
    }

    entriesDev[name] = ["./src/" + file];
    replacementFiles[name] = file.replace("ts", "js");
  });

const replacements = [
  {
    search: /\$spec\W/,
    replace: replacementFiles["specification"] + '"',
  },
  {
    search: /\$log\W/,
    replace: replacementFiles["logics"] + '"',
  },
  {
    search: /\$calc\W/,
    replace: replacementFiles["calculator"] + '"',
  },
  {
    search: /\$specP/,
    replace: replacementFiles["specification_portugal"],
  },
  {
    search: /\$logP/,
    replace: replacementFiles["logics_portugal"],
  },
  {
    search: /\$calcP/,
    replace: replacementFiles["calculator_portugal"],
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
          test: /\.(js|jsx|ts|tsx)?$/,
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "es2015",
          },
          exclude: /node_modules/,
        },
        {
          test: /injection/,
          loader: "string-replace-loader",
          options: {
            multiple: replacements,
          },
        },
      ],
    },
    plugins: [new ForkTsCheckerPlugin(), new NodemonPlugin()],
    resolve: {
      extensions: [".ts", ".js", ".json"],
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
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
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
  },
];
