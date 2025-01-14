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
                id:'1',
                name: 'Le Pentateuque',
                image: 'fotor-ot-pentateuch_1.jpg',
                books: [
                    {
                        key: 'gen',
                        name: 'Genèse',
                        image: 'fotor-ot-1-genesis_2.jpg',
                        chapters: Genesis.data
                    },
                    {
                        key: 'exo',
                        name: 'Exode',
                        image: 'fotor-ot-2-exodus_1.jpg',
                        chapters: Exodus.data
                    },
                    {
                        key: 'lev',
                        name: 'Lévitique',
                        image: 'fotor-ot-3-leviticus.jpg',
                        chapters: Leviticus.data
                    },
                    {
                        key: 'num',
                        name: 'Nombres',
                        image: 'fotor-ot-4-numbers.jpg',
                        chapters: Numbers.data
                    },
                    {
                        key: 'deu',
                        name: 'Deutéronome',
                        image: 'fotor-ot-5-deuteronomy.jpg',
                        chapters: Deuteronomy.data
                    },
                ]
            },
            {
                id:'2',
                name: 'Les Livres Historiques',
                image: 'fotor-ot-historical_books.jpg',
                books: [        
                    {
                        key: 'jos',
                        name: 'Josué',
                        image: 'fotor-ot-6-joshua.jpg',
                        chapters: Joshua.data
                    },
                    {
                        key: 'jdg',
                        name: 'Juges',
                        image: 'fotor-ot-7-judges.jpg',
                        chapters: Judges.data
                    },
                    {
                        key: 'rut',
                        name: 'Ruth',
                        image: 'fotor-ot-8-ruth.jpg',
                        chapters: Ruth.data
                    },
                    {
                        key: '1sa',
                        name: '1 Samuel',
                        image: 'fotor-ot-9-samuel.jpg',
                        chapters: Samuel1.data
                    },
                    {
                        key: '2sa',
                        name: '2 Samuel',
                        image: 'fotor-ot-9-samuel.jpg',
                        chapters: Samuel2.data
                    },
                    {
                        key: '1ki',
                        name: '1 Rois',
                        image: 'fotor-ot-11-kings.jpg',
                        chapters: Kings1.data
                    },
                    {
                        key: '2ki',
                        name: '2 Rois',
                        image: 'fotor-ot-11-kings.jpg',
                        chapters: Kings2.data
                    },
                    {
                        key: '1ch',
                        name: '1 Chroniques',
                        image: 'fotor-ot-13-chronicles.jpg',
                        chapters: Chronicles1.data
                    },
                    {
                        key: '2ch',
                        name: '2 Chroniques',
                        image: 'fotor-ot-13-chronicles.jpg',
                        chapters: Chronicles2.data
                    },
                    {
                        key: 'ezr',
                        name: 'Esdras',
                        image: 'fotor-ot-15-ezra.jpg',
                        chapters: Ezra.data
                    },
                    {
                        key: 'neh',
                        name: 'Néhémie',
                        image: 'fotor-ot-16-nehemiah.jpg',
                        chapters: Nehemiah.data
                    },
                    {
                        key: 'est',
                        name: 'Esther',
                        image: 'fotor-ot-17-esther.jpg',
                        chapters: Esther.data
                    },
                ]
            },
            {
                id:'3',
                name: 'Les Livres Poetiques',
                image: 'fotor-ot-poetic_books.jpg',
                books: [
                    {
                        key: 'job',
                        name: 'Job',
                        image: 'fotor-ot-18-job.jpg',
                        chapters: Job.data
                    },
                    {
                        key: 'psa',
                        name: 'Psaumes',
                        image: 'fotor-ot-19-psalms.jpg',
                        chapters: Psalms.data
                    },
                    {
                        key: 'pro',
                        name: 'Proverbes',
                        image: 'fotor-ot-20-proverbs.jpg',
                        chapters: Proverbs.data
                    },
                    {
                        key: 'ecc',
                        name: 'Ecclésiaste',
                        image: 'fotor-ot-21-ecclesiastes.jpg',
                        chapters: Ecclesiastes.data
                    },
                    {
                        key: 'sng',
                        name: 'Cantiques',
                        image: 'fotor-ot-22-song.jpg',
                        chapters: Song.data
                    },
                ]
            },
            {
                id:'4',
                name: 'Les Prophetes',
                image: 'fotor-ot-prophets.jpg',
                books: [
                    {
                        key: 'isa',
                        name: 'Esaïe',
                        image: 'fotor-ot-23-isaiah.jpg',
                        chapters: Isaiah.data
                    },
                    {
                        key: 'jer',
                        name: 'Jérémie',
                        image: 'fotor-ot-24-jeremiah.jpg',
                        chapters: Jeremiah.data
                    },
                    {
                        key: 'lam',
                        name: 'Lamentations De Jérémie',
                        image: 'fotor-ot-25-lamentations.jpg',
                        chapters: Lamentations.data
                    },
                    {
                        key: 'ezk',
                        name: 'Ezéchiel',
                        image: 'fotor-ot-26-ezekiel.jpg',
                        chapters: Ezekiel.data
                    },
                    {
                        key: 'dan',
                        name: 'Daniel',
                        image: 'fotor-ot-27-daniel.jpg',
                        chapters: Daniel.data
                    },
                    {
                        key: 'hos',
                        name: 'Osée',
                        image: 'fotor-ot-28-hosea.jpg',
                        chapters: Hosea.data
                    },
                    {
                        key: 'jol',
                        name: 'Joël',
                        image: 'fotor-ot-29-joel.jpg',
                        chapters: Joel.data
                    },
                    {
                        key: 'amo',
                        name: 'Amos',
                        image: 'fotor-ot-30-amos.jpg',
                        chapters: Amos.data
                    },
                    {
                        key: 'oba',
                        name: 'Abdias',
                        image: 'fotor-ot-31-obadiah.jpg',
                        chapters: Obadiah.data
                    },
                    {
                        key: 'jon',
                        name: 'Jonas',
                        image: 'fotor-ot-32-jonah.jpg',
                        chapters: Jonah.data
                    },
                    {
                        key: 'mic',
                        name: 'Michée',
                        image: 'fotor-ot-33-micai.jpg',
                        chapters: Micaiah.data
                    },
                    {
                        key: 'nam',
                        name: 'Nahum',
                        image: 'fotor-ot-34-nahum.jpg',
                        chapters: Nahum.data
                    },
                    {
                        key: 'hab',
                        name: 'Habakuk',
                        image: 'fotor-ot-35-habakuk.jpg',
                        chapters: Habakuk.data
                    },
                    {
                        key: 'zep',
                        name: 'Sophonie',
                        image: 'fotor-ot-36-zephaniah.jpg',
                        chapters: Zephaniah.data
                    },
                    {
                        key: 'hag',
                        name: 'Aggée',
                        image: 'fotor-ot-37-haggai.jpg',
                        chapters: Haggai.data
                    },
                    {
                        key: 'zec',
                        name: 'Zacharie',
                        image: 'fotor-ot-38-zechariah.jpg',
                        chapters: Zechariah.data
                    },
                    {
                        key: 'mal',
                        name: 'Malachie',
                        image: 'fotor-ot-39-malachi.jpg',
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
                id:'5',
                name: 'Les Evangiles',
                image: 'fotor-nt-gospels.jpg',
                books: [
                    {
                        key: 'mat',
                        name: 'Matthieu',
                        image: 'fotor-nt-1-matthew.jpg',
                        chapters: Matthew.data
                    },
                    {
                        key: 'mrk',
                        name: 'Marc',
                        image: 'fotor-nt-2-mark.jpg',
                        chapters: Mark.data
                    },
                    {
                        key: 'luk',
                        name: 'Luc',
                        image: 'fotor-nt-3-luke.jpg',
                        chapters: Luke.data
                    },
                    {
                        key: 'jhn',
                        name: 'Jean',
                        image: 'fotor-nt-4-john.jpg',
                        chapters: John.data
                    },
                ]
            },
            {
                id:'6',
                name: 'Le Livre Des Actes Des Apotres',
                image: 'fotor-nt-acts_2.jpg',
                books: [
                    {
                        key: 'act',
                        name: 'Actes Des Apôtres',
                        image: 'fotor-nt-5-acts.jpg',
                        chapters: Acts.data
                    },
                ]
            },
            {
                id:'7',
                name: 'Les Epitres De Paul',
                image: 'fotor-nt-paul.jpg',
                books: [
                    {
                        key: 'rom',
                        name: 'Romains',
                        image: 'fotor-nt-6-romans.jpg',
                        chapters: Romans.data
                    },
                    {
                        key: '1co',
                        name: '1 Corinthiens',
                        image: 'fotor-nt-7-corinthians.jpg',
                        chapters: Corinthians1.data
                    },
                    {
                        key: '2co',
                        name: '2 Corinthiens',
                        image: 'fotor-nt-7-corinthians.jpg',
                        chapters: Corinthians2.data
                    },
                    {
                        key: 'gal',
                        name: 'Galates',
                        image: 'fotor-nt-9-galatians.jpg',
                        chapters: Galatians.data
                    },
                    {
                        key: 'eph',
                        name: 'Ephésiens',
                        image: 'fotor-nt-10-ephesians.jpg',
                        chapters: Ephesians.data
                    },
                    {
                        key: 'php',
                        name: 'Philippiens',
                        image: 'fotor-nt-11-philippians.jpg',
                        chapters: Philippians.data
                    },
                    {
                        key: 'col',
                        name: 'Colossiens',
                        image: 'fotor-nt-12-colossians.jpg',
                        chapters: Colossians.data
                    },
                    {
                        key: '1th',
                        name: '1 Thessaloniciens',
                        image: 'fotor-nt-13-thessalonians.jpg',
                        chapters: Thessalonians1.data
                    },
                    {
                        key: '2th',
                        name: '2 Thessaloniciens',
                        image: 'fotor-nt-13-thessalonians.jpg',
                        chapters: Thessalonians2.data
                    },
                    {
                        key: '1ti',
                        name: '1 Timothée',
                        image: 'fotor-nt-15-timothy.jpg',
                        chapters: Timothy1.data
                    },
                    {
                        key: '2ti',
                        name: '2 Timothée',
                        image: 'fotor-nt-15-timothy.jpg',
                        chapters: Timothy2.data
                    },
                    {
                        key: 'tit',
                        name: 'Tite',
                        image: 'fotor-nt-17-titus_2.jpg',
                        chapters: Titus.data
                    },
                    {
                        key: 'phm',
                        name: 'Philémon',
                        image: 'fotor-nt-18-philemon.jpg',
                        chapters: Philemon.data
                    },
                ]
            },
            {
                id:'8',
                name: 'Autres Epitres',
                image: 'fotor-nt-paul_2.jpg',
                books: [
                    {
                        key: 'heb',
                        name: 'Hébreux',
                        image: 'fotor-nt-19-hebrews.jpg',
                        chapters: Hebrews.data
                    },
                    {
                        key: 'jas',
                        name: 'Jacques',
                        image: 'fotor-nt-20-james.jpg',
                        chapters: James.data
                    },
                    {
                        key: '1pe',
                        name: '1 Pierre',
                        image: 'fotor-nt-21-peter.jpg',
                        chapters: Peter1.data
                    },
                    {
                        key: '2pe',
                        name: '2 Pierre',
                        image: 'fotor-nt-21-peter.jpg',
                        chapters: Peter2.data
                    },
                    {
                        key: '1jn',
                        name: '1 Jean',
                        image: 'fotor-nt-23-john.jpg',
                        chapters: John1.data
                    },
                    {
                        key: '2jn',
                        name: '2 Jean',
                        image: 'fotor-nt-23-john.jpg',
                        chapters: John2.data
                    },
                    {
                        key: '3jn',
                        name: '3 Jean',
                        image: 'fotor-nt-23-john.jpg',
                        chapters: John3.data
                    },
                    {
                        key: 'jud',
                        name: 'Jude',
                        image: 'fotor-nt-26-jude.jpg',
                        chapters: Jude.data
                    },
                ]
            },
            {
                id:'9',
                name: `Le Livre De L'apocalypse`,
                image: 'fotor-nt-revelation.jpg',
                books: [
                    {
                        key: 'rev',
                        name: 'Apocalypse',
                        image: 'fotor-nt-27-revelation.jpg',
                        chapters: Revelation.data
                    },
                ]
            },
        ]
    },
]