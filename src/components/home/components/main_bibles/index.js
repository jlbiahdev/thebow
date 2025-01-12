import * as Cookies from '../../../../resources/js/cookies.js';
import * as Commons from '../../../../resources/js/common.js';
import * as Presentations from '../../../../data/presentations/index.js';
import * as MainBibles from '../../../../data/home/main_bibles.js';
import * as BibleOverlayComponent from '../../../bible_overlay_card/index.js';

$(document).ready(() => {
});

export const cssFilePath = '/src/components/home/components/main_bibles/index.css';
export const htmlFilePath = '/src/components/home/components/main_bibles/index.html';
export const init = (parentNodeKey) => {
    // console.log('MainBiblesComponent.init')
    Commons.getHtmlFilePath(BibleOverlayComponent.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${BibleOverlayComponent.cssFilePath}">`);
        // console.log('html', html)

        MainBibles.data.items.forEach(item => {
            var presentation = Presentations.data.find(p => p.key === item);
            var newHtml = html
                .replace('{bible_image}', `/src/assets/img/bible/${presentation.data.image}`)
                .replace('{bible_name}', presentation.data.name)
                .replace('{bible_text}', presentation.data.text)
                .replaceAll('{bible_key}', item)
                ;

                $(`${parentNodeKey} .content .main-cards`).append(newHtml);
                $(`#bbl-${item} i`).on('click', function () { bible_clicked(this); });
        })
    
    })
    .then(() => {
        $(`${parentNodeKey} .head`).html(MainBibles.data.title);
    });
}

const bible_clicked = (item) => {
    var key = $(item).data('id')

    Commons.open_page_by_id(key, './pages/bbl/', Cookies.COOKIES.SELECTED_BIBLE);
}

