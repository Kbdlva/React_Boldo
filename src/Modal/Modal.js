import React from "react";
import "./Modal.css"

const Modal = ({active, setActive}) => {
    return (
        <div className={active? "popup active" : "popup"} onClick={() =>setActive(false)}>
        <div className='popup_body' >
          <div className={active? "popup_content active" : "popup_content"} onClick={e =>e.stopPropagation()}>
            <div className='popoup_title'>
                <h1>Login</h1>
            </div>
            <div className='popup_fields'>
                <button className="btn btn-dark" >Username</button>
                <button className="btn btn-dark">Password</button>
                <button className="btn btn-basic">Login</button>
             
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal;