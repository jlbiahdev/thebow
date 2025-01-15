import * as BibleIndexDb from '../../data/bible/_index.js';

export const get = () => {
    var items = BibleIndexDb.data;

    return items;
}


export const Build = () => {
    var bible = get();
    var result = [];

    bible.forEach(bk => {
        var book = {
            key: bk.key,
            name: bk.book,
            chapters: [],
        }

        bk.chapters.forEach(chapter => {
            var count = 0;
            var cptr = { id: chapter.index, lectures: [ { id: 1, title: ``, verses: [] },  { id: 2, title: ``, verses: [] },  { id: 3, title: ``, verses: [] } ]}
            book.chapters.push(cptr);

            while(count < chapter.verses) {
                cptr.lectures[0].verses.push({
                    id: count++,
                    text: ``,
                    footnote: [ ``, `` ]
                });
            }
        });
        result.push(book);
    })

    return result;
}