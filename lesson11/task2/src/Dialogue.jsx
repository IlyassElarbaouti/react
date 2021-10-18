import React from 'react'

const Dialogue = ({closeHandler,isOpen,children,title}) => {
    if(!isOpen){
        return null
    }
    return (
      <div className="dialog">
        <div className="dialog__heading">
          <h4 className="dialog__title">{title}</h4>
          <button onClick={closeHandler} className="dialog__close-btn">
            +
          </button>
        </div>
        <div className="dialog__content">{children}</div>
      </div>
    );
}

export default Dialogue
