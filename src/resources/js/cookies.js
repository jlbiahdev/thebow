export const COOKIES = {
    SELECTED_BIBLE: 'SELECTED_BIBLE',
};

export const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getCookie = (cname) => {
    // console.log('CookiesComponent.getCookie');
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return null;
}

export const removeCookie = (cname) => {
    // console.log('CookiesComponent.removeCookie');
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export const resetSelectedModelCookies = () => {
    // console.log('CookiesComponent.resetSelectedModelCookies');
    setCookie(COOKIES.FAVMODEL_CURRENT_MODELS, '{}', .125);
    setCookie(COOKIES.FAVMODEL_SELECTED_IDS, '[]', .125);
}

export const resetRendezVousRecord = () => {
    setCookie(COOKIES.RDV_RECORD, '{}', .125);
    setCookie(COOKIES.RDV_ADD_CURR_STEP, '-1', .125);
}

export const getRendezVousRecord = () => JSON.parse(getCookie(COOKIES.RDV_RECORD));
