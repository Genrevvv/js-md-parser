function parse(input) {
    const tokens = {
        '^# (.+)': 'h1',
        '^## (.+)': 'h2',
        '^### (.+)': 'h3',
        '^#### (.+)': 'h4',
        '^##### (.+)': 'h5',
        '^###### (.+)': 'h6',
        '^> (.+)': ['span', 'quote'],
        '` (.+)`': ['span', 'inline-code']
    };

    let e = '';
    let text = '';
    let output = '';

    let pattern = '';
    let match = null;

    for (let t in tokens) {
        pattern = new RegExp(t);
        match = input.match(pattern);
        
        if (input.match(pattern)) {
            // console.log(input);
            // console.log(t);
            // console.log(t + ': ' + tokens[t]);
    
            e = tokens[t];
            text = match[1].trim();
    
            if (Array.isArray(e)) {
                output = `<${e[0]} class="${e[1]}">${text}</${e[0]}>`;
            }
            else {
                output = `<${e}>${text}</${e}>`;
            }
            console.log(output);
            return output;
        }
    
    }

    return input;
}

export { parse };
