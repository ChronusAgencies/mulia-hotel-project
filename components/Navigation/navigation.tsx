import { classProps } from '@/utils/interface/interface';
import React from 'react';

const navigation = ({name, children} : classProps) => {
  return (
    <nav className={name}>
        {children}
    </nav>
  )
}

export default navigation