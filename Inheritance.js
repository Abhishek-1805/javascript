class Animal
{
    dog()
    {
        console.log("This is Dog")
    }
}

class domasticAnimal extends Animal
 {
    cat()
    {
        console.log("This is Cat")
    }
}

let obj =new domasticAnimal();
obj.cat();
obj.dog();
