var fil = document.getElementsByClassName('filler');
var nav_text = document.getElementById('no-margin');
nav_text.addEventListener('click',() => {
    nav_text.innerText = "This is Abhinav Mukherjee's website";
    nav_text.style.fontSize = "30px";
    console.log("Hello");
});
nav_text.addEventListener('mouseout', () => {
        nav_text.innerText = "Abhinav Mukherjee";
        console.log(nav_text.innerText);
        nav_text.style.fontSize = "40px"; 
});
window.addEventListener('scroll',() => {
    fil[0].style.display = 'none';
});