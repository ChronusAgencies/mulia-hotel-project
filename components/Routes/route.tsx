import React, { FC, HTMLProps } from 'react';
import Link, {LinkProps} from 'next/link';
import { classProps } from '@/utils/interface/interface';

const route:FC<LinkProps & classProps & HTMLProps<HTMLAnchorElement>> = ({children, name, href}) => {
  return (
    <Link
      href={href}
      className={name}
    >
      {children}
    </Link>
  )
}

export default route