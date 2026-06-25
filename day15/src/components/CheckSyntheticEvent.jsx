// import React from 'react'

const CheckSyntheticEvent = () => {
    function handleClick(event){
        console.log(event);
    }
    // function handleClick(){
    //     console.log("helloooo");
    // }
  return (
    <div>

        <button onClick={handleClick}>Click</button>
        {/* <button onClick={handleClick()}>Click</button> */}
    </div>
  )
}

export default CheckSyntheticEvent