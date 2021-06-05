const getAdvices = async function () {
    let advices = await fetch('https://api.adviceslip.com/advice/search/a')
                        .then( advices => advices.json())
                        .then( advices => advices.slips)
                        // .then( advices => console.log( advices ) )
                        .catch(err => console.log(err))
    
    return advices
} 

// displayAdvices(getAdvices ())

const displayAdvices = async ( data ) =>  {
    const divContainer = document.querySelector(".container")
    let advicesList = await data
    // console.log(advicesList); //! TODO: 
    for (const adviceObj of advicesList ) {
        const { id, advice, date} = adviceObj
        
        divContainer.innerHTML += `
            <div class="advice">
                <p><span>${id}.</span> ${advice}</p>
                <div >Date: <span class="date" >${date}</span></div>
            </div>
            `
        // console.log(advice); //! TODO: 
    }
}
displayAdvices( getAdvices() )