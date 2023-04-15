import React from 'react'

const button = ({name, btnType, clickEvent, children} : TButton) => {
  return (
    <button type={btnType} className={name} onClick={clickEvent}>
      {children}
    </button>
  )
}

export default button