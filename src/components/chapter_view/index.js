import * as LectureComponent from '../lecture_view/index.js';
import * as LectureButtonComponent from '../lecture_button/index.js';
import * as Commons from '../../resources/js/common.js';

var lectures = [];

export const cssFilePath = '/src/components/chapter_view/index.css';
export const htmlFilePath = '/src/components/chapter_view/index.html';

export const init = (chapter) => {
    // console.log(`ChapterComponent.init()`, chapter)

    Commons.getHtmlFilePath(LectureButtonComponent.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${LectureButtonComponent.cssFilePath}">`);

        chapter.lectures.forEach(item => {
            $('.shadow .card .buttons').append(html
                .replaceAll('{chapter_id}', chapter.id)
                .replaceAll('{lecture_id}', item.id)
                .replaceAll('{lecture_title}', item.title)
                .replaceAll('{lecture_versescount}', item.verses.length)
            );
            lectures.push(item);
        });
    })
        .then(() => {
            LectureButtonComponent.init(chapter.lectures, lecture_buttoniclicked);
        })
        .then(() => {
            $('.shadow').on('click', function () { this.remove(); })
            $('.shadow .card').on('click', function (e) { e.stopPropagation(); })
    });
}

const lecture_buttoniclicked = (id) => {
    // console.log('lecture_buttoniclicked', lectures, lectures.find(item => item.id === Number(id)))

    var target = $('.shadow .card .lecture');
    // target.hide(500, function(){ target.empty(); target.show(500, () => {});});

    Commons.getHtmlFilePath(LectureComponent.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${LectureComponent.cssFilePath}">`);
        target.html(html.replaceAll('{lecture_id}', id));
    })
    .then(() => {
        var items = lectures.find(item => item.id === Number(id));

        // console.log('items', items)
        LectureComponent.init(items);
    });
 
}