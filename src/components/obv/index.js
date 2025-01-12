import * as Cookies from '../../resources/js/cookies.js';
import * as Commons from '../../resources/js/common.js';
import * as ArcheoBible from '../../data/presentations/archeo.js';
import * as BoJBible from '../../data/presentations/boj.js';
import * as DarbyBible from '../../data/presentations/darby.js';
import * as OstyBible from '../../data/presentations/osty.js';
import * as TobBible from '../../data/presentations/tob.js';

export const cssFilePath = '/src/components/obv/index.css';
export const htmlFilePath = '/src/components/obv/index.html';
export const pageName = Commons.APP_PAGES.OtherBibleView;

$(document).ready(() => {
    var selectedBible = Cookies.getCookie(Cookies.COOKIES.SELECTED_BIBLE);

    // console.log('selectedBible is', selectedBible)
    load_page(selectedBible)
});

const load_page = (key) => {
    var selectedBible = null;

    switch (key) {
        case Commons.BIBLE_KEYS.Archeo:
            selectedBible = ArcheoBible.data;
            break;
        case Commons.BIBLE_KEYS.BoJ:
            selectedBible = BoJBible.data;
            break;
        case Commons.BIBLE_KEYS.Darby:
            selectedBible = DarbyBible.data;
            break;
        case Commons.BIBLE_KEYS.Osty:
            selectedBible = OstyBible.data;
            break;
        default:
            selectedBible = TobBible.data;
            break;
    }
    // console.log('Commons.BIBLE_KEYS.BoJ', Commons.BIBLE_KEYS.BoJ)
    // console.log('key', key)
    // console.log('selectedBible', selectedBible)

    var show = 'show';
    var active = 'active';
    $('.breadcrumb .breadcrumb-item.active').text(selectedBible.name);
    $('.image img').attr('src', `/src/assets/img/bible/${selectedBible.image}`);
    $('.data .name').text(selectedBible.name);
    $('.data .text').html(convert_links(selectedBible.text));
    selectedBible.authors.forEach(author => {
        $('.data .authors-list').append(`<span class='author'>${convert_links(author.name)}</span>, `);
        $('.data .authors-tabs .head').append(`<span class='${active}' data-id='${author.id}'>${convert_links(author.name)}</span>`);
        $('.data .authors-tabs .box').append(`<span data-head='${author.id}' class='author-desc ${show}'>${convert_links(author.presentation)}</span>`);
        show= '';
        active= '';
    });
    selectedBible.refs.forEach(ref => {
        $('.refs').append(`<div class='ref'><div class='ref-id'>${ref.id}</div><div class='ref-url'><a id='link-${ref.id}' href='${ref.url}'>${ref.title}</a></div></div>`);
    });
    $('.bible-box .authors-tabs .head>span').on('click', function() { tabpanel_clicked(this); })
}

const convert_links = (text) => {
    var output = text;
    var kws = "#r";
    var kwe = "r#";
    var finished = false;

    while (!finished) {
        var indexStart = output.indexOf(kws);
        var indexEnd = output.indexOf(kwe);
        var refText = output.substring(indexStart, indexEnd + 2)
        var refId = refText.replace(kws, '').replace(kwe, '');

        if (indexStart > 0) {
            output = output.replace(refText, `<span class='ref-link'><a href='#link-${refId}'><sup>${refId}</sup></a></span>`)
        }
        finished = indexStart < 0;
    }

    return output;
}

const tabpanel_clicked = (panel) => {
    var parentId = $(panel).data('id');

    $('.authors-tabs .head span').removeClass('active');
    $(`.authors-tabs .head span[data-id=${parentId}]`).addClass('active');

    $('.author-desc').removeClass('show');
    $(`.author-desc[data-head=${parentId}]`).addClass('show');
}