import { classProps } from '@/utils/interface/interface';
import React from 'react';
import styles from '@/styles/liveChat.module.scss';
import Button from '@/components/Button/button';

const liveChat = ({name,clickEvent} : classProps) => {
  return (
    <>
        <div className={name}>
            <div className={styles.header}>
                <div className={styles.profilePic}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5002 12C10.896 12 9.52273 11.4289 8.38037 10.2865C7.23801 9.14414 6.66683 7.77087 6.66683 6.16671C6.66683 4.56254 7.23801 3.18928 8.38037 2.04692C9.52273 0.904555 10.896 0.333374 12.5002 0.333374C14.1043 0.333374 15.4776 0.904555 16.62 2.04692C17.7623 3.18928 18.3335 4.56254 18.3335 6.16671C18.3335 7.77087 17.7623 9.14414 16.62 10.2865C15.4776 11.4289 14.1043 12 12.5002 12ZM0.833496 23.6667V19.5834C0.833496 18.757 1.04641 17.9972 1.47225 17.304C1.89808 16.6108 2.46294 16.0824 3.16683 15.7188C4.67377 14.9653 6.20502 14.4 7.76058 14.0227C9.31614 13.6455 10.896 13.4574 12.5002 13.4584C14.1043 13.4584 15.6842 13.647 17.2397 14.0242C18.7953 14.4014 20.3266 14.9663 21.8335 15.7188C22.5384 16.0834 23.1037 16.6123 23.5295 17.3055C23.9554 17.9987 24.1678 18.758 24.1668 19.5834V23.6667H0.833496Z" fill="#232323"/>
                    </svg>
                </div>
                <div className={styles.profile}>
                    <p className={styles.username}>Rachel</p>
                    <p className={styles.position}>Front Desk Agent</p>
                    <div className={styles.status}>
                        <div className={styles.status_isOnline}></div>
                        <p className={styles.status_desc}>online</p>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.window}></div>
                    <form className={styles.textArea}>
                        <label htmlFor="messages">Enter your messages...</label>
                        <textarea name="messages" id="messages" cols={30} rows={10} className={styles.messagesBox}>
                        </textarea>
                        <Button>
                            
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default liveChat