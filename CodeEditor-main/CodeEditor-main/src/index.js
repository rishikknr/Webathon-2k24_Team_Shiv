// This file injects all the necessary files into index.html for the code editor to run
// JS file injection has been dropped because browsers no longer execute injected script for security reasons

// This function injects CSS into the head tag before index.css (custom css)
function appendCss(path, endLink) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = path;

  document.head.insertBefore(link, endLink);
}

function appendOptions(value, text, selectTag) {
  let optionTag = document.createElement("option");
  optionTag.value = value;
  optionTag.textContent = text;

  selectTag.appendChild(optionTag);
}
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// CSS for themes
let pathPrefixTheme = "../node_modules/codemirror/theme/";
let cmThemes = [
  "pastel-on-dark",
  "3024-day",
  "3024-night",
  "abbott",
  "abcdef",
  "ambiance-mobile",
  "ambiance",
  "ayu-dark",
  "ayu-mirage",
  "base16-dark",
  "base16-light",
  "bespin",
  "blackboard",
  "cobalt",
  "colorforth",
  "darcula",
  "dracula",
  "duotone-dark",
  "duotone-light",
  "eclipse",
  "elegant",
  "erlang-dark",
  "gruvbox-dark",
  "hopscotch",
  "icecoder",
  "idea",
  "isotope",
  "juejin",
  "lesser-dark",
  "liquibyte",
  "lucario",
  "material-darker",
  "material-ocean",
  "material-palenight",
  "material",
  "mbo",
  "mdn-like",
  "midnight",
  "monokai",
  "moxer",
  "neat",
  "neo",
  "night",
  "nord",
  "oceanic-next",
  "panda-syntax",
  "paraiso-dark",
  "paraiso-light",
  "railscasts",
  "rubyblue",
  "seti",
  "shadowfox",
  "solarized",
  "ssms",
  "the-matrix",
  "tomorrow-night-bright",
  "tomorrow-night-eighties",
  "ttcn",
  "twilight",
  "vibrant-ink",
  "xq-dark",
  "xq-light",
  "yeti",
  "yonce",
  "zenburn",
];

// CSS for addons
let pathPrefixAddon = "../node_modules/codemirror/addon/";
let addonCSS = ["hint/show-hint.css"];

let languages = {
  java: "Java",
  python: "Python",
  cpp: "C++",
  c: "C",
  js: "JavaScript",
};

let cssEnd = document.querySelector("#global-css");

// injecting css files before custom css (index.css)
cmThemes.map((name) => appendCss(pathPrefixTheme + name + ".css", cssEnd));
addonCSS.map((path) => appendCss(pathPrefixAddon + path, cssEnd));

// Appending the language options to language select
let selectTag = document.querySelector("#language");
for (let key in languages) {
  appendOptions(key, languages[key], selectTag);
}

// Appending the theme options to theme select
let themeSelectTag = document.querySelector("#theme");
themeSelectTag.default = cmThemes[0];
cmThemes.map((theme) =>
  appendOptions(theme, capitalize(theme), themeSelectTag)
);
