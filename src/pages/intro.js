import {MDQuest} from "../framework/quest";


export class Intro extends MDQuest {
    startLoc = 'вступ';


    вступ = () => `
        — А вот ещё была история, — говорит старый казак.
        
        Он подносит люльку к зубам и его обветренное лицо скрывается
        за клубами дыма. Парубки пододвигаются ближе, старик заметил, как
        загорелись их глаза.
        
        Пламя костра греет старые казацкие кости, а живой интерес
        согревает душу.
        
        
        — Так вот, — произносит казак. — Давным-давно молодой джура — а был он
         помоложе вас — возвращался на Сечь с Луга. Но, сказать надо, был это не
         простой парубок, ведь учился он на характерника.
        
        [Дальше](#вступление1)
    `;



    вступление1 = () => `
        До Сечи оставалось вёрст пять, когда застала парубка глупая ночь. Благо, на
        пути попался посёлок и джура попросился на ночлег в крайнюю хату.
        
        Вот спит он и видит сон: прилетает во двор чёрный ворон и ходит по двору.
        Каркнул раз — и прислушивается. Каркнул второй — снова молчит, чёрными
        глазками-бусинками по сторонам смотрит. Каркнул третий раз — и улетел.
        
        
        Просыпается юноша, а в ушах ещё хлопанье крыльев звучит. Понял, что его
        наставник-характерник весточку прислал дурную. Была бы добрая, белым
        голубем бы явилась весточка, а раз ворон, то собираться надо и как можно
        скорее идти на Сечь.
        
        [Дальше](#начало)
    `;



    начало = () => `
        Тихо, чтоб не разбудить хозяев, поднимется с постели. Под ногами чуть
        скрипнула половица, протяжный вой послышался со двора, за окном Мара
        позвала джуру по имени.
        
        Без единого звука парубок подбирается к двери. Снова Мара подаёт голос.
        Парень не отзывается — скоро ей надоест и она дальше пойдёт — звать,
        да подстерегать тех, кто откликнется.
        
        Парубок приоткрывает дверь, на пол ложится яркая полоска лунного света.
         В небе светит полная луна — солнце всей нечисти и мертвецов.
        
        Юноша выходит из хаты, сапоги ступают на примятый ковыль. Парень тихо
         закрывает дверь, взгляд поднимается к небу. Полная луна... Ох, не к добру!
        
        [Вперёд](#yard:двор)
    `;
}
