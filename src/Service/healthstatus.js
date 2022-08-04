


export const getHealthStatus = async(API_NAME) => {
            
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
      const response = await fetch(`https://api.factoryfour.com/${API_NAME}/health/status`,requestOptions).then(response => {
        if (!response.ok) throw Error(response.status);
        return response 
      }).then(response => response.json()).catch(error => error)
      
      return await response
      
    }
