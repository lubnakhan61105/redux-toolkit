import React, {useState}from"react";

 const Cuttodo =(props)=>{
const [ditem,setDitem]=useState(false);
return(
<div>
 
<li onClick={(cutit)=>{
setDitem(true)
}} style={{textDecoration:ditem?"line-through":"none"}}>
{props.text}
</li>
</div>
)}
export default Cuttodo;