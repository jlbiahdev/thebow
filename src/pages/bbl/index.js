import * as Cookies from '../../resources/js/cookies.js';
import * as Commons from '../../resources/js/common.js';
import * as Presentations from '../../data/presentations/index.js';
import * as BibleIndexes from '../../data/bible/index.js';
import * as ChapterComponent from '../../components/chapter_view/index.js';
import * as ChapterMenuComponent from '../../components/chapter_select_menu/index.js';
import * as ChapterSelectionComponent from '../../components/chapter_selection/index.js';

const categoryPrefix = 'ktgr';
const chapterPrefix = 'cptr';

var ChapterComponent_Html = '';
var ChapterMenuComponent_Html = '';

$(document).ready(() => {
    var key = Cookies.getCookie(Cookies.COOKIES.SELECTED_BIBLE);
    var bibleInfo = Presentations.data.find(p => p.key === key);
    var bibleIndex = BibleIndexes.data.find(i => i.key === key);

    // console.log('key', key, 'bibleInfo', bibleInfo, 'BibleIndex', bibleIndex)

    $('title').html('Bible - ' + bibleInfo.data.name);
    $('.breadcrumb .breadcrumb-item.active').text(bibleInfo.data.name);

    bibleIndex.index.forEach(index => {
        $('#all-testaments').append(`
            <div class='testament' id='${index.testament}' data-container-id='all-testaments'>
                <div class='image-container'>
                    <img src='${Commons.BibleImagesFolder}${index.image}' alt=''>
                    <div class='name'>${index.name}</div>
                </div>
            </div>`
        );

        index.categories.forEach(category => {
            var categoryId = categoryPrefix + category.id;

            $(`#all-categories`).append(`
                <div class='category' id='${categoryId}' data-class='category' data-parent-id='${index.testament}' data-container-id='all-categories'>
                    <div class='image-container'>
                        <img src='${Commons.BibleImagesFolder}${category.image}' alt=''>
                        <div class='name'>${category.name}</div>
                    </div>
                </div>`
            );

            category.books.forEach(book => {
                $(`#all-books`).append(`
                    <div class='book' id='bk-${book.key}' data-class='book' data-parent-id='${categoryId}' data-container-id='all-books'>
                        <div class='book-card'>
                            <img src='${Commons.BibleImagesFolder}${book.image}' alt=''>
                            <div class='data'>
                                <div class='name'>${book.name}</div>
                                <div class='count'>${book.chapters.length} chapitre(s)</div>
                            </div>
                        </div>
                    </div>`
                );
                book.chapters.forEach(chapter => {
                    var chapterId = chapterPrefix + chapter.chapter;
                    $(`#all-chapters`).append(`<div class='chapter' id='${chapterId}-${book.key}-${categoryId}-${index.testament}-${key}' data-class='chapter' data-parent-id='bk-${book.key}' data-container-id='all-chapters'><div class='number'>${chapter.chapter}</div></div>`);
                });
            });
        });
    })

    Commons.getHtmlFilePath(ChapterSelectionComponent.htmlFilePath)
    .then(html => {
        $('head').append(`<link rel="stylesheet" href="${ChapterSelectionComponent.cssFilePath}">`);
        $('.container .content .filtered .data').append(html);
    })
    .then(() => {
        ChapterSelectionComponent.init(open_chapter);
    });

    $(document).on('click', function (e) { e.stopPropagation(); killChildren(); });
    $('.testament').on('click', function (e) { e.stopPropagation(); toggle('.category', this.id); });
    $('.category').on('click', function (e) { e.stopPropagation(); toggle('.book', this.id); });
    $('.book').on('click', function (e) { e.stopPropagation(); toggle('.chapter', this.id); });
    $('.chapter').on('click', function (e) { e.stopPropagation(); chapter_clicked(this.id); });
});

const displayType = 'flex';
const displayNone = 'none';

const isDisplayed = (value) => {
    return value === displayType;
};

const allTestamentContainerKey = '';
const allCategoriesContainerKey = 'all-categories';
const allBooksContainerKey = 'all-books';
const allChaptersContainerKey = 'all-chapters';

const killChildren = () => {
    // console.log('BiblePage.killChildren')
    ChapterMenuComponent.remove();
}

const chapter_clicked = (id) => {
    // console.log('chapter_clicked', id)
    ChapterMenuComponent.remove();

    if (ChapterMenuComponent_Html) {
        $(document.documentElement).append(ChapterMenuComponent_Html);
        ChapterMenuComponent.init(id, chapter_menu_clicked);
    } else {
        Commons.getHtmlFilePath(ChapterMenuComponent.htmlFilePath)
        .then(html => {
            ChapterMenuComponent_Html = html;
            $('head').append(`<link rel="stylesheet" href="${ChapterMenuComponent.cssFilePath}">`);
            $(document.documentElement).append(ChapterMenuComponent_Html);
        })
        .then(() => {
            ChapterMenuComponent.init(id, chapter_menu_clicked);
        });
    }
}

const chapter_menu_clicked = (chapterNum, action) => {
    switch (action) {
        case 'open':
            open_chapter(chapterNum);
            break;
        default:
            var keys = chapterNum.split('-');
            var bibleId = keys[4];
            var testamentId = keys[3];
            var categorieId = keys[2].replace(categoryPrefix, '');
            var bookId = keys[1];
            var chapterId = keys[0].replace(chapterPrefix, '');
            var book = BibleIndexes.
                data.find(i => i.key === bibleId)
                .index.find(e => e.testament === testamentId)
                .categories.find(e => e.id === categorieId)
                .books.find(e => e.key === bookId);
            var chapter = book.chapters.find(e => e.chapter === Number(chapterId));
            ChapterSelectionComponent.add({ id: chapterNum, book: { key: book.key, name: book.name, image: book.image}, chapter: chapter })
            break;
    }
}

const toggle = (className, parentId) => {
    // console.log('click', 'className', className, 'parentId', parentId)
    var categories = $(`#${allCategoriesContainerKey}>div`);
    var books = $(`#${allBooksContainerKey}>div`);
    var chapters = $(`#${allChaptersContainerKey}>div`);

    var classObjects = $(className);
    var trigger = $(`#${parentId}`);
    var nodes = $(`${className}[data-parent-id='${parentId}']`);
    var containerKey = trigger.data('container-id');
    var display = isDisplayed(nodes.first().css('display')) ? displayNone : displayType;

    switch (containerKey) {
        case allBooksContainerKey:
            chapters.css('display', displayNone);
            break;
        case allCategoriesContainerKey:
            chapters.css('display', displayNone);
            books.css('display', displayNone);
            break;
        default:
            chapters.css('display', displayNone);
            books.css('display', displayNone);
            categories.css('display', displayNone);
            break;
    }

    classObjects.css('display', displayNone);
    nodes.css('display', display);
}


const open_chapter = (id) => {
    // console.log('open_chapter', id)
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

    if (ChapterComponent_Html) {
        $(document.documentElement).append(ChapterComponent_Html);
        ChapterComponent.init(chapter);
    } else {
        Commons.getHtmlFilePath(ChapterComponent.htmlFilePath).then(html => {
            ChapterComponent_Html = html;
            $('head').append(`<link rel="stylesheet" href="${ChapterComponent.cssFilePath}">`);
            $(document.documentElement).append(ChapterComponent_Html);
        })
        .then(() => {
            ChapterComponent.init(chapter);
        });
    }
}