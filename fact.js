let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let yearInput = document.querySelector('#inputYear');
yearInput.addEventListener('input', getFactAjax);

function getFactAjax() {
    let number = yearInput.value;

    let xhr = new XMLHttpRequest();
    xhr.open('Get', 'http://numbersapi.com/' + number, true)

    xhr.onload = function () {
        if (this.status == 200 && number != '') {
            fact.style.display = 'block';
            factText.innerHTML = this.responseText;
        }
    }

    xhr.send()
}