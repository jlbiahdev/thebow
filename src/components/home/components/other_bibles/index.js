import * as Commons from '../../../../resources/js/common.js';
import * as Cookies from '../../../../resources/js/cookies.js';
import * as Presentations from '../../../../data/presentations/index.js';
import * as OtherBibles from '../../../../data/home/other_bibles.js';

$(document).ready(() => {
});

const other_bible_clicked = (bible) => {
    var obj = $(bible);
    var desc = $(`.card-description .desc.${obj.data('desc')}`)
    
    if (desc.hasClass('show')) {
        $('.card-description .desc').removeClass('show');
        return;
    }

    $('.card-description .desc').removeClass('show');
    $(desc).addClass('show');
}

const bible_more_clicked = (btn) => {
    var obj = $(btn);
    var key = obj.data('key');

    Commons.open_page_by_id(key, './components/presentation/', Cookies.COOKIES.SELECTED_BIBLE);
    console.log('page', key)
}

const remove_links = (text) => {
    var output = text;
    var kws = "#r";
    var kwe = "r#";
    var finished = false;

    while (!finished) {
        var indexStart = output.indexOf(kws);
        var indexEnd = output.indexOf(kwe);
        var refText = output.substring(indexStart, indexEnd + 2);

        if (indexStart > 0) {
            output = output.replace(refText, '');
        }
        finished = indexStart < 0;
    }

    return output;
}

export const cssFilePath = '/src/components/home/components/other_bibles/index.css';
export const htmlFilePath = '/src/components/home/components/other_bibles/index.html';
export const init = (parentNodeKey) => {
    // console.log('OtherBiblesComponent.init')

    $(`${parentNodeKey} .head`).html(OtherBibles.data.title);
    $(`${parentNodeKey} .content .paragraf p`).html(OtherBibles.data.description);

    OtherBibles.data.items.forEach(item => {
        var presentation = Presentations.data.find(p => p.key === item);

        $(`${parentNodeKey} .content .card-list`).append(`<div class="card"><img src="/src/assets/img/bible/${presentation.data.image}" alt="" data-desc="${item}"></div>`);
        $(`${parentNodeKey} .content .card-description`).append(`<div class="desc ${item}"><h3>${remove_links(presentation.data.name)}<i class="fa-solid fa-circle-info more" data-key="${item}"></i></h3><hr><p>${remove_links(presentation.data.text)}</p></div>`);
    });

    $('.card-list .card img').on('click', function () { other_bible_clicked(this); })
    $('.more').on('click', function () { bible_more_clicked(this); })
}

