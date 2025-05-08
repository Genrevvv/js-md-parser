function parse(input) {
    const patterns = [
        { regex: /^# (.+)$/gm, replace: '<h1>$1</h1>' },
        { regex: /^## (.+)$/gm, replace: '<h2>$1</h2>' },
        { regex: /^### (.+)$/gm, replace: '<h3>$1</h3>' },
        { regex: /^#### (.+)$/gm, replace: '<h4>$1</h4>' },
        { regex: /^##### (.+)$/gm, replace: '<h5>$1</h5>' },
        { regex: /^###### (.+)$/gm, replace: '<h6>$1</h6>' },
        { regex: /\*\*(.+)\*\*/gm, replace: '<b>$1</b>' },
        { regex: /__(.+)__/gm, replace: '<b>$1</b>' },
        { regex: /\*(.+)\*/gm, replace: '<i>$1</i>' },
        { regex: /  _(.+)_/gm, replace: '<i>$1</i>' },
        { regex: /^> (.+)$/gm, replace: '<span class="quote">$1</span>' },
        { regex: /^`([^`]+)`$/gm, replace: '<span class="inline-code">$1</span>' },
        { regex: /^```([\s\S]+)```$/gm, replace: '<pre class="code-block">$1</pre>' },
    ];

    for (const { regex , replace } of patterns) {
        input = input.replace(regex, replace);
    }

    return input;
}

export { parse };
