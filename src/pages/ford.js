import {MDQuest} from "../framework/quest";

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const QUESTION_NUM_NAME = [
  "першу",
  "другу",
  "третю",
  "четверту",
  "п’яту",
  "шосту",
  "сьому"
];
const QUESTIONS = [
    ["Дітей годує, а сама не їсть.", "ложка"],
    ["Сімсот соколят на одній подушці сплять, та все на сонце дивляться.", "соняшник"],
    ["Сидить баба на грядках, вся в жупанах і хустках.", "капуста"],
    ["Що дістане зубами потилиці?", "гребінець"],
    ["У воді водиться, хвостатим родиться, коли виростає, хвіст пропадає.", "жаба"],
    ["Із землі з’явився, в воді народився, у вогні хрестився.", "глечик"],
    ["Що то за діжка на чотирьох ніжках, спереду коле, іззаду замітає.", "корова"],
    ["Їхала пані у срібнім жупані, а на тім жупані латка на латці.", "риба"],
    ["Що то за дорога, що півроку із конем їздять, а півроку без коня?", "річка"],
    ["Їсть — не наїдається, а води поп’є — одразу помре.", "вогонь"],
    ["Кружечок сиру на хаті лежить. Собаки виють, дістати не можуть.", "місяць"],
    ["У казанок чорним, із казанка — червоним.", "рак"],
    ["Влітку в шубі, взимку в шапці.", "дерево"],
    ["Від хати до хати йде, а в дім не заходить.", "стежка"],
    ["По синьому морю білі гусаки пливуть.", "хмари"],
    ["Скажи-но, від чого качка пливе?", "берег"],
];




export class Ford extends MDQuest {
    startLoc = 'брід0';


    getQuestion = () => {
        let questions = this.get('questions');
        let questionNum = this.get("номер_загадки");

        return questions[questionNum]
    };

    getLocation = () => {
        let location = super.getLocation();
        if (location !== undefined) {
            return location;
        }

        let answer = this.get('__location');
        let [, correctAnswer] = this.getQuestion();
        this.set(
            "номер_загадки",
            this.get('count_вірно')+this.get('count_невірно')+1);

        if (answer === correctAnswer) {
            return this['вірно'](answer);
        } else {
            return this['невірно'](answer);
        }
    };


    брід0 = () => {
        let questions = shuffleArray(QUESTIONS);

        this.set('questions', questions);
        this.gset("статус_брід", 1);
        this.set("номер_загадки", 0);

        return `
            Ось і брід, про який домовик розказував. А коло броду водяник лежить,
            сохне. Громадний, как віл. Пузо вивалив, очищі витріщив, увесь у мулі
            та водоростях, риб’ячий хвіст по землі стелеться.
    
            — Вітаю, хазяїне вод, — говорить джура.— Чи дозволиш брід перейти?
    
            Вдарив водяник по воді хвостом, аж луна пішла.
    
            — Ходять тут усякі, — каже, — тільки набридають. З чого мені тебе
            пускати? Хочеш пройти — повесели мене! Відгадаєш три загадки — пущу,
            а як ні — як знаеш, так і перебирайся!
    
            — А чого ж не відгадати? Загадуй!
           
            [Далі](#загадка)
        `
    };


    брід1 = () => `
        — Ну що? — говорить водяник. — Готовий відгадувати?
        
        [Готовий](#загадка)
        
        [Не готовий](#road:доріжка_від_водяника)
        
        ${
            this.gget("берегині_загадка")
            ? "[Передати слова берегинь](#ending:let_go)"
            : ""
        }
    `;

    загадка  = () => {
        let [question,] = this.getQuestion();
        this.gset("загадка", question);

        return `
            — Слухай мою ${QUESTION_NUM_NAME[this.get('номер_загадки')]} загадку, — 
            говорить водяник. "${question}"
            
            Повів джура поглядом довкола. Над головою [дерева](#дерево)
            шумлять, у [річці](#річка) [жаби](#жаба) кумкають, плескають 
            [риби](#риба), он дрібний [рак](#рак) визирнув із води. 
            [Стежина](#стежка) стелеться уздовж [берега](#берег) аж до 
            [села](#село), де-не-де у [вікнах](#вікно) 
            горить [вогонь](#вогонь). 
            
            На [тину](#тин) коло крайньої [хати](#хата)
            сохнуть [ложки](#ложка) та [глечики](#глечик), у [хліву](#хлів)
            [кінь](#кінь) дрімає, домовик розчісує його 
            [гребінцем](#гребінець), [корова](#корова) виглядає з-за
            [дверей](#двері). До [хати](#хата) похилились
            [соняшники](#соняшник), далі на [грядці](#грядка) росте 
            [горох](#горох) та [капуста](#капуста).
            
            А над головою світить [місяць](#місяць), пливуть дрібні 
            [хмаринки](#хмара).
            
            [Подумати](#road:доріжка_від_водяника)
            
            [Попросити іншу загадку](#інша_загадка)
        `
    };


    вірно = (answer) => `
        — Моя відповідь: ${answer}, — говорить джура.
        
        — Вірно!
        
        [Далі](#загадка)
    `;


    невірно = (answer) => `
        — Моя відповідь: ${answer}, — говорить джура.
        
        — Невірно!
        
        [Далі](#загадка)
    `;

}
