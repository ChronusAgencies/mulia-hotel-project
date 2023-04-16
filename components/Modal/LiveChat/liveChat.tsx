import { IMessageData, classProps } from '@/utils/interface/interface';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/liveChat.module.scss';
import Button from '@/components/Button/button';

// const initialState: IMessageData = {
//     message : null,
//     time : null
// }

const LiveChat = ({name,clickEvent} : classProps) => {
    // function to format single digit number into two digit
    const padTo2Digit = (num : number) => {
        return num.toString().padStart(2, '0')
    };

    // function to format rendered time in hour:minute format in 24hr
    const formatTime = (date : Date) => {
        return(
            [
                padTo2Digit(date.getHours()),
                padTo2Digit(date.getMinutes())
            ].join(':')
        );
    };

    // set hooks to save the messages
    const [message, setMessage] = useState<string>();

    //function to handle text area value changes
    const handleMessageChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    };


    // set hooks to save user chat and time
    const [userMessage, setUserMessage] = useState<IMessageData[]>([]);

    // function to handle form submit
    const handleMessageSubmit = (event : React.FormEvent<HTMLElement & HTMLFormElement>) => {
        event.preventDefault();

        setUserMessage(prevMessage => [...prevMessage, {messages : message,
            time : formatTime(new Date)}])
    }

    useEffect(() => {setMessage('')}, [userMessage])


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
                    <div className={styles.window}>
                        {userMessage.map((MSG, id) => {
                            return(
                                <div key={id} className={styles.chatWrapper}>
                                    <div className={styles.chatBubble}>
                                        <p className={styles.chatMessage}>{MSG.messages}</p>
                                        <p className={styles.chatTime}>{MSG.time}</p>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                    <form className={styles.textArea} onSubmit={handleMessageSubmit}>
                        <textarea name="messages" id="messages" cols={30} rows={10} className={styles.messagesBox} placeholder='Enter your messages...' onChange={handleMessageChange} value={message}>
                        </textarea>
                        <Button
                            btnType='submit'
                            name={styles.messagesSubmit}
                        >
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.4 15.4251C1.06667 15.5584 0.75 15.5291 0.45 15.3371C0.15 15.1451 0 14.8661 0 14.5001V10.7751C0 10.5417 0.0666667 10.3334 0.2 10.1501C0.333333 9.96672 0.516667 9.85005 0.75 9.80005L8 8.00005L0.75 6.20005C0.516667 6.15005 0.333333 6.03339 0.2 5.85005C0.0666667 5.66672 0 5.45838 0 5.22505V1.50005C0 1.13338 0.15 0.854052 0.45 0.662052C0.75 0.470052 1.06667 0.441051 1.4 0.575051L16.8 7.07505C17.2167 7.25838 17.425 7.56672 17.425 8.00005C17.425 8.43338 17.2167 8.74172 16.8 8.92505L1.4 15.4251Z" fill="#222222"/>
                             </svg>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default LiveChat