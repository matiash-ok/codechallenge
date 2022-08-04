import { useEffect,useState } from "react"
import Cards from "../components/Cards/Cards";


const Interval = (props)=>{

    const [time,setTime] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("hola");
            let contador = time 
            setTime(contador++)
        }, (props.time)*1000);
      
        return () => clearInterval(interval);
      }, []);
      
    return ( <Cards/> )
}

export default Interval