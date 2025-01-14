
const versPrefix = 'vs';

export const cssFilePath = '/src/components/verse_view/index.css';
export const htmlFilePath = '/src/components/verse_view/index.html';

export const init = (lecture) => {
    // console.log(`VerseComponent.init()`, lecture.number, lecture)
   $(`#${lecture.id} .text`).html(lecture.text)
}