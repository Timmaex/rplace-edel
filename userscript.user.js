// ==UserScript==
// @name         Edeloverlay
// @namespace    http://tampermonkey.net/
// @version      0.2.4
// @description  Edel
// @author       Vom portugiesen geklaut und umgebaut
// @updateURL    https://github.com/Timmaex/rplace-edel/raw/main/userscript.user.js
// @downloadURL  https://github.com/Timmaex/rplace-edel/raw/main/userscript.user.js
// @match        https://garlic-bread.reddit.com/embed*
// @match        https://hot-potato.reddit.com/embed*
// @grant        none
// ==/UserScript==
var overlayImage = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
        overlayImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: 0px;top: 0;image-rendering: pixelated;width: 2000px;height: 1500px;`;
        canvasContainer.appendChild(overlayImage);
    }, false);
}

function updateImage() {
    overlayImage.src = "https://raw.githubusercontent.com/Timmaex/rplace-edel/main/canva.png"
}

setInterval(function () {overlayImage.src = "https://raw.githubusercontent.com/Timmaex/rplace-edel/main/canva.png"}, 30000);
