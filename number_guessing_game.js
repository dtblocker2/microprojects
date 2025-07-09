async function main(){
    //generate rand number
    const random_number = Math.ceil(Math.random()*10);
    //console.log(random_number)

    while (true){
        const answer = window.prompt('what is the number');
        if (answer == random_number){
            alert('correct: '+String(random_number));
            break;
        };
    }
}

//cal main function
main()