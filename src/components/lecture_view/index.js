
import * as Commons from '../../resources/js/common.js';
import * as VerseComponent from '../verse_view/index.js';

export const cssFilePath = '/src/components/lecture_view/index.css';
export const htmlFilePath = '/src/components/lecture_view/index.html';

const lecturePrefix = 'lc';

export const init = (lecture) => {
    // console.log(`LectureComponent.init()`, lecture.id, lecture)

   Commons.getHtmlFilePath(VerseComponent.htmlFilePath).then(html => {
        $('head').append(`<link rel="stylesheet" href="${VerseComponent.cssFilePath}">`);

        lecture.verses.forEach(item => {
            // console.log('LectureComponent.init::lecture', item)
            $(`#${lecturePrefix + lecture.id} .verses`).append(html
                .replaceAll('{verse_number}', item.id)
                .replace('{verse_text}', item.text)
            );
        });
    })
    .then(() => {
        lecture.verses.forEach(item => {
            VerseComponent.init(item);
        });
    });
}