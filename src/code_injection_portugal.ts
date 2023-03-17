import { ScriptDefinition } from "./models/interfaces/Script_Definition";

function addScriptsP(doc: Document, scripts: ScriptDefinition[]) {
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

const scriptsP = document.location.href.includes("specifications")
  ? [
      {
        async: false,
        defer: false,
        src: "https://cdn.jsdelivr.net/gh/alverone/fortes@main/dist/$specP",
      },
    ]
  : document.location.href.includes("dyakuiemo")
  ? []
  : [
      {
        async: false,
        defer: false,
        src: "https://cdn.jsdelivr.net/gh/alverone/fortes@main/dist/$logP",
      },
      {
        async: false,
        defer: true,
        src: "https://cdn.jsdelivr.net/gh/alverone/fortes@main/dist/$calcP",
      },
    ];

addScriptsP(document, scriptsP);
