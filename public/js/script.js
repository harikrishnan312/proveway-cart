
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');

const dropDowns = document.getElementById('selects');
const dropDowns2 = document.getElementById('selects2');
const dropDowns3 = document.getElementById('selects3');


const card = document.getElementById('card')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')

const dkk = document.getElementById('dkk')

radio1.addEventListener('click', () => {
    if (radio1.checked) {
        dkk.textContent='DKK 195.00'
        radio2.checked = false;
        radio3.checked = false;

        card.style.border='2px solid green'

        dropDowns2.style.display = 'none';
        card2.style.backgroundColor = '#ffffff'
        dropDowns3.style.display = 'none';
        card3.style.backgroundColor = '#ffffff'
        dropDowns.style.display = 'flex';

        dropDowns.style.gap = '2em';
        dropDowns.style.paddingLeft = '5em';
        card.style.backgroundColor = '#f5fff5'
    } else {
        dropDowns.style.display = 'none';
        card.style.backgroundColor = '#ffffff'
        dkk.textContent = 'DKK 00.000'
        card.style.border = '1px solid #ccc'
    }
});
radio2.addEventListener('click', () => {
    if (radio2.checked) {
        dkk.textContent = 'DKK 345.00'

        radio1.checked = false;
        radio3.checked = false;

        card2.style.border = '2px solid green'

        dropDowns.style.display = 'none';
        card.style.backgroundColor = '#ffffff'
        dropDowns3.style.display = 'none';
        card3.style.backgroundColor = '#ffffff'

        dropDowns2.style.display = 'block';
        dropDowns2.style.gap = '2em';
        dropDowns2.style.paddingLeft = '5em';
        card2.style.backgroundColor = '#f5fff5'
    } else {
        dropDowns2.style.display = 'none';
        card2.style.backgroundColor = '#ffffff'
        dkk.textContent = 'DKK 00.000'
        card2.style.border = '1px solid #ccc'

    }
}); radio3.addEventListener('click', () => {
    if (radio3.checked) {
        dkk.textContent = 'DKK 528.00'

        radio1.checked = false;
        radio2.checked = false;

        card3.style.border = '2px solid green'

        dropDowns.style.display = 'none';
        card.style.backgroundColor = '#ffffff'
        dropDowns2.style.display = 'none';
        card2.style.backgroundColor = '#ffffff'

        dropDowns3.style.display = 'block';
        // dropDowns3.style.gap = '2em';
        dropDowns3.style.paddingLeft = '5em';
        card3.style.backgroundColor = '#f5fff5'
    } else {
        dropDowns3.style.display = 'none';
        card3.style.backgroundColor = '#ffffff'
        dkk.textContent = 'DKK 00.000'
        card3.style.border = '1px solid #ccc'
    }
});


dropDowns.style.display = 'none';
