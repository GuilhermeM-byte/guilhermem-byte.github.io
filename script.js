function changeAccordionState(accordion) {
    if (document.getElementById(accordion).classList.contains('open')) {
        document.getElementById(accordion).classList.remove('open');
        document.getElementById(accordion).style.height = '209px';
    } else {
        document.getElementById(accordion).classList.add('open');
        document.getElementById(accordion).style.height = '100%';
    }
}