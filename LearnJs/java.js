
const view1 = document.querySelector("nav");
const div = view1.querySelector("h1");

const dosome = () =>
    {
        alert("This is correct");
    } ;

div.addEventListener("click", dosome, false)