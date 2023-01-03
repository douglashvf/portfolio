
        /**Active Menu */
const list = document.querySelectorAll('.list');
    function activeList(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
        list.forEach((item) => 
        item.addEventListener('click', activeList));
        /**Active Menu Fim */

        /**Texto Digitado */

const el = document.querySelector('h1');
const text = "DOUGLAS FREITAS";
const interval = 150;

function showText(el, text, interval) {
    const char = text.split("").reverse();
    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer);
        }
        const next = char.pop();
        el.innerHTML += next;
    }, interval);

}
    showText(el, text, interval);

        /**Texto Digitado fim*/
