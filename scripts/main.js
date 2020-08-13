window.onload =()=> {

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    } 
    else console.log("Service worker not found.");

    // Dice rolling 
    const roll = document.getElementById("roll").addEventListener("click", dice);
    // const totalRolls = document.getElementById("rolls");
    const output = document.getElementById("output");
    const allRolls = document.getElementById("total");
    const clear = document.getElementById("clear").addEventListener("click", reset);

    var rolls = [];

    function dice(e) {
        const rand1 = Math.floor(Math.random() * 6) + 1;
        output.innerHTML = rand1;
        rolls.push(rand1);
        // totalRolls.innerHTML = rolls.length;
        allRolls.innerHTML = rolls.join(", ");
    }

    function reset() {
        output.innerHTML = "";
        rolls = [];
        allRolls.innerHTML = "";
        // totalRolls.innerHTML = "";
    }
}



