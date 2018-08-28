import React from "react";
import {MDQuest} from "../framework/quest";
import {share} from "./common";


export class Ending extends MDQuest {
    startLoc = "frog";

    getLocation() {
        let locName = this.get('__location');
        switch (locName) {
            case 'puzzle':
                return this.getLocationWithShareButton(
                    'Мені вдалося відгадати всі загадки в інтерактивному оповіданні "Лиха Година"'
                );
            case 'let_go':
                return this.getLocationWithShareButton(
                    'Вищі сили допомогли мені пройти інтерактивне оповідання "Лиха Година"'
                );
            case 'ford':
                return this.getLocationWithShareButton(
                    'Мені вдалося не відгадати жодної загадки, і все одно пройти інтерактивне оповідання "Лиха Година"'
                );
            default:
                return super.getLocation();
        }

    }

    getLocationWithShareButton(text) {
        return <div>
            { super.getLocation() }
            { share(text, 'Поділитися перемогою') }
        </div>;
    }

    parsley = () => `
        Старий козак супить брови — закороткою вийшла історія.

        — Не дійшов джура до Січі, — говорить. — Залоскотала нявка
        до смерті. Дорога-дорогою, а слова народні треба пам’ятати:
        любистком та полинню здавна нечисту силу відганяли.

        Старий підводиться, у світлі багаття його зморшки здаються
        ще більш глибокими. Козак уклоняється.

        — Спасибі вам, панове, хороші ви слухачі.

        — Чекайте, — говорить один із парубків. — Хіба так все було?

        — Може й так, — промовляє старий козак, — а може й інак. А для вас —
        наука: не знаєш броду — не лізь у воду.
    `;


    niavki = () => `
        Старий козак хмуриться — не в той степ зайшла історія, а повертати
        пізно.

        — Накинулись на нього нявки, — говорить, — розірвали.
        Так і не дочекались на Січі парубка.

        Козак підводить погляд, світло багаття іскрами відблискує в його очах.

        — Однак я засидівся, — говорить він. — Байки-байками, а час вже й
        до сну йти.

        — Стійте-стійте! — говорить один з парубків. — І що,
        все так дійсно й було?

        — Може й так, а може й інак, — промовляє старий козак. —
        А вам — наука: не йди на глибоке, коли на мілкому тонеш.
    `;


    puzzle = () => `
        Старий козак усміхається — гарна вийшла історія.

        — Пустив водяник джуру, — говорить, — і вже під ранок
        парубок був на Січі.

        Козак поправляє густі білі вуса. Люлька давно згасла, вогнище
        дорогає. Слухачі притихли, переглядаються.

        — Невже все так і було? — говорить одна з дівчат.

        — Може й так, а може й інак. А для вас — наука: у труднощах
        перемагай умом, а в небезпеці — досвідом.

        КІНЕЦЬ
    `;



    let_go = () => `
        Старий козак киває сам до себе — либонь, вдалася оповідка.

        — Передав джура усе, що берегині казали, — промовляє він.
        — Водяник насупився, побурчав, та й пропустив хлопця. Вже
        під ранок був парубок на Січі. От і вся казка.

        Козак розправляє плечі, на обличчі з’являється посмішка, видно рідкі
        жовті зуби.

        — То що, — промовляє одна з дівчат, — все так насправді й було?

        — Може й так, а може й інак. А для вас — наука: не стидайсь
        не знати, стидайся не питати.

        КІНЕЦЬ
    `;


    ford = () => `
        — Стривай! — гукає водяник джурі. — А чому червона?!
        
        — Га? — каже юнак.
        
        Він обертається, нога опускається на наступний камінь.
        
        — Кажу, — говорить водяник, — жаба зелена. 
        А чому вона "хрусь — і червона"?!
        
        Юнак стрибає на протилежний берег.
        
        — Бо у млин потрапила. Бувайте здорові, дядьку!
        
        Рушив джура далі, і вже під ранок був на Січі.
        
        КІНЕЦЬ
    `;

}