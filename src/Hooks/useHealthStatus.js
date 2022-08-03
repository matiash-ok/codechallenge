
import { useEffect, useState } from 'react';
import {getAllHealthStatus} from '../Service/healthstatus'


/* recibes an array of object of object , and optionally an int for the time between interval */
function useHealthStatus (APIDATAS,time=0) {

    const [healthStatus,setHealthStatus] = useState(APIDATAS)
    
    const get = async(healthStatusArr)=>{       
        let responseArr = getAllHealthStatus(healthStatusArr)
        setHealthStatus([...responseArr])
    }

    useEffect(()=>{

        /* only recibes the apidata.name to itereate */
        get(APIDATAS.map(apidata => apidata.name))

        if(time>0){
            const interval = setInterval(() => {
                get(healthStatus)
            }, time*1000);
    
            return () => clearInterval(interval);
        }
      }, []);

    
    return [healthStatus,setHealthStatus]
}

export default useHealthStatus