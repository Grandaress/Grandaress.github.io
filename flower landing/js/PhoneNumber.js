class PhoneNumber {
	constructor(kievNum, lifeNum) {
		this._kievNum = kievNum;
		this._lifeNum = lifeNum;
	}

	showPhoneNumber() {
		let kievNumber = document.querySelector('.num-kiev');
		let lifeNumber = document.querySelector('.num-life');
		let getKievNum = this._kievNum;
		let getLifeNum = this._lifeNum;
		kievNumber.addEventListener('click', () => kievNumber.innerHTML = getKievNum);
		lifeNumber.addEventListener('click', () => lifeNumber.innerHTML = getLifeNum);
	}
}

