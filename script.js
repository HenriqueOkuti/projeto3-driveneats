/*========================
    CARD
========================*/
/*
function choose_option1(selected) {
    const to_hide_color = document.querySelector(".hidden");
    const to_hide_arrow = document.querySelector(".hidden_arrow");

    if (selected !== null){
        selected.classList.toggle("hidden");
        selected.classList.toggle("hidden_arrow");
    }

    to_hide_color.classList.toggle("hidden");
    to_hide_arrow.classList.toggle("hidden_arrow");

}*/

function choose_option1(selected){
    const unselected = document.querySelector(".border_chosen");
    if (unselected !== null){
        unselected.classList.remove("border_chosen");
    }

    selected.classList.toggle("border_chosen");
    
    console.log("It's not breaking at least");

}
function choose_option2(selected){
    const unselected = document.querySelector(".border_chosen");
    if (unselected !== null){
        unselected.classList.remove("border_chosen");
    }

    selected.classList.toggle("border_chosen");
    
    console.log("It's not breaking at least");
}
function choose_option3(selected){
    const unselected = document.querySelector(".border_chosen");
    if (unselected !== null){
        unselected.classList.remove("border_chosen");
    }

    selected.classList.toggle("border_chosen");
    
    console.log("It's not breaking at least");
}
function choose_option4(selected){

}


/*========================
    CHECKOUT
========================*/

let remove_hidden = document.querySelector(".open_hidden");
remove_hidden.classList.remove("open_hidden");

let flag_order = false;

if (flag_order == true) {
    remove_hidden.classList.add("open_hidden");
    remove_hidden = document.querySelector(".closed_hidden");
    remove_hidden.classList.remove("closed_hidden");

}