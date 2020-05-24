class Slider {
    constructor(slide) {
        this._slide = slide;
    }

    slideImages() {
        let getCurrentImg = document.querySelector('.slide-img');
      
        let imgSource = this._slide;
        function myTimer(imgSource) {
            for(let link = 0; link < imgSource.length; link++) {
                setTimeout( function timer(){
                    getCurrentImg.src = imgSource[link];
                    if (link == imgSource.length - 1) {
                        myTimer(imgSource);
                    }
                }, link * 4000 );
            }   
        }      
        myTimer(imgSource);
    }
}





