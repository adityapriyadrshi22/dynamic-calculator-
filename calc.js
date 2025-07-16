
function dis(n) {
    console.log(`Button ${n} pressed`);
    document.getElementById("expression").value += n;
}


function clr() {
    document.getElementById("expression").value = "";
    document.getElementById("result").value = "";
}


function solve() {
    try {
        const expr = document.getElementById("expression").value;
        const output = eval(expr); 

        
        document.getElementById("result").value = `= ${output}`;
        console.log(`${expr} = ${output}`);
    } catch (err) {
        document.getElementById("result").value = "Error";
    }
}


