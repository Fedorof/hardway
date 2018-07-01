import {MDQuest} from "../framework/quest";


export class Forest extends MDQuest {
    startLoc = 'ліс0';

    ліс0 = () => `
        ${ this.gset("статус_ліс", 1) }
        Заходить, значить, джура до лісу.

        Чутно, як лісом ходить невидима сокира, по деревам стукає та
        втомлено зітхає.

        Вітер підіймається, шумить листя, величезна тінь крокує між деревами —
        та така височенна, що дістає до верхівок дерев.
        Це лісовик звірів випасає та господарство оглядає. От дерева пішли
        нижчими, і тінь зменшилась.

        [Назад](#доріжка2)

        [Далі](#ліс1)
    `;


    ліс1 = () => `
        ${ this.gset("статус_ліс", 2) }
        ${ this.gset("статус_нявка", 3) }
        ${
            this.set(
                "чугайстер_прохання",
                `на Січ поспішаю,— говорить джура,— та от нявки не пускають.

                — Де ж ти нявок шнайшов?— промовляє Чугайстер.

                — На галявині, коло річки...

                — Ну так йди жа мною, — говорить Чугайстер. — Прийдеш на
                галявину — не буде твоїх нявок!

                Сказав — і зник, ніби й не було!
            `)
        }

        Джура шагает по лісу. Ветки над головой потрескивают, слышны шорохи, гулкие
        окрики — то ли лісное зверьё шумит, то ли аука следит с веток за парубком.

        Что-то бледное и худое пробегает мимо парня. Джура оборачивается. Огромный
        дед появляется следом — заросший, бородатый, в меховой шубе — даром,
        что лето.

        — Штой ждесь! — говорит.

        Парубок не успел и слово сказать, как дед скрылся за деревьями.

        [Далі](#чугайстер)
    `;


    чугайстер = () => `
        Стоит парубок, ждёт, что дальше-то будет.

        А дед тот из чащи выходит. Идёт, смеётся.

        — Ну, повежло тебе, — говорит, — што я тут околашивалшя. Мафка лешовая жа
        тобой кралашь.

         И улыбается беззубым ртом.

        Присмотрелся джура: не в шубе дед — нагой, все тело шерстью густой
        заросло. Да и какой это дед? Чугайстер!

        — Спасибо, дядьку, — говорит парубок, — что спасли меня.
        — Да што мне твоё шпашибо, — говорит Чугайстер. — Давай лучше попляшем!

        А сам уже в ладоши хлопает да вокруг парня пританцовывает.

        [Отказаться](#чугайстер_отказаться)

        [Танцевать](#чугайстер_танцевать)
    `;


    чугайстер_танцевать = () => `
        Стали они плясать на лісной поляне — джура шаг сделает, Чугайстер — десять,
        джура раз обернётся — Чугайстер вихрем закрутится, да все в ладоши хлопает и
        приговаривает:

        — Вот так, вот так! Мы и петь маштаки, и пляшать, и на шопилке играть!

        Быстрее, быстрее танец идёт, Чугайстер уже ветром крутится вокруг парня.
        Чувствует джура — выбился из сил, да как стоял — так на землю и рухнул.

        — Все, — говорит, — не могу. Дайте, дядьку, отдышаться!

        — Ну, шлавно потанчевали! — говорит Чугайстер. — Отблагодарить ли тебя как,
        за то, што ражвлек меня?

        [Далі](#чугайстер_танцевать0)
    `;



    чугайстер_танцевать0 = () => `
        — Я ${ this.get("чугайстер_прохання", '') }
        Поднялся джура и побрёл за Чугайстром.

        [Далі](#доріжка3)
    `;


    чугайстер_отказаться = () => `
        — Некогда мне — ${ this.get("чугайстер_прохання", '') }

        [Далі](#доріжка3)
    `;


    брод0 = () => `
        ${ this.gset("статус_брод", 1) }
        Вот и брод, о котором говорил домовой. А возле брода водяной лежит,
        сохнет. Громадный, как вол. Пузо вывалил, глаза выпучил, весь в тине
        и водорослях, рыбий хвост по земле стелется.

        — Здравствуй, хозяин вод, — говорит джура.— Позволишь ли перейти
        через брод?

        Ударил водяной по воде хвостом, аж эхо пошло.

        — Ходят тут всякие, — говорит, — только раздражают. С чего мне тебя
        пускать? Хочешь пройти — повесели меня! Отгадаешь три загадки — пущу,
        а если нет — как знаешь, так и перебирайся!

        — А что ж не отгадать? Загадывай!
    `;
}
