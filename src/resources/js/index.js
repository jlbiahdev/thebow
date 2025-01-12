import * as ToolService from './toolsService.js';
import * as Commons from './common.js';
import * as Cookies from './cookies.js';
import * as MainMenu from '../../components/home/components/menu/index.js';
import * as IntroComponent from '../../components/home/components/intro/index.js';
import * as MainBiblesComponent from '../../components/home/components/main_bibles/index.js';

$(document).ready(() => {
    insertMenu();
    insertIntro();
    insertMainBibles();
    $('.list .card img').on('click', function () { other_bible_clicked(this); })
    $('.more').on('click', function () { bible_more_clicked(this); })
    initBible();
});

const insertMenu = () => {
    // console.log('HomeComponent.insertMenu')
    Commons.getHtmlFilePath(MainMenu.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${MainMenu.cssFilePath}">`);
        $('nav').append(html);
    })
}

const insertIntro = () => {
    // console.log('HomeComponent.insertIntro')
    var parentNodeKey = '#section-intro';
    Commons.getHtmlFilePath(IntroComponent.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${IntroComponent.cssFilePath}">`);
        $(parentNodeKey).append(html);
        IntroComponent.init(parentNodeKey);
    });
}

const insertMainBibles = () => {
    // console.log('HomeComponent.insertMainBibles')
    Commons.getHtmlFilePath(MainBiblesComponent.htmlFilePath).then(html => {
        var parentNodeKey = '#section-thebible';
        $('head').append(`<link rel="stylesheet" href="${MainBiblesComponent.cssFilePath}">`);
        $(parentNodeKey).append(html);
        
        return parentNodeKey;
    }).then((nodeKey) => {
        MainBiblesComponent.init(nodeKey);
    })
}

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
