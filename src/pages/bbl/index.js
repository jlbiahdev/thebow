import * as Cookies from '../../resources/js/cookies.js';
import * as Commons from '../../resources/js/common.js';
import * as Presentations from '../../data/presentations/index.js';
import * as BibleIndexes from '../../data/bible/index.js';
import * as ChapterComponent from '../../components/chapter_view/index.js';

const categoryPrefix = 'ktgr';
const chapterPrefix = 'cptr';

$(document).ready(() => {
    var key = Cookies.getCookie(Cookies.COOKIES.SELECTED_BIBLE);
    var bibleInfo = Presentations.data.find(p => p.key === key);
    var bibleIndex = BibleIndexes.data.find(i => i.key === key);

    // console.log('key', key, 'bibleInfo', bibleInfo, 'BibleIndex', bibleIndex)

    $('title').html('Bible - ' + bibleInfo.data.name);

    bibleIndex.index.forEach(index => {
        $('#all-testaments').append(`
            <div class='testament' id='${index.testament}'>
                <div class='image-container'>
                    <img src='/src/resources/img/bible/${index.image}' alt=''>
                    <div class='name'>${index.name}</div>
                </div>
            </div>`
        );
        // console.log('categories', index.categories)
        // $('#all-categories').append(`<div class='categories' data-parent-id='${index.testament}'></div>`);

        index.categories.forEach(category => {
            // console.log('category :', category.name)
            var categoryId = categoryPrefix + category.id;

            $(`#all-categories`).append(`
                <div class='category' id='${categoryId}' data-class='category' data-parent-id='${index.testament}' data-container-id='categories'>
                    <div class='image-container'>
                        <img src='/src/resources/img/bible/${category.image}' alt=''>
                        <div class='name'>${category.name}</div>
                    </div>
                </div>`
            );

            category.books.forEach(book => {
                // console.log('book', book.name)
                $(`#all-books`).append(`
                    <div class='book' id='bk-${book.key}' data-class='book' data-parent-id='${categoryId}' data-container-id='books'>
                        <div class='book-card'>
                            <img src='/src/resources/img/bible/${book.image}' alt=''>
                            <div class='data'>
                                <div class='name'>${book.name}</div>
                                <div class='count'>${book.chapters.length} chapitre(s)</div>
                            </div>
                        </div>
                    </div>`
                );
                book.chapters.forEach(chapter => {
                    var chapterId = chapterPrefix + chapter.chapter;
                    $(`#all-chapters`).append(`<div class='chapter' id='${chapterId}-${book.key}-${categoryId}-${index.testament}-${key}' data-class='chapter' data-parent-id='bk-${book.key}' data-container-id='chapters'><div class='number'>${chapter.chapter}</div></div>`);
                });
            });
        });
    })

    $('.testament').on('click', function (e) { e.stopPropagation(); toggle('.category', this.id); });
    $('.category').on('click', function (e) { e.stopPropagation(); toggle('.book', this.id); });
    $('.book').on('click', function (e) { e.stopPropagation(); toggle('.chapter', this.id); });
    $('.chapter').on('click', function (e) { open_chapter(this.id); });
});

const displayType = 'flex';
const displayNone = 'none';

const isDisplayed = (value) => {
    // console.log(value)
    return value === displayType;
};

const toggle = (className, parentId) => {
    // console.log('click', 'containerClassName', containerClassName, 'className', className, 'parentId', parentId)
    // var chapters = $('#all-chapters>div');

    var classObjects = $(className);
    var nodes = $(`${className}[data-parent-id='${parentId}']`);
    var display = isDisplayed(nodes.first().css('display')) ? displayNone : displayType;

    if (!isDisplayed(display)) {
        // console.log('click', 'containerClassName', containerClassName, 'className', className, 'parentId', parentId)
        clearChilds(parentId)
    }

    classObjects.css('display', displayNone);
    nodes.css('display', display);
}

const clearChilds = (parentId) => {
    console.log('clearChilds', parentId)

    var items = $(`[data-parent-id=${parentId}]`)
    var className = '';
    var containerName = '';

    items.each((i, obj) => {
        var node = $(obj);
        if (isDisplayed(node.css('display'))) {
            clearChilds(obj.id);
            node.css('display', displayNone);
            containerName = node.data('container-id');
            className = node.data('class');
        }
    });

    if (!containerName || !className) return;

    var container = $('#' + containerName);
    var classOjb = $('#' + className);

    // console.log('container', containerName, 'className', className)
    var empty = classOjb.filter(function () { return isDisplayed($(this).css('display')) });
    // console.log('container.empty', containerName, className, empty.length)
    // if (!empty.length) {
    //     container.css('display', displayNone);
    // }
}

const open_chapter = (id) => {
    // console.log(id)
    var keys = id.split('-');
    var bibleId = keys[4];
    var testamentId = keys[3];
    var categorieId = keys[2].replace(categoryPrefix, '');
    var bookId = keys[1];
    var chapterId = keys[0].replace(chapterPrefix, '');
    var chapter = BibleIndexes.
        data.find(i => i.key === bibleId)
        .index.find(e => e.testament === testamentId)
        .categories.find(e => e.id === categorieId)
        .books.find(e => e.key === bookId)
        .chapters.find(e => e.chapter === Number(chapterId))
        ;

    Commons.getHtmlFilePath(ChapterComponent.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${ChapterComponent.cssFilePath}">`);
        $(document.documentElement).append(html);
    })
    .then(() => {
        ChapterComponent.init(chapter);
    });
}