import * as Genesis from './1_genesis.js';
import * as Exodus from './2_exodus.js';
import * as Leviticus from './3_leviticus.js';
import * as Numbers from './4_numbers.js';
import * as Deuteronomy from './5_deuteronomy.js';
import * as Joshua from './6_joshua.js';
import * as Judges from './7_judges.js';
import * as Ruth from './8_ruth.js';
import * as Samuel1 from './9_1samuel.js';
import * as Samuel2 from './10_2samuel.js';
import * as Kings1 from './11_1kings.js';
import * as Kings2 from './12_2kings.js';
import * as Chronicles1 from './13_1chronicles.js';
import * as Chronicles2 from './14_2chronicles.js';
import * as Ezra from './15_ezra.js';
import * as Nehemiah from './16_nehemiah.js';
import * as Esther from './17_esther.js';
import * as Job from './18_job.js';
import * as Psalms from './19_psalms.js';
import * as Proverbs from './20_proverbs.js';
import * as Ecclesiastes from './21_ecclesiastes.js';
import * as Song from './22_song.js';
import * as Isaiah from './23_isaiah.js';
import * as Jeremiah from './24_jeremiah.js';
import * as Lamentations from './25_lamentations.js';
import * as Ezekiel from './26_ezekiel.js';
import * as Daniel from './27_daniel.js';
import * as Hosea from './28_hosea.js';
import * as Joel from './29_joel.js';
import * as Amos from './30_amos.js';
import * as Obadiah from './31_obadiah.js';
import * as Jonah from './32_jonah.js';
import * as Micaiah from './33_micaiah.js';
import * as Nahum from './34_nahum.js';
import * as Habakuk from './35_habakuk.js';
import * as Zephaniah from './36_zephaniah.js';
import * as Haggai from './37_haggai.js';
import * as Zechariah from './38_zechariah.js';
import * as Malachi from './39_malachi.js';
import * as Matthew from './40_matthew.js';
import * as Mark from './41_mark.js';
import * as Luke from './42_luke.js';
import * as John from './43_john.js';
import * as Acts from './44_acts.js';
import * as Romans from './45_romans.js';
import * as Corinthians1 from './46_1corinthians.js';
import * as Corinthians2 from './47_2corinthians.js';
import * as Galatians from './48_galatians.js';
import * as Ephesians from './49_ephesians.js';
import * as Philippians from './50_philippians.js';
import * as Colossians from './51_colossians.js';
import * as Thessalonians1 from './52_1thessalonians.js';
import * as Thessalonians2 from './53_2thessalonians.js';
import * as Timothy1 from './54_1timothy.js';
import * as Timothy2 from './55_2timothy.js';
import * as Titus from './56_titus.js';
import * as Philemon from './57_philemon.js';
import * as Hebrews from './58_hebrews.js';
import * as James from './59_james.js';
import * as Peter1 from './60_1peter.js';
import * as Peter2 from './61_2peter.js';
import * as John1 from './62_1john.js';
import * as John2 from './63_2john.js';
import * as John3 from './64_3john.js';
import * as Jude from './65_jude.js';
import * as Revelation from './66_revelation.js';

