export const htmlFilePath = '/src/pages/home/components/menu/index.html';
export const cssFilePath = '/src/pages/home/components/menu/index.css';

export const init = () => {
    $('#resources-menu').on('click', function(e) {e.stopPropagation(); resources_menu_clicked(); });
}

const resources_menu_clicked = () => {
    console.log('resources-menu');
    var menu = $('#resources-submenu');

    $('#resources-submenu').css('display', menu.css('display') === 'block' ? 'none' : 'block');
}