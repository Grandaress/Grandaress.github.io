class SearchForm {
	constructor(searchId) {
		this._searchId = searchId;
	}

	cardsFilter() {
		document.querySelector(this._searchId).oninput = function() {
	    let val = this.value.trim();
	    let cardsItem = document.querySelectorAll('.cards-flower__block');
	    console.log(cardsItem);
	    if (val != '') {
	        cardsItem.forEach(function(elem) {
	            if (elem.innerText.search(val) == -1) {
	                elem.classList.add('hide');
	            } else {
	                elem.classList.remove('hide');
	            }
	        });
		    } else {
		        cardsItem.forEach(function (elem) {
		            elem.classList.remove('hide');
		        });
		    }
		}
	}
}