export const data = [
    {
        testament: 'old',
        name: 'Ancien Testament',
        image: 'fotor-ot.jpg',
        categories: [
            {
                id:'cat-1',
                name: 'Le Pentateuque',
                image: 'fotor-ot-pentateuch_1.jpg',
                books: [
                    {
                        key: 'gen',
                        name: 'Genèse',
                        chapters: Genesis.data
                    },
                    {
                        key: 'exo',
                        name: 'Exode',
                        chapters: Exodus.data
                    },
                    {
                        key: 'lev',
                        name: 'Lévitique',
                        chapters: Leviticus.data
                    },
                    {
                        key: 'num',
                        name: 'Nombres',
                        chapters: Numbers.data
                    },
                    {
                        key: 'deu',
                        name: 'Deutéronome',
                        chapters: Deuteronomy.data
                    },
                ]
            },
            {
                id:'cat-2',
                name: 'Les Livres Historiques',
                image: 'fotor-ot-historical_books.jpg',
                books: [        
                    {
                        key: 'jos',
                        name: 'Josué',
                        chapters: Joshua.data
                    },
                    {
                        key: 'jdg',
                        name: 'Juges',
                        chapters: Judges.data
                    },
                    {
                        key: 'rut',
                        name: 'Ruth',
                        chapters: Ruth.data
                    },
                    {
                        key: '1sa',
                        name: '1 Samuel',
                        chapters: Samuel1.data
                    },
                    {
                        key: '2sa',
                        name: '2 Samuel',
                        chapters: Samuel2.data
                    },
                    {
                        key: '1ki',
                        name: '1 Rois',
                        chapters: Kings1.data
                    },
                    {
                        key: '2ki',
                        name: '2 Rois',
                        chapters: Kings2.data
                    },
                    {
                        key: '1ch',
                        name: '1 Chroniques',
                        chapters: Chronicles1.data
                    },
                    {
                        key: '2ch',
                        name: '2 Chroniques',
                        chapters: Chronicles2.data
                    },
                    {
                        key: 'ezr',
                        name: 'Esdras',
                        chapters: Ezra.data
                    },
                    {
                        key: 'neh',
                        name: 'Néhémie',
                        chapters: Nehemiah.data
                    },
                    {
                        key: 'est',
                        name: 'Esther',
                        chapters: Esther.data
                    },
                ]
            },
            {
                id:'cat-3',
                name: 'Les Livres Poetiques',
                image: 'fotor-ot-poetic_books.jpg',
                books: [
                    {
                        key: 'job',
                        name: 'Job',
                        chapters: Job.data
                    },
                    {
                        key: 'psa',
                        name: 'Psaumes',
                        chapters: Psalms.data
                    },
                    {
                        key: 'pro',
                        name: 'Proverbes',
                        chapters: Proverbs.data
                    },
                    {
                        key: 'ecc',
                        name: 'Ecclésiaste',
                        chapters: Ecclesiastes.data
                    },
                    {
                        key: 'sng',
                        name: 'Cantiques',
                        chapters: Song.data
                    },
                ]
            },
            {
                id:'cat-4',
                name: 'Les Prophetes',
                image: 'fotor-ot-prophets.jpg',
                books: [
                    {
                        key: 'isa',
                        name: 'Esaïe',
                        chapters: Isaiah.data
                    },
                    {
                        key: 'jer',
                        name: 'Jérémie',
                        chapters: Jeremiah.data
                    },
                    {
                        key: 'lam',
                        name: 'Lamentations De Jérémie',
                        chapters: Lamentations.data
                    },
                    {
                        key: 'ezk',
                        name: 'Ezéchiel',
                        chapters: Ezekiel.data
                    },
                    {
                        key: 'dan',
                        name: 'Daniel',
                        chapters: Daniel.data
                    },
                    {
                        key: 'hos',
                        name: 'Osée',
                        chapters: Hosea.data
                    },
                    {
                        key: 'jol',
                        name: 'Joël',
                        chapters: Joel.data
                    },
                    {
                        key: 'amo',
                        name: 'Amos',
                        chapters: Amos.data
                    },
                    {
                        key: 'oba',
                        name: 'Abdias',
                        chapters: Obadiah.data
                    },
                    {
                        key: 'jon',
                        name: 'Jonas',
                        chapters: Jonah.data
                    },
                    {
                        key: 'mic',
                        name: 'Michée',
                        chapters: Micaiah.data
                    },
                    {
                        key: 'nam',
                        name: 'Nahum',
                        chapters: Nahum.data
                    },
                    {
                        key: 'hab',
                        name: 'Habakuk',
                        chapters: Habakuk.data
                    },
                    {
                        key: 'zep',
                        name: 'Sophonie',
                        chapters: Zephaniah.data
                    },
                    {
                        key: 'hag',
                        name: 'Aggée',
                        chapters: Haggai.data
                    },
                    {
                        key: 'zec',
                        name: 'Zacharie',
                        chapters: Zechariah.data
                    },
                    {
                        key: 'mal',
                        name: 'Malachie',
                        chapters: Malachi.data
                    },
                ]
            },
            
        ]
    },
    {
        testament: 'new',
        name: 'Nouveau Testament',
        image: 'fotor-nt.jpg',
        categories: [
            {
                id:'cat-5',
                name: 'Les Evangiles',
                image: 'fotor-nt-gospels.jpg',
                books: [
                    {
                        key: 'mat',
                        name: 'Matthieu',
                        chapters: Matthew.data
                    },
                    {
                        key: 'mrk',
                        name: 'Marc',
                        chapters: Mark.data
                    },
                    {
                        key: 'luk',
                        name: 'Luc',
                        chapters: Luke.data
                    },
                    {
                        key: 'jhn',
                        name: 'Jean',
                        chapters: John.data
                    },
                ]
            },
            {
                id:'cat-6',
                name: 'Le Livre Des Actes Des Apotres',
                image: 'fotor-nt-acts_2.jpg',
                books: [
                    {
                        key: 'act',
                        name: 'Actes Des Apôtres',
                        chapters: Acts.data
                    },
                ]
            },
            {
                id:'cat-7',
                name: 'Les Epitres De Paul',
                image: 'fotor-nt-paul.jpg',
                books: [
                    {
                        key: 'rom',
                        name: 'Romains',
                        chapters: Romans.data
                    },
                    {
                        key: '1co',
                        name: '1 Corinthiens',
                        chapters: Corinthians1.data
                    },
                    {
                        key: '2co',
                        name: '2 Corinthiens',
                        chapters: Corinthians2.data
                    },
                    {
                        key: 'gal',
                        name: 'Galates',
                        chapters: Galatians.data
                    },
                    {
                        key: 'eph',
                        name: 'Ephésiens',
                        chapters: Ephesians.data
                    },
                    {
                        key: 'php',
                        name: 'Philippiens',
                        chapters: Philippians.data
                    },
                    {
                        key: 'col',
                        name: 'Colossiens',
                        chapters: Colossians.data
                    },
                    {
                        key: '1th',
                        name: '1 Thessaloniciens',
                        chapters: Thessalonians1.data
                    },
                    {
                        key: '2th',
                        name: '2 Thessaloniciens',
                        chapters: Thessalonians2.data
                    },
                    {
                        key: '1ti',
                        name: '1 Timothée',
                        chapters: Timothy1.data
                    },
                    {
                        key: '2ti',
                        name: '2 Timothée',
                        chapters: Timothy2.data
                    },
                    {
                        key: 'tit',
                        name: 'Tite',
                        chapters: Titus.data
                    },
                    {
                        key: 'phm',
                        name: 'Philémon',
                        chapters: Philemon.data
                    },
                ]
            },
            {
                id:'cat-8',
                name: 'Autres Epitres',
                image: 'fotor-nt-paul_2.jpg',
                books: [
                    {
                        key: 'heb',
                        name: 'Hébreux',
                        chapters: Hebrews.data
                    },
                    {
                        key: 'jas',
                        name: 'Jacques',
                        chapters: James.data
                    },
                    {
                        key: '1pe',
                        name: '1 Pierre',
                        chapters: Peter1.data
                    },
                    {
                        key: '2pe',
                        name: '2 Pierre',
                        chapters: Peter2.data
                    },
                    {
                        key: '1jn',
                        name: '1 Jean',
                        chapters: John1.data
                    },
                    {
                        key: '2jn',
                        name: '2 Jean',
                        chapters: John2.data
                    },
                    {
                        key: '3jn',
                        name: '3 Jean',
                        chapters: John3.data
                    },
                    {
                        key: 'jud',
                        name: 'Jude',
                        chapters: Jude.data
                    },
                ]
            },
            {
                id:'cat-9',
                name: `Le Livre De L'apocalypse`,
                image: 'fotor-nt-revelation.jpg',
                books: [
                    {
                        key: 'rev',
                        name: 'Apocalypse',
                        chapters: Revelation.data
                    },
                ]
            },
        ]
    },
]