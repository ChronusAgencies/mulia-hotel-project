'use clients';

import React, { useState } from 'react';
import Toggle from '../Navbar/Toggle/toggle';
import styles from '@/styles/modal.module.scss';
import LiveChat from './LiveChat/liveChat';

const Modal = () => {
    // state for modal background
    const[modalIsActive, setModal] = useState(false);

    // state for chat modal
    const[chatIsActive, setChatRoom] = useState(false)

    const chatActivation = () => {
        setModal(!modalIsActive);
        setChatRoom(!chatIsActive);
    }

  return (
    <>
        <div className={`${styles.modal_overlay} ${modalIsActive && styles.isActive}`}></div>
        <LiveChat
                name={`${styles.liveChat} ${chatIsActive && modalIsActive ? styles.chatIsActive : ''}`}
        />
        <Toggle
            name={styles.chat_toggle}
            clickEvent={chatActivation}
        >
            <svg width="100%" height="100%" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6 19.8H19.8V16.5H6.6V19.8ZM6.6 14.85H26.4V11.55H6.6V14.85ZM6.6 9.9H26.4V6.6H6.6V9.9ZM0 33V3.3C0 2.3925 0.3234 1.61535 0.9702 0.96855C1.6159 0.32285 2.3925 0 3.3 0H29.7C30.6075 0 31.3846 0.32285 32.0314 0.96855C32.6772 1.61535 33 2.3925 33 3.3V23.1C33 24.0075 32.6772 24.7846 32.0314 25.4314C31.3846 26.0772 30.6075 26.4 29.7 26.4H6.6L0 33ZM3.3 25.0387L5.23875 23.1H29.7V3.3H3.3V25.0387Z" fill="#232323"/>
            </svg>
        </Toggle>
    </>
  )
}

export default Modal