$(function() {

    let photoArray = [
        "'img/Азистазия(голая).jpg'",
        "'img/Анредера.jpg'",
        "'img/Аптения(апельная).jpg'",
        "'img/Барлерия(красная).jpg'",
        "'img/Бегония(вечноцветущая).jpg'",
        "'img/Белопероне.jpg'",
        "'img/Бугинвиллии.jpg'",
        "'img/Валлота.jpg'",
        "'img/Гемантус.jpg'",
        "'img/Гемантус2.jpg'",
        "'img/Гибискус.jpg'",
        "'img/Гинура(синяя птица).jpg'",
        "'img/Гиппиаструм.jpg'",
        "'img/Гиппиаструм2.jpg'",
        "'img/Гиппиаструм3.jpg'",
        "'img/Гиппиаструм4.jpg'",
        "'img/Гиппиаструм5.jpg'",
        "'img/Глоксиния(махровая).jpg'",
        "'img/Глоксиния.jpg'",
        "'img/Глоксиния2.jpg'",
        "'img/Глориоза.jpg'",
        "'img/Глориоза2.jpg'",
        "'img/Дуранта.jpg'",
        "'img/Зефирантес.jpg'",
        "'img/Изерине.jpg'",
        "'img/Калла.jpg'",
        "'img/Калландива(каланхое).jpg'",
        "'img/Карисса(комнатная слива).jpg'",
        "'img/Картофельное-дерево.jpg'",
        "'img/Кислица.jpg'",
        "'img/Клародендрон(инерме).jpg'",
        "'img/Клеродендрум(угандийський).jpg'",
        "'img/Клеродендрум`Госпожи Томсон`.jpg'",
        "'img/Клеродендрум`инерме`.jpg'",
        "'img/Кливия.jpg'",
        "'img/Колерия.jpg'",
        "'img/Кринум азиатський.jpg'",
        "'img/Кринум-Мура.jpg'",
        "'img/Кроссандра(оранжева).jpg'",
        "'img/Лантана.jpg'",
        "'img/Олеандр.jpg'",
        "'img/Пасифлора(кавалерийськая звезда).jpg'",
        "'img/Пахистахис красный.jpg'",
        "'img/Пахистахис.jpg'",
        "'img/Пеларгония.jpg'",
        "'img/Пленткантус(мятный).jpg'",
        "'img/Руэллия.jpg'",
        "'img/Сансевиерия.jpg'",
        "'img/Свинчатка белая.jpg'",
        "'img/Свинчатка голубая.jpg'",
        "'img/Свинчатка крассная.jpg'",
        "'img/Стефанотис.jpg'",
        "'img/Стробилантас.jpg'",
        "'img/Тидея.jpg'",
        "'img/Трандесканция.jpg'",
        "'img/Уайтфельдия.jpg'",
        "'img/Уайтфельдия2.jpg'",
        "'img/Фиалка.jpg'",
        "'img/Фикус(Бенжамина(зеленый)).jpg'",
        "'img/Фикус(Бенжамина).jpg'",
        "'img/Хавортия.jpg'",
        "'img/Хлорофитум(Бонни).jpg'",
        "'img/Хойя.jpg'",
        "'img/Эписция.jpg'",
        "'img/Якобиния лимонная.jpg'",
        "'img/Якобиния(розовая).jpg'",
    ];

    let photoArraySecond = [
        "'img/pop-up-img/Азистезия.jpg'",
        "'img/pop-up-img/Анредера.jpg'",
        "'img/pop-up-img/Аптения(ампельная).jpg'",
        "'img/pop-up-img/Барлерия(красная).jpg'",
        "'img/pop-up-img/Бегония(вечноцветущая).jpg'",
        "'img/pop-up-img/Белопероне.jpg'",
        "'img/pop-up-img/Бугенвиллии.jpg'",
        "'img/pop-up-img/Валлота.jpg'",
        "'img/pop-up-img/Гемантус.jpg'",
        "'img/pop-up-img/Гемантус2.jpg'",
        "'img/pop-up-img/Гибискус.jpg'",
        "'img/pop-up-img/Гинура(синяя птица).jpg'",
        "'img/pop-up-img/Гиппиаструм.jpg'",
        "'img/pop-up-img/Гиппиаструм2.jpg'",
        "'img/pop-up-img/Гиппиаструм3.jpg'",
        "'img/pop-up-img/Гиппиаструм4.jpg'",
        "'img/pop-up-img/Гиппиаструм5.jpg'",
        "'img/pop-up-img/Глоксиния(махровая).jpg'",
        "'img/pop-up-img/Глоксиния.jpg'",
        "'img/pop-up-img/Глоксиния2.jpg'",
        "'img/pop-up-img/Глориоза.jpg'",
        "'img/pop-up-img/Глориоза2.jpg'",
        "'img/pop-up-img/Дуранта.jpg'",
        "'img/pop-up-img/Зефирантес.jpg'",
        "'img/pop-up-img/Изерине.jpg'",
        "'img/pop-up-img/Калла.jpg'",
        "'img/pop-up-img/Калландива.jpg'",
        "'img/pop-up-img/Карисса.jpg'",
        "'img/pop-up-img/Картофельное-дерево.jpg'",
        "'img/pop-up-img/Кислица.jpg'",
        "'img/pop-up-img/Клародендрон(инерме).jpg'",
        "'img/pop-up-img/Клеродендрум(угандийський).jpg'",
        "'img/pop-up-img/Клеродендрум`Госпожи Томсон`.jpg'",
        "'img/pop-up-img/Клеродендрум`инерме`.jpg'",
        "'img/pop-up-img/Кливия.jpg'",
        "'img/pop-up-img/Колерия.jpg'",
        "'img/pop-up-img/Кринум-азиатський.jpg'",
        "'img/pop-up-img/Кринум-Мура.jpg'",
        "'img/pop-up-img/Кроссандра(оранжева).jpg'",
        "'img/pop-up-img/Лантана.jpg'",
        "'img/pop-up-img/Олеандр.jpg'",
        "'img/pop-up-img/Пасифлора.jpg'",
        "'img/pop-up-img/Пахистахис красный.jpg'",
        "'img/pop-up-img/Пахистахис.jpg'",
        "'img/pop-up-img/Пеларгония.jpg'",
        "'img/pop-up-img/Пленткантус.jpg'",
        "'img/pop-up-img/Руэллия.jpg'",
        "'img/pop-up-img/Сансевиерия.jpg'",
        "'img/pop-up-img/Свинчатка-белая.jpg'",
        "'img/pop-up-img/Свинчатка-голубая.jpg'",
        "'img/pop-up-img/Свинчатка-крассная.jpg'",
        "'img/pop-up-img/Стефанотис.jpg'",
        "'img/pop-up-img/Стробилантас.jpg'",
        "'img/pop-up-img/Тидея.jpg'",
        "'img/pop-up-img/Трандесканция(зебрина).jpg'",
        "'img/pop-up-img/Уайтфельдия.jpg'",
        "'img/pop-up-img/Уайтфельдия2.jpg'",
        "'img/pop-up-img/Фиалка.jpg'",
        "'img/pop-up-img/Фикус(Бенжамина(зеленый)).jpg'",
        "'img/pop-up-img/Фикус(Бенжамина).jpg'",
        "'img/pop-up-img/Хавортия.jpg'",
        "'img/pop-up-img/Хлорофитум(Бонни).jpg'",
        "'img/pop-up-img/Хойя.jpg'",
        "'img/pop-up-img/Эписция.jpg'",
        "'img/pop-up-img/Якобиния лимонная.jpg'",
        "'img/pop-up-img/Якобиния(розовая).jpg'",
    ];

    $('.btnflip').clone().appendTo('.cards-flower__block:not(:first)');
    $('.pop-up').clone().appendTo('.cards-flower__block:not(:first)');

    let img = document.getElementsByClassName("cards-flower__section__img");

    for(let addClass = 0; addClass < photoArray.length; addClass++){
        img[addClass].classList.add("img-param");
        for (let addBg = 0; addBg < photoArray.length; addBg++){
            img[addBg].style.background = "#000 url(" + photoArray[addBg] + ") no-repeat center";
            img[addBg].style.backgroundSize = "cover";
        }
    }

   let imgInsideFirst = $('.pop-up__img1');
   let imgInsideSecond = $('.pop-up__img2');
   imgInsideFirst.addClass("pop-up__img__param");
   imgInsideSecond.addClass("pop-up__img__param");

    for (let appendBg = 0; appendBg < photoArray.length; appendBg++){
        imgInsideFirst[appendBg].style.background = "#000 url(" + photoArray[appendBg] + ") no-repeat left top";
        imgInsideFirst[appendBg].style.backgroundSize = "250px 250px";
    }

    for (let appendBg = 0; appendBg < photoArraySecond.length; appendBg++){
        imgInsideSecond[appendBg].style.background = "#000 url(" + photoArraySecond[appendBg] + ") no-repeat left top";
        imgInsideSecond[appendBg].style.backgroundSize = "250px 250px";
    }

    $('.btnflip').click(function(e){
        e.preventDefault();
        $('body').addClass("cards-background");
        $('.pop-up-wrapper').addClass('pop-up__show');
    });

    $('.close').click(function(){
        $('.pop-up').removeClass('pop-up__show');
        $('body').removeClass('cards-background');
        $('.pop-up-wrapper').removeClass('pop-up__show');
    });

    $('.btnflip:eq(0)').click(function(){
        $('.pop-up:eq(0)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 15 грн"
        );
    });

    $('.btnflip:eq(1)').click(function(){
        $('.pop-up:eq(1)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Цена за взрослый цветок - 50 грн<br/>Цена за срез - 15 грн"
        );
    });

    $('.btnflip:eq(2)').click(function(){
        $('.pop-up:eq(2)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 10 грн"
        );
    });

    $('.btnflip:eq(3)').click(function(){
        $('.pop-up:eq(3)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 20 грн"
        );
    });

    $('.btnflip:eq(4)').click(function(){
        $('.pop-up:eq(4)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 20 грн"
        );
    });

    $('.btnflip:eq(5)').click(function(){
        $('.pop-up:eq(5)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(6)').click(function(){
        $('.pop-up:eq(6)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 25 грн"
        );
    });

    $('.btnflip:eq(7)').click(function(){
        $('.pop-up:eq(7)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 30 грн"
        );
    });

    $('.btnflip:eq(8)').click(function(){
        $('.pop-up:eq(8)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 30 грн"
        );
    });

    $('.btnflip:eq(9)').click(function(){
        $('.pop-up:eq(9)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 30 грн"
        );
    });

    $('.btnflip:eq(10)').click(function(){
        $('.pop-up:eq(10)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(11)').click(function(){
        $('.pop-up:eq(11)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(12)').click(function(){
        $('.pop-up:eq(12)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(13)').click(function(){
        $('.pop-up:eq(13)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(14)').click(function(){
        $('.pop-up:eq(14)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(15)').click(function(){
        $('.pop-up:eq(15)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(16)').click(function(){
        $('.pop-up:eq(16)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(17)').click(function(){
        $('.pop-up:eq(17)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 80 грн"
        );
    });

    $('.btnflip:eq(18)').click(function(){
        $('.pop-up:eq(18)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 60 грн"
        );
    });

    $('.btnflip:eq(19)').click(function(){
        $('.pop-up:eq(19)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 60 грн"
        );
    });

    $('.btnflip:eq(20)').click(function(){
        $('.pop-up:eq(20)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 150 грн"
        );
    });

    $('.btnflip:eq(21)').click(function(){
        $('.pop-up:eq(21)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 150 грн"
        );
    });

    $('.btnflip:eq(22)').click(function(){
        $('.pop-up:eq(22)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "ЦВзрослых цветов нету в наличии<br/>Цена за срез - 45 грн"
        );
    });

    $('.btnflip:eq(23)').click(function(){
        $('.pop-up:eq(23)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 10 грн"
        );
    });

    $('.btnflip:eq(24)').click(function(){
        $('.pop-up:eq(24)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - от 25 грн"
        );
    });

    $('.btnflip:eq(25)').click(function(){
        $('.pop-up:eq(25)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(26)').click(function(){
        $('.pop-up:eq(26)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 20 грн"
        );
    });

    $('.btnflip:eq(27)').click(function(){
        $('.pop-up:eq(27)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 50 грн"
        );
    });

    $('.btnflip:eq(28)').click(function(){
        $('.pop-up:eq(28)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 55 грн"
        );
    });

    $('.btnflip:eq(29)').click(function(){
        $('.pop-up:eq(29)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за ризому - 25 грн"
        );
    });

    $('.btnflip:eq(30)').click(function(){
        $('.pop-up:eq(30)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 55 грн"
        );
    });

    $('.btnflip:eq(31)').click(function(){
        $('.pop-up:eq(31)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 80 грн"
        );
    });

    $('.btnflip:eq(32)').click(function(){
        $('.pop-up:eq(32)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 80 грн"
        );
    });

    $('.btnflip:eq(33)').click(function(){
        $('.pop-up:eq(33)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 55 грн"
        );
    });

    $('.btnflip:eq(34)').click(function(){
        $('.pop-up:eq(34)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 200 грн"
        );
    });

    $('.btnflip:eq(35)').click(function(){
        $('.pop-up:eq(35)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 30 грн"
        );
    });

    $('.btnflip:eq(36)').click(function(){
        $('.pop-up:eq(36)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 120 грн"
        );
    });

    $('.btnflip:eq(37)').click(function(){
        $('.pop-up:eq(37)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 150 грн"
        );
    });

    $('.btnflip:eq(38)').click(function(){
        $('.pop-up:eq(38)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 50 грн"
        );
    });

    $('.btnflip:eq(39)').click(function(){
        $('.pop-up:eq(39)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 50 грн"
        );
    });

    $('.btnflip:eq(40)').click(function(){
        $('.pop-up:eq(40)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(41)').click(function(){
        $('.pop-up:eq(41)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 60 грн"
        );
    });

    $('.btnflip:eq(42)').click(function(){
        $('.pop-up:eq(42)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 50 грн"
        );
    });

    $('.btnflip:eq(43)').click(function(){
        $('.pop-up:eq(43)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 50 грн"
        );
    });

    $('.btnflip:eq(44)').click(function(){
        $('.pop-up:eq(44)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 55 грн"
        );
    });

    $('.btnflip:eq(45)').click(function(){
        $('.pop-up:eq(45)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Цена за взрослый цветок - 25 грн"
        );
    });

    $('.btnflip:eq(46)').click(function(){
        $('.pop-up:eq(46)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 25 грн"
        );
    });

    $('.btnflip:eq(47)').click(function(){
        $('.pop-up:eq(47)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 100 грн"
        );
    });

    $('.btnflip:eq(48)').click(function(){
        $('.pop-up:eq(48)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 30 грн"
        );
    });

    $('.btnflip:eq(49)').click(function(){
        $('.pop-up:eq(49)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 30 грн"
        );
    });

    $('.btnflip:eq(50)').click(function(){
        $('.pop-up:eq(50)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 30 грн"
        );
    });

    $('.btnflip:eq(51)').click(function(){
        $('.pop-up:eq(51)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за отросток - 30 грн"
        );
    });

    $('.btnflip:eq(52)').click(function(){
        $('.pop-up:eq(52)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии - 50 грн<br/>Цена за срез - 60 грн"
        );
    });

    $('.btnflip:eq(53)').click(function(){
        $('.pop-up:eq(53)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии - 40 грн<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(54)').click(function(){
        $('.pop-up:eq(54)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии - 50 грн<br/>Цена за срез - 10 грн"
        );
    });

    $('.btnflip:eq(55)').click(function(){
        $('.pop-up:eq(55)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 80 грн"
        );
    });

    $('.btnflip:eq(56)').click(function(){
        $('.pop-up:eq(56)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 80 грн"
        );
    });

    $('.btnflip:eq(57)').click(function(){
        $('.pop-up:eq(57)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 5 грн"
        );
    });

    $('.btnflip:eq(58)').click(function(){
        $('.pop-up:eq(58)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(59)').click(function(){
        $('.pop-up:eq(59)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/> большая 40 грн"
        );
    });

    $('.btnflip:eq(60)').click(function(){
        $('.pop-up:eq(60)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 60 грн"
        );
    });

    $('.btnflip:eq(61)').click(function(){
        $('.pop-up:eq(61)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 15 грн"
        );
    });

    $('.btnflip:eq(62)').click(function(){
        $('.pop-up:eq(62)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 40 грн"
        );
    });

    $('.btnflip:eq(63)').click(function(){
        $('.pop-up:eq(63)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 35 грн"
        );
    });

    $('.btnflip:eq(64)').click(function(){
        $('.pop-up:eq(64)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 60 грн"
        );
    });

    $('.btnflip:eq(65)').click(function(){
        $('.pop-up:eq(65)').toggleClass('pop-up__show');
        $('.pop-up__info__par').html(
            "Взрослых цветов нету в наличии<br/>Цена за срез - 45 грн"
        );
    });


});









