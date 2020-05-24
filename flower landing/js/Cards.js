class Cards {
    constructor(flowerName, flowerValue, flowerSlice) {
        this.flowerName = flowerName;
        this.flowerValue = flowerValue;
        this.flowerSlice = flowerSlice;
    }

    get flowerPath() {
        const flowerImages = '{"flowers":[' +
            '{"upper":"img/Азистазия.jpg", "under":"img/pop-up-img/Азистазия.jpg"},' +
            '{"upper":"img/Анредера.jpg", "under":"img/pop-up-img/Анредера.jpg"},' +
            '{"upper":"img/Аптения-ампельная.jpg", "under":"img/pop-up-img/Аптения-ампельная.jpg"},' +
            '{"upper":"img/Барлерия-красная.jpg", "under":"img/pop-up-img/Барлерия-красная.jpg"},' +
            '{"upper":"img/Белопероне.jpg", "under":"img/pop-up-img/Белопероне.jpg"},' +
            '{"upper":"img/Бугинвиллии.jpg", "under":"img/pop-up-img/Бугинвиллии.jpg"},' +
            '{"upper":"img/Валлота.jpg", "under":"img/pop-up-img/Валлота.jpg"},' +
            '{"upper":"img/Гемантус.jpg", "under":"img/pop-up-img/Гемантус.jpg"},' +
            '{"upper":"img/Гибискус.jpg", "under":"img/pop-up-img/Гибискус.jpg"},' +
            '{"upper":"img/Гинура-синяя-птица.jpg", "under":"img/pop-up-img/Гинура-синяя-птица.jpg"},' +
            '{"upper":"img/Гиппиаструм.jpg", "under":"img/pop-up-img/Гиппиаструм.jpg"},' +
            '{"upper":"img/Глоксиния.jpg", "under":"img/pop-up-img/Глоксиния.jpg"},' +
            '{"upper":"img/Глориоза.jpg", "under":"img/pop-up-img/Глориоза.jpg"},' +
            '{"upper":"img/Дуранта.jpg", "under":"img/pop-up-img/Дуранта.jpg"},' +
            '{"upper":"img/Зефирантес.jpg", "under":"img/pop-up-img/Зефирантес.jpg"},' +
            '{"upper":"img/Калла.jpg", "under":"img/pop-up-img/Калла.jpg"},' +
            '{"upper":"img/Калландива-каланхое.jpg", "under":"img/pop-up-img/Калландива.jpg"},' +
            '{"upper":"img/Карисса-комнатная-слива.jpg", "under":"img/pop-up-img/Карисса.jpg"},' +
            '{"upper":"img/Картофельное-дерево.jpg", "under":"img/pop-up-img/Картофельное-дерево.jpg"},' +
            '{"upper":"img/Кислица.jpg", "under":"img/pop-up-img/Кислица.jpg"},' +
            '{"upper":"img/Клародендрон-инерме.jpg", "under":"img/pop-up-img/Клародендрон-инерме.jpg"},' +
            '{"upper":"img/Клеродендрум-Госпожи-Томсон.jpg", "under":"img/pop-up-img/Клеродендрум-Госпожи-Томсон.jpg"},' +
            '{"upper":"img/Клеродендрум-угандийський.jpg", "under":"img/pop-up-img/Клеродендрум-угандийський.jpg"},' +
            '{"upper":"img/Кливия.jpg", "under":"img/pop-up-img/Кливия.jpg"},' +
            '{"upper":"img/Колерия.jpg", "under":"img/pop-up-img/Колерия.jpg"},' +
            '{"upper":"img/Кринум-азиатський.jpg", "under":"img/pop-up-img/Кринум-азиатський.jpg"},' +
            '{"upper":"img/Кринум-мура.jpg", "under":"img/pop-up-img/Кринум-мура.jpg"},' +
            '{"upper":"img/Кроссандра-оранжева.jpg", "under":"img/pop-up-img/Кроссандра-оранжева.jpg"},' +
            '{"upper":"img/Лантана.jpg", "under":"img/pop-up-img/Лантана.jpg"},' +
            '{"upper":"img/Олеандр.jpg", "under":"img/pop-up-img/Олеандр.jpg"},' +
            '{"upper":"img/Пасифлора-кавалерийськая-звезда.jpg", "under":"img/pop-up-img/Пасифлора.jpg"},' +
            '{"upper":"img/Пахистахис.jpg", "under":"img/pop-up-img/Пахистахис.jpg"},' +
            '{"upper":"img/Пахистахис-красный.jpg", "under":"img/pop-up-img/Пахистахис-красный.jpg"},' +
            '{"upper":"img/Пеларгония.jpg", "under":"img/pop-up-img/Пеларгония.jpg"},' +
            '{"upper":"img/Пленткантус-мятный.jpg", "under":"img/pop-up-img/Пленткантус.jpg"},' +
            '{"upper":"img/Сансевиерия.jpg", "under":"img/pop-up-img/Сансевиерия.jpg"},' +
            '{"upper":"img/Свинчатка-крассная.jpg", "under":"img/pop-up-img/Свинчатка-крассная.jpg"},' +
            '{"upper":"img/Стефанотис.jpg", "under":"img/pop-up-img/Стефанотис.jpg"},' +
            '{"upper":"img/Тидея.jpg", "under":"img/pop-up-img/Тидея.jpg"},' +
            '{"upper":"img/Трандесканция.jpg", "under":"img/pop-up-img/Трандесканция.jpg"},' +
            '{"upper":"img/Уайтфельдия.jpg", "under":"img/pop-up-img/Уайтфельдия.jpg"},' +
            '{"upper":"img/Фиалка.jpg", "under":"img/pop-up-img/Фиалка.jpg"},' +
            '{"upper":"img/Фикус-Бенжамина.jpg", "under":"img/pop-up-img/Фикус-Бенжамина.jpg"},' +
            '{"upper":"img/Фикус-Бенжамина-зеленый.jpg", "under":"img/pop-up-img/Фикус-Бенжамина-зеленый.jpg"},' +
            '{"upper":"img/Хавортия.jpg", "under":"img/pop-up-img/Хавортия.jpg"},' +
            '{"upper":"img/Хлорофитум-Бонни.jpg", "under":"img/pop-up-img/Хлорофитум-Бонни.jpg"},' +
            '{"upper":"img/Хойя.jpg", "under":"img/pop-up-img/Хойя.jpg"},' +
            '{"upper":"img/Эписция.jpg", "under":"img/pop-up-img/Эписция.jpg"},' +
            '{"upper":"img/Якобиния-лимонная.jpg", "under":"img/pop-up-img/Якобиния-лимонная.jpg"},' +
            '{"upper":"img/Якобиния-розовая.jpg", "under":"img/pop-up-img/Якобиния-розовая.jpg"}' +
            ']}';
        return flowerImages;
    }
    appendFlowerPath() {
        const getFlowerPath = new Cards();
        let flowerImages = getFlowerPath.flowerPath;

        let img = document.getElementsByClassName("cards-flower__section__img");
        let flowerObj = JSON.parse(flowerImages);
        let flowerLength = flowerObj.flowers.length;

        for(let i = 0; i < flowerLength-1; i++) {
            $('.cards-flower__block:first-child').clone().appendTo('.section-cards');
        }

        for(let addClass = 0; addClass < flowerLength; addClass++){
            img[addClass].classList.add("img-param");
            for (let addBg = 0; addBg < flowerLength; addBg++){
                img[addBg].style.background = "#000 url(" + flowerObj.flowers[addBg].upper + ") no-repeat center";
                img[addBg].style.backgroundSize = "cover";
            }
        }

        let imgInsideFirst = document.querySelectorAll('.pop-up__img1');
        let imgInsideSecond = document.querySelectorAll('.pop-up__img2');

        for (let appendBg = 0; appendBg < flowerLength; appendBg++){
            imgInsideFirst[appendBg].style.background = "#000 url(" + flowerObj.flowers[appendBg].upper + ") no-repeat left top";
            imgInsideFirst[appendBg].style.backgroundSize = "250px 250px";
        }

        for (let appendBg = 0; appendBg < flowerLength; appendBg++){
            imgInsideSecond[appendBg].style.background = "#000 url(" + flowerObj.flowers[appendBg].under + ") no-repeat left top";
            imgInsideSecond[appendBg].style.backgroundSize = "250px 250px";
        }
    }

}


