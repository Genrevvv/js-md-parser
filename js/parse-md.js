function parse(input) {
    const patterns = [
        { regex: /(.*)^# (.+)(.*)/, replace: '$1<h1>$2</h1>$3' },
        { regex: /(.*)^## (.+)(.*)/, replace: '$1<h2>$2</h2>$3' },
        { regex: /(.*)^### (.+)(.*)/, replace: '$1<h3>$2</h3>$3' },
        { regex: /(.*)^#### (.+)(.*)/, replace: '$1<h4>$2</h4>$3' },
        { regex: /(.*)^##### (.+)(.*)/, replace: '$1<h5>$2</h5>$3' },
        { regex: /(.*)^###### (.+)(.*)/, replace: '$1<h6>$2</h6>$3' },
        { regex: /(.*)^> (.+)(.*)/, replace: '$1<span class="quote">$2</span>$3' },
        { regex: /(.*)^`(.+)`(.*)/, replace: '$1<span class="inline-code">$2</span>$3' },
    ];

    for (const { regex , replace } of patterns) {
        input = input.replace(regex, replace);
    }

    return input;
}

export { parse };
