import React from 'react';


function pokeInfor() {
    setTimeout(()=>{
        let card =document.querySelectorAll(".pokemon");
        let PokeContainer =document.querySelectorAll(".pokemon-container");
        for(let i = 0; i < card.length; i++){
            var hidden = document.querySelectorAll(".poke-infor")
            card[i].onclick = function() {
                for(let i = 0; i < card.length; i++){
                    card[i].style.width = "100%";
                    card[i].style.transition = "width 0s";
                    hidden[i].style.display = "none";
                }
                card[i].style.transition = "width 1s";
                card[i].style.width = "65%";
                hidden[i].style.display = "flex";
            }   
        }
    },2000)
        
    return (
        <div>
           
        </div>
     );
}

export default pokeInfor;
