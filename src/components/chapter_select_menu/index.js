
export const cssFilePath = '/src/components/chapter_select_menu/index.css';
export const htmlFilePath = '/src/components/chapter_select_menu/index.html';

const Component = () => $('#chapter-menu');
const OpenMenu = () => $('#chapter-menu .open');
const SelectMenu = () => $('#chapter-menu .select');
export const remove = () => Component().remove();
export const init = (chapterNum, callback) => {
    // console.log(`ChapterSelectMenuComponent.init()`, chapterNum)
    Component().attr('data-chapter', chapterNum);

    var position = $(`#${chapterNum}`).position();

    Component().css('top', position.top + 25);
    Component().css('left', position.left - 105);
    OpenMenu().on('click', function () { callback(chapterNum, 'open'); });
    SelectMenu().on('click', function () { callback(chapterNum, 'select'); });
}