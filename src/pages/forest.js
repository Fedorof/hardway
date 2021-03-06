import {MDQuest} from "../framework/quest";


export class Forest extends MDQuest {
    startLoc = 'ліс0';

    ліс0 = () => `
        ${ this.gset("статус_ліс", 1) }
        Заходить джура до лісу.

        Чутно, як лісом ходить невидима сокира, по деревам стукає та
        втомлено зітхає.

        Вітер підіймається, шумить листя, величезна тінь крокує між деревами —
        та така височенна, що дістає до верхівок дерев.
        Це лісовик звірів випасає та господарство оглядає. Дерева пішли
        нижчими, і тінь зменшилась.

        [Назад](#road:доріжка2)

        [Далі](#ліс1)
    `;


    ліс1 = () => `
        ${ this.gset("статус_ліс", 2) }
        ${ this.gset("статус_нявка", 3) }

        ${ this.switch(['блуд0', 'блуд1', 'блуд2', 'блуд3', 'блуд_кінець']) }
    `;


    блуд0 = () => `
        Джура крокує лісом. Над головою гілки потріскують, між листям шурхотить,
        щось гулко кричить — чи то лісові звірі бавляться,
        чи то якась агука слідкує з гілок за парубком.
        
        Дивиться джура — пропала доріжка. Щойно була, вилась під ногами, і от
        нема. Озирнурнувся, покрутився — вже не видно, куди йшов і звідки
        прийшов.

        ${ this['блуд_кнопки']() }
     `;


    блуд1 = () => `
        Вийшов на галявину. Посеред галявини дуб стоїть, здоровезні
        корінняки із землі стирчать, гілки небо підпирають. 
        Навкруг безліч дубків і дубочків росте, а далі такі непролазні хащі, 
        що не пройти, не пролізти.

        ${ this['блуд_кнопки']() }
     `;


    блуд2 = () => `
        Йде джура лісом, пробирається. Хаші такі густі, що навіть тісно, 
        йти так важко, ніби по п’ять пудів на плечі поклали, 
        аж у очах потемніло.

        ${ this['блуд_кнопки']() }
     `;


    блуд3 = () => `
        Ще крок робить джура, ноги спотикаються об коріння, 
        гілки б’ють по обличчю. Хащам не видно кінця й краю, 
        листва така густа, що ні місяця, ні неба не видно.

        ${ this['блуд_кнопки']() }
     `;


    блуд_кнопки = () => `
        [Йти вперед](#ліс1)
        
        [Повернути назад](#ліс1)
        
        [Повернути вліво](#ліс1)
        
        [Повернути вправо](#ліс1)
     `;


    блуд_кінець = () => `
        Щось бліде та худе вистрибує поперед хлопця, та мчить геть. 
        За спиною тріщить гілля, джура обертається. Величезний
        дідуган з’являється із хащі — бородатий, увесь заріс, у міховій шубі —
        дама, що літо.

        — Тут штій! — говорить.

        Парубок не встиг і слово сказати, як дідуган зник за деревами.
        Розправляє джура плечі, і так легко йому, ніби щойно на плечах хтось
        сидів, а тепер зіскочив. В очах ясно, ніби щось їх закривало, а
        тепер зникло.
        
        Збагнув джура, що не "хтось" і не "щось" — блуд сидів на
        плечах та дорогу затуляв. А дідуган, либонь, налякав блуда.

        [Далі](#чугайстер)
     `;


    чугайстер = () => `
        Стоїть парубок, чекає, що-то далі буде.

        А дідуган той із хащі виходить. Іде, регоче.

        — Ну, пощаштило тобі, — каже, — що я тут вештавшя. 
        Якби не я — жгинув би ти в ліші.

        І всміхається беззубим ротом.

        [Далі](#чугайстер1)
     `;


    чугайстер1 = () => `
        Придивився джура: не в шубі дідуган — голий, все тіло шерстю густою
        заросло. Та який же це дід? Чугайстер!

        — Спасибі, дядьку, — говорить парубок, — що врятували мене.

        — Та що мені твоє шпашибі, — говорить Чугайстер. —
        Нумо краще жатаншюймо!

        А сам у долоні плескає, та круг хлопця пританцьовує.

        [Відмовитись](#чугайстер_відмовитись)

        [Танцювати](#чугайстер_танцювати)
    `;


    чугайстер_танцювати = () => `
        ${ this.gset('чугайстер_танцював', 1) }
        Затіяли вони танок на лісовій галявині. Джура хоч парубок
        міцний — ніших на Січ не брали — за Чугайстром ледь поспіває.
        Джура крок ступає, Чугайстер — десять, джура раз повернеться —
        Чугайстер вихором закрутиться, та все в долоні плескає та примовляє:

        — Ошь так, ошь так! Ми й шпівати, й таншювати, й на шопілші можем грати!

        [Далі](#чугайстер_танцювати1)
    `;


    чугайстер_танцювати1 = () => `

        Швидше та швидше танок іде, Чугайстер вже вітром крутиться навкруг
        хлопця. Відчуває вже парубок, що сили полишають. Аж раз —
        зупинився Чугайстер. Джура як стояв — так і гепнувся на землю.

        — Ну, шлавно потанчювали! — говорить Чугайстер. —
        Як віттячити тобі, що рожважив мене?

        А джура слова ковтає, віддихатись не може.

        — Ще хвильку — каже. — Дайте лиш, дядьку, дух перевести.

        [Далі](#чугайстер_танцювати2)
    `;



    чугайстер_танцювати2 = () => `
        Підвівся джура, та одразу й сів. Сидить, відпочиває.
        
        — Мені, — говорить, — на Січ треба. Та от нявки не пускають.
    
        ${ this["чугайстер_прохання"]() } Джура підводиться, ноги тремтять, 
        як свинцем налиті. Парубок ступає вслід Чугайстру.

        [Далі](#вийти)
    `;


    чугайстер_відмовитись = () => `
       — Ніколи, дядьку — на Січ поспішаю, — говорить джура, — 
       та от нявки не пускають.
       
       ${ this["чугайстер_прохання"]() }

        [Далі](#вийти)
    `;


    чугайстер_прохання = () => `
        — Те ж ти нявок жнайшов? — промовляє Чугайстер.

        — На галявині, коло річки...

        — Ну так йти жа мною, — говорить Чугайстер. — Прийтеш на
        галявину — не буте твоїх нявок!

        Сказав — і зник у хащах.
    `;


    вийти = () => `
        Джура виходить з лісу. Місяць піднявся під саме небо, трава біла,
        ніби молоком залили, уздовж річки туман стелиться. Небо чисте, темне,
        яскраві зірки-намистини сяють та підморгують одна одній.
        
        Стає темно, ніби місяць із зірками накрило величезною тінню. Спиною
        пробігає холодок. Джура озирається.
        
        Схоже, опир кинув погляд на хлопця. Знати б, що надумав: чи
        на той світ заводить, чи на цей — виводить. 

        [Далі](#road:доріжка3)
    `;
}
