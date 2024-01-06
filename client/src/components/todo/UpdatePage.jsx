import React, { useState } from "react";
// import { CiEdit } from "react-icons/ci";
import "../assets/css/update_popup.css";
import { RxCross2 } from "react-icons/rx";


const UpdatePage = ({setshowPopUp ,popupContent}) => {
  console.log(popupContent?.text);
  // console.log(popupContent.text);



  const [input, setInput] = useState(popupContent?.text || "h");


  return (
    <div className="backdrop">
      <div className="popup">
          <RxCross2 className='edit-btn' onClick={ () => setshowPopUp(false)} />
        <div className="update-title">Update Todo</div>
        <div className="edit_section">
          <div className="popup__input_holder">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Update your Todo..."
            />
          </div>
          <button className="update-btn"  >Update</button>
        </div>
      </div>
    </div>
  );
};


export default UpdatePage;