class CustomFiels extends Cards {
    customizeFlowerName() {
        let getNameCollection = document.getElementsByClassName('cards-flower__section__name');
        let getArrOfNames = this.flowerName;
        for(let i = 0; i < getNameCollection.length; i++) {
            $(getNameCollection[i]).text(getArrOfNames[i]);
        }
    }

    customizeFlowerValue() {
        let getPriceCollection = document.getElementsByClassName('custom-price');
        let getArrOfPrices = this.flowerValue;
        for(let i = 0; i < getPriceCollection.length; i++) {
            $(getPriceCollection[i]).text(getArrOfPrices[i]);
        }
    }


    customizeFlowerSlice() {
        let getSliceCollection = document.getElementsByClassName('slice-price');
        let getArrOfSlices = this.flowerSlice;
        for(let i = 0; i < getSliceCollection.length; i++) {
            $(getSliceCollection[i]).text(getArrOfSlices[i]);
        }
    }
}



function catchBtn(e) {
    let btn = document.getElementsByClassName('btnflip');
    console.log(btn.length);
    for(let i = 0; i < btn.length; i++) {
        if(btn[i] == e) {
            var ind = i;
            break;
        }
    }
    console.log("Index = ", ind);
    let curSibling = btn[ind].nextElementSibling;
    $(curSibling).addClass('pop-up__show');
}

function closeWrapper(e) {
    let closeBtn = document.getElementsByClassName('close');
    console.log(closeBtn.length);
    for(let i = 0; i < closeBtn.length; i++) {
        if(closeBtn[i] == e) {
            var ind = i;
            break;
        }
    }
    console.log("Index = ", ind);
    let getWrapElement = closeBtn[ind].parentElement.parentElement.parentElement.parentElement.parentElement;
    $(getWrapElement).removeClass('pop-up__show');
}








