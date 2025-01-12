import * as ToolService from '../../resources/js/toolsService.js';
import * as Commons from '../../resources/js/common.js';
import * as Cookies from '../../resources/js/cookies.js';
import * as MainMenu from './components/menu/index.js';
import * as IntroComponent from './components/intro/index.js';
import * as MainBiblesComponent from './components/main_bibles/index.js';
import * as OtherBiblesComponent from './components/other_bibles/index.js';

export const cssFilePath = '/src/components/home/index.css';
export const htmlFilePath = '/src/components/home/index.html';
export const pageName = Commons.APP_PAGES.Home;

export const init = () => {
    // console.log('IndexComponent.init')
    insertMenu();
    insertIntro();
    insertMainBibles();
    insertOtherBibles();
    initBible();
}

const insertMenu = () => {
    // console.log('HomeComponent.insertMenu')
    Commons.getHtmlFilePath(MainMenu.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${MainMenu.cssFilePath}">`);
        $('nav').append(html);
    });
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

const insertOtherBibles = () => {
    // console.log('HomeComponent.insertOtherBibles')
    Commons.getHtmlFilePath(OtherBiblesComponent.htmlFilePath).then(html => {
        var parentNodeKey = '#section-otherbibles';
        $('head').append(`<link rel="stylesheet" href="${OtherBiblesComponent.cssFilePath}">`);
        $(parentNodeKey).append(html);
        
        return parentNodeKey;
    }).then((nodeKey) => {
        OtherBiblesComponent.init(nodeKey);
    })
}

const initBible = () => {
    var chapters = ToolService.Build()

    console.log(chapters);
}
