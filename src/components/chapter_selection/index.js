import * as ChapterComponent from '../chapter_select/index.js';
import * as Commons from '../../resources/js/common.js';

var ChapterComponentHtml = '';
const Component = () => $('#selected-chapters');
var chapter_clicked_callback;

export const cssFilePath = '/src/components/chapter_selection/index.css';
export const htmlFilePath = '/src/components/chapter_selection/index.html';

export const add = (chapter) => {
    // console.log('ChapterSelectionComponent.add chapter', chapter)
    var contains = ChapterComponent.contains(chapter.id);

    if (contains) return;
    // console.log('contains', contains)

    var chapterExists = ChapterComponent.exists(chapter);

    if (!chapterExists) {
        Component().append(ChapterComponentHtml.replaceAll('{book_key}', chapter.book.key));
        ChapterComponent.add(chapter, chapter_clicked_callback);
    } else {
        ChapterComponent.append(chapter, chapter_clicked_callback);
    }
}

export const init = (chapter_clicked) => {
    // console.log(`ChapterSelectionComponent.init()`)
    
    chapter_clicked_callback = chapter_clicked;
    Component().empty();
    Commons.getHtmlFilePath(ChapterComponent.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${ChapterComponent.cssFilePath}">`);
        ChapterComponentHtml = html;
    })
    .then(() => { ChapterComponent.init(); });
}