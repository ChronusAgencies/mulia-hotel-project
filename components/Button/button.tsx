import React from 'react';
import { TButton } from '@/utils/Type/type';

const button = ({name, btnType, clickEvent, children} : TButton) => {
  return (
    <button type={btnType} className={name} onClick={clickEvent}>
      {children}
    </button>
  )
}

export default button