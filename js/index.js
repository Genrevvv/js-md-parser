import { parse } from './parse-md.js';

let input = '> hello';

const mdOutput = document.getElementById('md-output');
const inputArea = document.getElementById('input-area');

document.addEventListener('DOMContentLoaded', () => {
    input = localStorage.getItem('input');

    inputArea.value = input;
    mdOutput.innerHTML = parse(input);
});

inputArea.addEventListener('input', (e) => {
    input = inputArea.value;

    localStorage.setItem('input', input);

    mdOutput.innerHTML = parse(input);
});
