import { classProps } from '@/utils/interface/interface'
import React from 'react'

const toggle = ({name, clickEvent, children} : classProps) => {
  return (
    <div className={name} onClick={clickEvent}>
      {children}
    </div>
  )
}

export default toggle