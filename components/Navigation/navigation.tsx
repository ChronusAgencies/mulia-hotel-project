import { classProps } from '@/utils/interface/interface';
import React from 'react';

const Navigation = ({name, children} : classProps) => {
  return (
    <nav className={name}>
        {children}
    </nav>
  )
}

export default Navigation