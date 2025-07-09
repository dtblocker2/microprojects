//some global variables
var net_lives = 10;
const lives_counter = document.getElementById("lives_counter");
var history_list =[]

//function area
async function getRandomWord() {
    try {
        const response = await fetch('https://random-word-api.vercel.app/api?words=1');
        const data = await response.json();
        const random_word = data[0];
        const length_random_word = random_word.length;

        return { random_word, length_random_word };
    } catch (error) {
        console.error("Error fetching word:", error);
        const random_word = "dtblocker";
        const length_random_word = random_word.length;
        return { random_word, length_random_word };
    }
};

function input_checker(random_word){
    var input_letter = document.getElementById("input_letter").value;
    var input_field = document.getElementById("input_field");
    var history = document.getElementById("history");
    console.log(history_list)


    if (!input_letter.trim()) {
        alert("Enter a letter");
        return;
    }

    if (history_list.includes(input_letter)){
        alert("you have already entered this value");
        return;
    }

    if (random_word.toLowerCase().includes(input_letter)){
        //console.log("ok");
        reveal_letter(input_letter,random_word)
        alert("correct");
        const underscoreCount = (document.getElementById("input_answer").innerHTML.match(/_/g) || []).length;

        if (underscoreCount === 0) {
            alert("you win");
            input_field.style.display = "none";
            reveal_full_word(random_word);
            return ;
        }
    }
    else{
        //console.log("not ok")
        alert("incorrect")
        if (lives==1){
            input_field.style.display = "none";
            lives -= 1;
            lives_counter.innerHTML = `Guesses: ${lives}`;
            reveal_full_word(random_word);
            return;
        }
        else{
            lives -= 1;
            lives_counter.innerHTML = `Guesses: ${lives}`;
        }
    };
    
    document.getElementById('input_letter').value = '';

    let li = document.createElement("li");
        li.textContent = input_letter;
        history.appendChild(li);
        history_list.push(input_letter);
};

function reveal_letter(a, random_word){
    var inputField = document.getElementById("input_answer");
    var x = inputField.innerHTML;

    var xArr = x.split('');

    for (let i=0; i < random_word.length; i++){
        if (random_word[i]===a){
            xArr[i] = a;
        }
    }

    inputField.innerHTML = xArr.join('')
}

function reveal_full_word(random_word){
    var input_field = document.getElementById("input_answer");
    input_field.innerHTML = random_word;
    document.getElementById("reset").style.display = "block";
}

document.getElementById("reset").onclick = () => {
    net_lives = 10;
    history_list =[]
    main(); // re-run the game and reset history, lives, etc.
};

//took this out of main function cause it was sending multiple iterations of enter key
document.getElementById("input_letter").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission if inside a form
        document.getElementById("submit_btn").click(); // or call input_checker(random_word)
    }
});

async function main() {
    document.getElementById("history").innerHTML = '';

    lives = net_lives;
    const { random_word, length_random_word } = await getRandomWord();
    document.getElementById("input_answer").innerHTML = ``;
    document.getElementById("reset").style.display = "none";
    document.getElementById("input_field").style.display = "block";
    lives_counter.innerHTML = `Guesses: ${lives}`

    for (let i = 1; i <= length_random_word; i++) {
        document.getElementById("input_answer").innerHTML += `_`
    };

    document.getElementById('submit_btn').onclick = () => input_checker(random_word);
    console.log(random_word);
};

//main function executed
main();