const Component = (id) => $(`.chapter-card[data-id=${id}]`);
const MinusElement = (id) => $(`.chapter-card[data-id=${id}] i.fa-minus`);
const OpenElement = (id) => $(`.chapter-card[data-id=${id}] i.fa-book-open`);

export const cssFilePath = '/src/components/chapter_card/index.css';
export const htmlFilePath = '/src/components/chapter_card/index.html';

export const exists = (chapterId) => Component(chapterId).length;

// export const contains = (chapterId) => ChapterComponent(chapterId).length;

export const add = (chapter, callback, removeCallback) => {
    // console.log(`ChapterCardComponent.init()`, chapter)

    OpenElement(chapter.id).on('click', function (e) { e.stopPropagation(); callback($(this).data('id')); });
    MinusElement(chapter.id).on('click', function (e) { e.stopPropagation(); remove(this, removeCallback) });
}

export const append = (chapter, callback, removeCallback) => {
    // console.log(`ChapterCardComponent.append()`, chapter)

    OpenElement(chapter.id).on('click', function (e) { e.stopPropagation(); callback($(this).data('id')); });
    MinusElement(chapter.id).on('click', function (e) { e.stopPropagation(); remove(this, removeCallback) });
}

const remove = (element, callback) => {
    Component($(element).data('id')).remove();
    callback($(element).data('book-key'));
}