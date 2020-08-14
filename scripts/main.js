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
    const diceImgs = ["./images/dice/dice1.png",
                      "./images/dice/dice2.png",
                      "./images/dice/dice3.png",
                      "./images/dice/dice4.png",
                      "./images/dice/dice5.png",
                      "./images/dice/dice6.png",
                    ];
    var rolls = [];

    function dice(e) {
        const rand1 = Math.floor(Math.random() * 6) + 1;
        const dice = rand1-1;
        const altDice = "Dice " + rand1;
        output.setAttribute("src", diceImgs[dice]);
        output.setAttribute("alt", altDice);
        rolls.push(rand1);
        // totalRolls.innerHTML = rolls.length;
        allRolls.innerHTML = rolls.join(", ");
    }

    function reset() {
        output.setAttribute("src", "");
        output.setAttribute("alt", "");
        // rolls = [];
        allRolls.innerHTML = "";
        // totalRolls.innerHTML = "";
    }
}



