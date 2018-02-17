const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const getTextContent = (dom = {}, selector = "") => {
  if (dom.window === undefined)
    throw new Error("DOM must contains a window property");

  //COmo estamos usando fallback no selector (selector=''),
  //caso  não seja enviada, será uma string em branco
  if (selector.length === 0) throw new Error("Selector is required");

  return dom.window.document.querySelector(selector).textContent;
};

const getDomFromURL = (url = "") => {
  //logicas
  if (url.length === 0) throw new Error("URL is required");
  return JSDOM.fromURL(url);
};

module.exports = {
  getDomFromURL,
  getTextContent
};

// //chamando a função para testar
// getTextContent({ window: {} });
//Codigo de teste
// const myDom =getDomFromURL(`https://secure.tibia.com/community/?subtopic=characters&name=hue+proliferator`)
// console.log(myDom)
