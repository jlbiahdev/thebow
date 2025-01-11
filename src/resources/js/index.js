import * as ToolService from './toolsService.js';
import * as Commons from './common.js';
import * as Cookies from './cookies.js';

$(document).ready(() => {
    $('.list .card img').on('click', function () { other_bible_clicked(this); })
    $('.more').on('click', function () { bible_more_clicked(this); })
    initBible();
});

const initBible = () => {
    var chapters = ToolService.Build()

    console.log(chapters);
}

const other_bible_clicked = (bible) => {
    var obj = $(bible);
    var desc = $(`.description .desc.${obj.data('desc')}`)
    
    if (desc.hasClass('show')) {
        $('.description .desc').removeClass('show');
        return;
    }

    $('.description .desc').removeClass('show');
    $(desc).addClass('show');
}

const bible_more_clicked = (btn) => {
    var obj = $(btn);
    var key = obj.data('key');

    Commons.open_page_by_id(key, './pages/presentation/', Cookies.COOKIES.SELECTED_BIBLE);
    console.log('page', key)
}
