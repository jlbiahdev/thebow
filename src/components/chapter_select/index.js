import * as Commons from '../../resources/js/common.js';
import * as ChapterCardComponent from '../chapter_card/index.js';

const Component = (bookId) => $(`.chapter-select[data-book-key=${bookId}]`);
const ImageComponent = (bookId) => $(`.chapter-select[data-book-key=${bookId}] img`);
const BookNameComponent = (bookId) => $(`.chapter-select[data-book-key=${bookId}] .book-name`);
const ChaptersComponent = (bookId) => $(`.chapter-select[data-book-key=${bookId}] .chapters`);
// const ChapterComponent = (id) => $(`.chapter-card[data-id=${id}]`);

var ChapterCardComponent_Html = '';

export const cssFilePath = '/src/components/chapter_select/index.css';
export const htmlFilePath = '/src/components/chapter_select/index.html';

export const exists = (chapter) => Component(chapter.book.key).length;

export const contains = (chapterId) => ChapterCardComponent.exists(chapterId);

export const add = (chapter, callback) => {
    // console.log(`ChapterSelectComponent.add()`, chapter)

    // Component(chapter.book.key).empty()
    ImageComponent(chapter.book.key).attr("src", Commons.BibleImagesFolder + chapter.book.image);
    BookNameComponent(chapter.book.key).html(chapter.book.key);
    ChaptersComponent(chapter.book.key).append(ChapterCardComponent_Html.replaceAll('{chapter_number}', chapter.chapter.chapter).replaceAll('{chapter_id}', chapter.id).replaceAll('{book_key}', chapter.book.key));
    ChapterCardComponent.add(chapter, callback, chapter_removed);
}

export const append = (chapter, callback) => {
    // console.log(`ChapterSelectComponent.append()`, chapter)
    ChaptersComponent(chapter.book.key).append(ChapterCardComponent_Html.replaceAll('{chapter_number}', chapter.chapter.chapter).replaceAll('{chapter_id}', chapter.id).replaceAll('{book_key}', chapter.book.key));
    // ChapterComponent(chapter.id).on('click', function (e) { e.stopPropagation(); callback($(this).data('id')); });
    ChapterCardComponent.append(chapter, callback, chapter_removed);
}

export const init = () => {
    Commons.getHtmlFilePath(ChapterCardComponent.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${ChapterCardComponent.cssFilePath}">`);
        ChapterCardComponent_Html = html;
    });
}

const chapter_removed = (book_key) => {
    console.log('chapter_removed', book_key, ChaptersComponent(book_key).is(':empty'), ChaptersComponent(book_key))

    if (ChaptersComponent(book_key).is(':empty')) {
        Component(book_key).remove();
    }
}