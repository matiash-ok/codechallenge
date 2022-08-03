import './Cards.css'
import Card from '../Card/Card'

 const Cards = (props) => {
    
    return (
        <div className="Cards">

           {props.cardsArr?.map((cardData)=>{

                return (
                    <Card 
                        title={cardData.name.toString().toUpperCase()}
                        success={cardData.success}
                        content = {cardData.hostname}
                        time = {cardData.time}
                        errorMessage = {cardData.message}
                    />
                )
           })}

        </div>
    )
}
export default Cards 