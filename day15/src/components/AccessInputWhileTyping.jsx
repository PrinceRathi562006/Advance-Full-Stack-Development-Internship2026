// import { useState } from "react";

const AccessInputWhileTyping = () => {
//   const [type, setType] = useState("");

  function handleChange(e){
    console.log(e.target.value);
  }

//   console.log(type);

  return (
    <div>
      <input
        type="text" 
        // value={type}
        // onChange={(e) => setType(e.target.value)}
        onChange={handleChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default AccessInputWhileTyping;
