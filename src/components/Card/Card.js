import './Card.css'

 const Card = (props) => {

    let getTime = (timeNum) => {
        let time = new Date(timeNum)
        return time.toTimeString().split(" ")[0] 
    } 

    return (
        <div className={"Card " +(props.success?"healthy":"error")}>
            <h3 className="Card__title">{props.title}</h3>
            <h4 className="Card__subtitle ">{props.success?"Healthy":"ERROR"}</h4>
            <div className='Card__contents'>
                <p className='Card__contents__content'>{props.success?props.content:"OUTAGED"}</p>
                {props.time && 
                    <p>{getTime(props.time)}</p>
                }
                {
                    !props.success && 
                    <>
                        <p>{props.content}</p>
                        <p>{props.errorMessage}</p>
                    </>
                    
                }
            </div>
        </div>
    )
}
export default Card 