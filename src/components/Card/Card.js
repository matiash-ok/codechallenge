import './Card.css'
import useHealthStatus from '../../Hooks/useHealthStatus'

 const Card = (props) => {

    const [healthStatus] = useHealthStatus(props.name,15)

    let getTime = (timeNum) => {
        let time = new Date(timeNum)
        return time.toTimeString().split(" ")[0] 
    } 

    return (
        <div className={"Card " +(healthStatus?.success?"healthy":"error")}>
            <h3 className="Card__title">{props.name.toString().toUpperCase()}</h3>
            <h4 className="Card__subtitle ">{healthStatus?.success?"Healthy":"ERROR"}</h4>
            <div className='Card__contents'>
                <p className='Card__contents__content'>{healthStatus?.success?healthStatus?.content:"OUTAGED"}</p>
                {healthStatus?.time && 
                    <p>{getTime(healthStatus?.time)}</p>
                }
                {
                    !healthStatus?.success && 
                    <>
                        <p>{healthStatus.toString()}</p>
                    </>
                    
                }
            </div>
        </div>
    )
}
export default Card 