"use clients";


import React, {useState} from 'react';
import Link from 'next/link';
import styles from '@/styles/navbar.module.scss';
import Image from 'next/image';
import logo from '@/public/imageAssets/mulia_logo.png';
import Toggle from './Toggle/toggle';
import Navigation from '../Navigation/navigation';


const navbar = () => {

  const [isActive, setActive] = useState(false)
  
  const navbarToggler = () => {
    setActive(!isActive)
  }

  return (
    <>
      <header className={styles.wrapper}>
          <Link
              href={'/'}
              className={styles.logo_link}
          >
              <Image
                  src={logo}
                  alt='logo_link'
                  width={87}
                  height={54}
                  className={styles.logo}
              />
          </Link>
          <Toggle
            name={`${styles.toggle} ${isActive ? styles.isActive : ''}`}
            clickEvent={navbarToggler}
          >
            <span></span>
            <span></span>
            <span></span>
          </Toggle>
      </header>
      <Navigation
        name={`${styles.main_wrapper} ${isActive ? styles.isActive : ''}`}
      >
        <div className={styles.link_wrapper}>
          <section className={styles.links_container}>
            <Link
              href={'/'}
              className={styles.main_link}
            >
              ACCOMODATIONS
              <svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001L5.5 0.500001C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
              </svg>
            </Link>
            <Link
              href={'/'}
              className={styles.sec_link}
            >
              dinings
            </Link>
          </section>
          <section className={styles.links_container}>
            <Link
              href={'/'}
              className={styles.main_link}
            >
              EVENTS
              <svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001L5.5 0.500001C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
              </svg>
            </Link>
            <Link
              href={'/'}
              className={styles.sec_link}
            >
              weddings
            </Link>
          </section>
          <section className={styles.links_container}>
            <Link
              href={'/'}
              className={styles.main_link}
            >
              ACTIVITIES
              <svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001L5.5 0.500001C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
              </svg>
            </Link>
            <Link
              href={'/'}
              className={styles.sec_link}
            >
              tours
            </Link>
          </section>
          <section className={styles.links_container}>
            <Link
              href={'/'}
              className={styles.main_link}
            >
              MULIA PRIVILAGE
              <svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001L5.5 0.500001C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
              </svg>
            </Link>
            <Link
              href={'/'}
              className={styles.sec_link}
            >
              mulia gifts
            </Link>
          </section>
          <section className={styles.links_container}>
            <Link
              href={'/'}
              className={styles.main_link}
            >
              SPECIAL OFFERS
              <svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001L5.5 0.500001C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
              </svg>
            </Link>
            <Link
              href={'/'}
              className={styles.sec_link}
            >
              blogs
            </Link>
          </section>
        </div>
      </Navigation>
    </>
  )
}

export default navbar