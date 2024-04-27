let counter = 0;

function Hermann(){
    counter++;
    let h1 = document.getElementById("bigtext");
    if(counter % 2 == 1){
        h1.innerHTML = "Hermann ne otvlekaisia";
    } else{
        h1.innerHTML = "Miras ne otvlekaisia";
    }
}

function makeChoice(choice){
    let h1 = document.getElementById("bigtext");
    let text = "";

    switch(choice){
        case 1:
            text = "Вы проиграли, мальчик потерялся.";
            break;
        case 2:
            text = "Поздравляю, вы выиграли! Мальчик дошел домой.";
            break;
        case 3:
            text = "Вы проиграли, мальчик отправился на поиски приключений.";
            break;
        case 4:
            text = "Поздравляю, вы выиграли! Мальчик нашел себе еду.";
            break;
        default:
            text = "Выберите вариант ответа.";
            break;
    }

    h1.innerHTML = text;
}