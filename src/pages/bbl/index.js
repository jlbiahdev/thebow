import * as Cookies from '../../resources/js/cookies.js';
import * as Commons from '../../resources/js/common.js';
import * as Presentations from '../../data/presentations/index.js';
import * as BibleIndexes from '../../data/bible/index.js';
import * as ChapterComponent from '../../components/chapter_view/index.js';

$(document).ready(() => {
    var key = Cookies.getCookie(Cookies.COOKIES.SELECTED_BIBLE);
    var bibleInfo = Presentations.data.find(p => p.key === key);
    var bibleIndex = BibleIndexes.data.find(i => i.key === key);

    // console.log('key', key, 'bibleInfo', bibleInfo, 'BibleIndex', bibleIndex)

    $('title').html('Bible - ' + bibleInfo.data.name);

    bibleIndex.index.forEach(index => {
        $('.all-testaments').append(`
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

            $(`#all-categories`).append(`
                <div class='category' id='${category.id}' data-parent-id='${index.testament}'>
                    <div class='image-container'>
                        <img src='/src/resources/img/bible/${category.image}' alt=''>
                        <div class='name'>${category.name}</div>
                    </div>
                </div>`
            );

            category.books.forEach(book => {
                // console.log('book', book.name)
                $(`#all-books`).append(`
                    <div class='book' id='bk-${book.key}' data-parent-id='${category.id}'>
                        <div class='book-card'>
                            <img src='/src/resources/img/bible/${book.image}' alt=''>
                            <div class='data'>
                                <div class='name'>${book.name}</div>
                                <div class='count'>${book.chapters.length} chapitre(s)</div>
                            </div>
                        </div>
                    </div>`
                );
                // <i class="fa-solid fa-book-bible"></i>
                book.chapters.forEach(chapter => {
                    $(`#all-chapters`).append(`<div class='chapter' id='${chapter.chapter}-${book.key}-${category.id}-${index.testament}-${key}' data-parent-id='bk-${book.key}'><div class='number'>${chapter.chapter}</div></div>`);
                });
                // $(`.book[data-parent-id='${category.id}']`).hover(function() { $(`.book[data-parent-id='${category.id}']`).addClass(category.id)});
            });
        });
    })

    // $('.testament').on('click', function (e) { e.stopPropagation(); $(`.categories[data-parent-id='${this.id}']`).toggle('show'); });
    // $('.category').on('click', function (e) { e.stopPropagation(); $(`.books[data-parent-id='${this.id}']`).toggle('show'); });
    // $('.book').on('click', function (e) { console.log('.book click', this.id); e.stopPropagation(); $(`.chapters[data-parent-id='${this.id}']`).toggle('show'); });

    $('.testament').on('click', function (e) { e.stopPropagation(); toggle('#categories', '.category', this.id); });
    $('.category').on('click', function (e) { e.stopPropagation(); toggle('#books', '.book', this.id); });
    $('.book').on('click', function (e) { e.stopPropagation(); toggle('#chapters', '.chapter', this.id); });
    $('.chapter').on('click', function (e) { open_chapter(this.id); });
});

const toggle = (containerClassName, className, parentId) => {
    // console.log('click', className)
    var container = $(containerClassName);
    var nodes = $(`${className}[data-parent-id='${parentId}']`);
    var display = nodes.first().css('display') === 'flex' ? 'none' : 'flex';

    console.log('nodes', $(`[data-parent-id='${parentId}']`));
    // console.log('nodes.first()', nodes.first().css('display'));
    // console.log('display', display);

    nodes.css('display', display);
    if (display == 'none') {
        $(`[data-parent-id='${parentId}']`).css('display', display);
    }
    
    var stillNodes = $(className).filter(function () { return $(this).css('display') === 'flex' });

    if (stillNodes.length && display === 'none') { return;}
    container.css('display', display);
}

const open_chapter = (id) => {
    // console.log(id)
    var keys = id.split('-');
    var bibleId = keys[4];
    var testamentId = keys[3];
    var categorieId = keys[2];
    var bookId = keys[1];
    var chapterId = keys[0];
    var chapter = BibleIndexes.
        data.find(i => i.key === bibleId)
        .index.find(e => e.testament === testamentId)
        .categories.find(e => e.id === categorieId)
        .books.find(e => e.key === bookId)
        .chapters.find(e => e.chapter === Number(chapterId))
        ;

    // console.log('keys', keys, 'bible', bibleId, 'testament', testamentId, 'categorie', categorieId, 'book', bookId, 'chapter', chapterId)
    // console.log('chapter', chapter)

    Commons.getHtmlFilePath(ChapterComponent.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${ChapterComponent.cssFilePath}">`);
        $(document.documentElement).append(html);
    })
    .then(() => {
        ChapterComponent.init(chapter);
    });
}