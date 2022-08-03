


export const getHealthStatus = async(API_NAME) => {
            
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    return fetch(`https://api.factoryfour.com/${API_NAME}/health/status`,requestOptions)
  }


  /* 
    ITERATES OVER AN ARRAY OF OBJECTS WITH A APINAME AS PROPERTY AN THEN MAKE REQUEST TO THE URL 
    ADDING THE NAME OF THE CORRSEPONDING API FOR BETTER MANIPULATION
    AND RETURN THE ARRAY OF RESPONSES
  */
  export const getAllHealthStatus = async (names) => {
  let responseArr=[]
  for await (let name of names) {
      let response = await getHealthStatus(name)
      let responseJson
      
      try{
          responseJson = await response.json()
      }catch{
  
          responseJson = {
                  hostname:response.status === 403? "Forbidenn":"service unavailable",
                  message:response.status,
                  success:false
              }
      }

      responseJson["name"] = name
      responseArr.push( await responseJson)
      
      return responseArr
      } 

}