"use strict";
import { advicesList } from '../data/advicesList.js'          // get the list from data/advicesList.js
                                                              // console.log(advicesList); //! TODO: 

const divContainer = document.querySelector(".container")     // grab the div class="container" 

for (const adviceObj of advicesList) {                        // loop through the advices list
                                                              //? at each iteration add inside the container one by one what it follows 
                                                                //? create a div with the class addvice
                                                                //? create a paragraph element. 
                                                                //? Indide the paragraph elem add a span. 
                                                                //? Add the id property inside the span element. 
                                                                //? Add the addvice property inside the rest for the p tag. 
                                                                //? Close tag </p>
                                                                //? CONTIUE THE SAME WAY 
    divContainer.innerHTML += `            
        <div class="advice">    
            <p><span>${adviceObj.id}.</span> ${adviceObj.advice}</p>    
            <div >Date: <span class="date" >${adviceObj.date}</span></div> 
        </div>
        `
}
