function operation(process,a,b)
{
    return process(a,b)
}

function add(a,b)
{
    return a+b;
}

function muply(a,b)
{
    return a*b;
}
console.log (operation(muply,50,10))

console.log (operation(add,50,10))
