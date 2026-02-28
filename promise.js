isBike = true;

function waitForBike()
{
    return new Promise((resovled,rejected)=>
        {
            if(isBike)
                {
                    resovled("There is Bike")
                }

                else
                    {
                        rejected("There is No Bike")
                    }
        },1000)
}

function thereIsBike()
{
    waitForBike().then((message)=>
        {
            console.log(message)
        })
        .catch((error)=>
            {
                console.log(error)
            })
}

thereIsBike();
