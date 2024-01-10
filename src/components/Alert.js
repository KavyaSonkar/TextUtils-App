import React from 'react'


export default function Alert(props) {

    const capitalize = (word)=> {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
        
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
</div>

  )
} 


// pros.alert null hai toh && ke bad wali nai milegi. props.null nai h toh do this