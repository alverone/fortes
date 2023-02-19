import { ScriptDefinition } from "./models/interfaces/Script_Definition";

function addScripts(doc: Document, scripts: ScriptDefinition[]) {
  const pivot = doc.getElementById("injection");

  for (const script of scripts) {
    const element = doc.createElement("script");

    element.type = "text/javascript";
    element.async = script.async;
    element.defer = script.defer;
    element.src = script.src;

    pivot?.insertAdjacentElement("afterend", element);
  }
}

const scripts = document.location.href.includes("specifications")
  ? [
      {
        async: false,
        defer: false,
        src: "//cdn.jsdelivr.net/gh/alverone/fortes@main/dist/{{specification}}",
        //"specification_portugal_35.js"
      },
    ]
  : document.location.href.includes("dyakuiemo")
  ? []
  : [
      {
        async: false,
        defer: false,
        src: "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js",
      },
      {
        async: false,
        defer: false,
        src: "https://cdn.jsdelivr.net/gh/alverone/fortes@main/dist/{{calc}}",
      },
      {
        async: false,
        defer: true,
        src: "https://cdn.jsdelivr.net/gh/alverone/fortes@main/dist/{{logics}}",
      },
    ];

addScripts(document, scripts);
