import './Cards.css'
import Card from '../Card/Card'

 const Cards = (props) => {
    
    return (
        <div className="Cards">

           {props.cardsArr?.map((cardData)=>{

                return (
                    <Card name ={cardData}  />
                )
           })}

        </div>
    )
}


export default Cards 