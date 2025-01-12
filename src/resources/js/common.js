import * as Cookies from './cookies.js';

export const BIBLE_KEYS = {
    Archeo: 'archeo',
    BoJ: 'boj',
    Darby: 'darby',
    Osty: 'osty',
    Tol: 'tol'
};

export const APP_PAGES = {
    Home: 'Home',
    BibleView: 'BibleView',
    OtherBibleView: 'OtherBibleView',
    Faq: 'Faq'
};

export const open_page = (page) => {
    window.open(page,"_self");
}

export const open_page_by_id = (id, page, cookie) => {
    // console.log('open_page_by_id.cookie', cookie)
    Cookies.setCookie(cookie, id, 1);
    window.open(page,"_self");
}

export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const getHtmlFilePath = (path) => {
    return $.get(path, { 
        '_': $.now()
    }) // Prevents caching
    .done(function(data) {
        return data;
    })
    .fail(function(jqXHR, textStatus) {
        console.log(jqXHR, textStatus)
    });
}
