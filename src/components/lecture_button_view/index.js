export const cssFilePath = '/src/components/lecture_button_view/index.css';
export const htmlFilePath = '/src/components/lecture_button_view/index.html';

export const init = (lecture, callback) => {
    // console.log(`LectureButtonComponent.init()`, lecture)

    $('.lecture-button').on('click', function() { callback($(this).data('id')); })
}