
import { useEffect, useState } from 'react';
import {getHealthStatus} from '../Service/healthstatus'


/* recibes an array of object of object , and optionally an int for the time between interval */
function useHealthStatus (name,time=0) {

    const [healthStatus,setHealthStatus] = useState(
            {
                name:name,
                success:"",
                hostname:"",
                time:"",
                message:""
            })
    
    const get = async(name)=>{    
        
        try {
            let response = await getHealthStatus(name)
            setHealthStatus(response)
            
        } catch (error) {
            setHealthStatus(error)
        }
       
      
    }

    useEffect(()=>{
        get(name)

        if(time>0){
            const interval = setInterval(() => {
                get(name)
            }, (time)*1000);
    
            return () => clearInterval(interval);
        }

      }, []);

    
    return [healthStatus,setHealthStatus]
}
export default useHealthStatus