import { parse } from './parse-md.js';

let input = '> hello';

const mdOutput = document.getElementById('md-output');
const inputArea = document.getElementById('input-area');

inputArea.addEventListener('input', (e) => {
    input = inputArea.value;

    // localStorage.setItem(input, input);

    mdOutput.innerHTML = parse(input);
});
