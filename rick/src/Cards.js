import React from "react"

const Cards =({characters}) => {
   

       const theBlock = characters.map(card=>{
        return (
            <div className="card" width='50 px' height='50px'>
                <img src={card.image} className="card-img-top" alt="..." height='500 px' width='50 px'/>
                <div className="card-body">
                    <h5 className="card-title">Character</h5>
                   <center><p className="card-text">Name: {card.name}</p> </center> 
                    <p className="card-text">Gender: {card.gender}</p>
                    <p className="card-text">Species: {card.species}</p>
                    <p className="card-text">Status: {card.status}</p>
                    
                </div>
            </div>
        )
        
        })

  
        
        
        return <div>{theBlock}</div>
        


    
}

export default Cards