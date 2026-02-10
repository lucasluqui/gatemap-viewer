document.addEventListener("click", (event) => {
    const target = event.target;
  
    if (target.tagName === "BUTTON") {
        play_sound('ui_confirm');
        return;
    }
  
    if (target.closest('.stratum-entry')) {
        play_sound('ui_dropdown_select');
        return;
    }

    if (target.closest('.gate-entry')) {
        play_sound('ui_dropdown_select');
        return;
    }
});

function play_sound(name) {
	let sound = new Audio('sound/' + name + '.ogg'); 
    sound.volume = 0.33;
	sound.play();
}