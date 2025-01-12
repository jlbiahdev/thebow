import * as Cookies from '../../resources/js/cookies.js';
import * as Commons from '../../resources/js/common.js';
import * as Presentations from '../../data/presentations/index.js';
import * as BibleIndexes from '../../data/bible/index.js';

$(document).ready(() => {
    var key = Cookies.getCookie(Cookies.COOKIES.SELECTED_BIBLE);
    var bibleInfo = Presentations.data.find(p => p.key === key);
    var bibleIndex = BibleIndexes.data.find(i => i.key === key);

    console.log('key', key, 'bibleInfo', bibleInfo, 'BibleIndex', bibleIndex)

    $('title').html('Bible - ' + bibleInfo.data.name);

    bibleIndex.index.forEach(index => {
        $('.content').append(`<div class='testament' id='${index.testament}'><div class='name'>${index.name}</div><div class='categories'></div></div>`)
        console.log('categories', index.categories)

        index.categories.forEach(category => {
            console.log('category :', category.name)
            $(`#${index.testament} .categories`).append(`<div class='category' id='${category.id}'><div class='name'>${category.name}</div><div class='books'></div></div>`);

            category.books.forEach(book => {
                console.log('book', book.name)
                $(`#${category.id} .books`).append(`<div class='book' id='bk-${book.key}'><div class='name'>${book.name}</div><div class='chapters'></div></div>`);

                book.chapters.forEach(chapter => {
                    console.log('chapter', chapter)
                    $(`#bk-${book.key} .chapters`).append(`<div class='chapter' id='cpt-${chapter.chapter}'><div class='number'>${chapter.chapter}</div></div>`);
                });
            });
        });


    })

    $('.content>div').on('click', function () { $('.expandable').toggle('show'); });
});

