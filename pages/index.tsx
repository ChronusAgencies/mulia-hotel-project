import React from 'react';
import style from '../styles/Landing.module.scss';
import Image from 'next/image';
import Route from '@/components/Routes/route';

import Logo from '../public/imageAssets/mulia_logo.png';


const index = () => {
  return (
    <>
      <div className={style.background}></div>
      <div className={style.background__overlay}></div>
      <div className={style.main__content}>
        <Route
          href={'/home'}
          name={style.main__logo__link}
        >
          <Image
            src={Logo}
            width={108}
            height={67}
            alt='logo'
          />          
        </Route>
        <h1>
        HOTEL MULIA SENAYAN & THE SUITES AT HOTEL MULIA SENAYAN, JAKARTA
        </h1>
        <article className={style.text__wrapper}>
          <h2>Place to stay </h2>
          <h3>like no <span>other</span></h3>
          <p>Strategycallly Located at The FInest Location in Jakarta</p>
        </article>
        <Route
          href={'/home'}
          name={style.main__cta}
        >
          Explore
        </Route>
      </div>
    </>
  )
}

export default index