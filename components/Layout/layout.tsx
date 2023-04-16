import React, { HTMLProps } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Modal from '../Modal/modal';

const Layout = ({children} : HTMLProps<HTMLAnchorElement>) => {
  return (
    <>
        <Navbar/>
        <main>{children}</main>
        <Modal/>
        <Footer/>
    </>
  )
}

export default Layout