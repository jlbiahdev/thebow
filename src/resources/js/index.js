import * as Cookies from './cookies.js';
import * as Commons from './common.js';
import * as HomeComponent from '../../components/home/index.js';

$(document).ready(() => {
    Commons.getHtmlFilePath(HomeComponent.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${HomeComponent.cssFilePath}">`);
        $('#body .container').append(html);
        HomeComponent.init();
        Cookies.setCookie(Cookies.COOKIES.ACTIVE_PAGE, HomeComponent.pageName, 1);
    });
});