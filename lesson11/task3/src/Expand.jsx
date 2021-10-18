import React from 'react'

const Expand = ({children,title,isShown,showHandler}) => {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button onClick={showHandler} className="expand__toggle-btn">
            <i
              className={isShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            ></i>
          </button>
        </div>
        {isShown && <div className="expand__content">{children}</div>}
      </div>
    );
}

export default Expand

