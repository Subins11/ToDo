import  { useState } from 'react'

const useForm = (toDo) => {

    var[val,setval] = useState(toDo);
  return [val,(event)=>{
       setval(
        {
            ...val,[event.target.name]:event.target.value
        }
       )
  }]
    
      
    
  
}

export default useForm
