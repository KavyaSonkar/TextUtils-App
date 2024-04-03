import React from 'react'


export default function Alert(props) {

    const capitalize = (word)=> {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
        
    }
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
</div>} 
{/* we have to put everything in curly braces cz direct js likha hai toh nai chlega uske bina crash hojaega */}
</div>

  )
} 


// pros.alert null hai toh && ke bad wali nai milegi. props.null nai h toh do this