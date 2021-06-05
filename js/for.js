import { advicesList } from '../data/advicesList.js'          // get the list from data/advicesList.js
                                                              // console.log(advicesList); //! TODO: 

const divContainer = document.querySelector(".container")     // grab the div class="container" 

for(let i=0; i<advicesList.length; i++){                      // loop through the advices list
    
        divContainer.innerHTML += `            
        <div class="advice">    
            <p><span>${advicesList[i].id}.</span> ${advicesList[i].advice}</p>    
            <div >Date: <span class="date" >${advicesList[i].date}</span></div> 
        </div>
        `
}



