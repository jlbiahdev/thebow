import * as Cookies from './cookies.js';
import * as Commons from './common.js';
import * as HomeComponent from '../../components/home/index.js'

$(document).ready(() => {
    loadActivePage();
});

const loadActivePage = () => {
    var activePage = Cookies.getCookie(Cookies.COOKIES.ACTIVE_PAGE);

    console.log(activePage)

    if (!activePage) {
        Commons.getHtmlFilePath(HomeComponent.htmlFilePath).then(html => {
            $('head').append(`<link rel="stylesheet" href="${HomeComponent.cssFilePath}">`);
            $('#body .container').append(html);
            HomeComponent.init();
        });
    }
}