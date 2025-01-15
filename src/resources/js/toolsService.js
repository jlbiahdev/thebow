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
            var cptr = { id: chapter.index, verses: []}
            book.chapters.push(cptr);

            while(count < chapter.verses) {
                cptr.verses.push({
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