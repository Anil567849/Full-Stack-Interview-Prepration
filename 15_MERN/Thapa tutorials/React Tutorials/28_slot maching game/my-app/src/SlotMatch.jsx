import React from "react";

const Slot = (props) => {

    let x = props.x;
    let y =  props.y;
    let z =  props.z;
  
      if(x == y && y == z){
        return (
          <>
            <div className="slot_inner">
              <h1>
                {x} {y} {z}
              </h1>
              <h1>THIS IS MATCHING</h1>
            </div>
            <hr/>
          </>
        );
      }else{
        return (
          <>
            <div className="slot_inner">
              <h1>
                {x} {y} {z}
              </h1>
              <h1>THIS NOT IS MATCHING</h1>
            </div>
            <hr/>
          </>
        );
      }
  }
  
  // 👩‍🏫👼👨‍🏫👩‍⚕️👨‍🦳👮‍♂️👳‍♀️👨‍🦲👶🧎‍♂️🏋️‍♀️🚵‍♀️



  export default Slot;