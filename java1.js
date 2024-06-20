var codechef = document.getElementById("codechef");
var codeforces = document.getElementById("codeforces");
var structureend = document.getElementById("structure-end");
var closeBtn = document.getElementsByClassName("close")[0];
var iscc = false;
var iscf = false;
const i = -32.6292650731585; 
const s = 0.8315620555789333;
const output = document.getElementById("output"); 
const out = document.getElementById("out");

codechef.addEventListener("click", function() {
    iscc = true;
    iscf = false;
    structureend.style.display = "block";
    out.innerText = "Enter your Codechef rank";
});

codeforces.addEventListener("click", function() {
    iscf = true;
    iscc = false;
    structureend.style.display = "block";
    out.innerText = "Enter your Codeforces rank";
});

document.getElementById("submit").addEventListener("click", handleButtonClick);
document.getElementById("rank").addEventListener("keypress", handleEnterKeyPress);
closeBtn.addEventListener("click", handleCloseModal);

function handleButtonClick() {
    var rank = document.getElementById("rank").value;

    if (rank.trim() !== "") {
        if (iscf) {
            var ans = Math.round((rank * s) + i);
            output.innerText = "Rating :- " + ans;
            out.innerText = "Your predicted Codeforces Rating ";
        }
        if (iscc) {
            var ans = Math.round((rank - i) / s);
            output.innerText = "Rating :- " + ans;
            out.innerText = "Your predicted Codechef Rating ";
        }
    }
}

function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleButtonClick();
    }
}

function handleCloseModal() {
    structureend.style.display = "none";
    document.getElementById("rank").value = null;
    output.innerText = "";
    out.innerText = "";
    iscc = false;
    iscf = false;
}