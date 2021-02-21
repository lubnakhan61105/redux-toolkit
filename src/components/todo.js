import React, {useState} from'react';
import Cuttodo from "./cuttodo";
  const Todo=()=>{
    const[item,setItem]=useState('');
    const[item1,setItem1]=useState([])



    const e=()=>{
      setItem1((val)=>{
        return[...val,item]
      })
      setItem('');
    }
return(
  <div>
    

    
  <input type="text"value={item} onChange={(e)=>{
    setItem(e.target.value)
  }}></input>
  <button onClick={e}
  >add</button>
  <div>
      
  <ol>
  {item1.map((val,i)=>{
      
    return<Cuttodo  key={i} text={val}/> 
    
   
  })}
  </ol></div>
  </div>
)
}
export default Todo;