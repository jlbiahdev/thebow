import * as Intro from '../../../../data/home/intro.js';

$(document).ready(() => {
});

export const cssFilePath = '/src/components/home/components/intro/index.css';
export const htmlFilePath = '/src/components/home/components/intro/index.html';
export const init = (parentNodeKey) => {
    $(`${parentNodeKey} .head`).text(Intro.data.title);    
    Intro.data.text.forEach(p => {
        $(`${parentNodeKey} .paragraf`).append(`<p>${p}</p>`);
    });
}

