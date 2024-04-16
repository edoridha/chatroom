import React from 'react'
import './chatroom.css'

export default function () {
    return (
        <div>
            <h1 className='title'>Chatroom</h1>
            <div className="main">
                <div className="name">
                    <span>
                        <i className="far fa-user"></i>
                    </span>
                    <input type="text" className='name-input' id='name-input' value='anonymous' maxLength={20} />
                </div>
                <ul className="message-container" id="message-container">
                    <li className="message-left">
                        <p className="message">Lorem ipsum dolor
                        <span>bluebird • 26 July 10:40</span>
                        </p>
                    </li>
                    <li className="message-right">
                        <p className="message">Lorem ipsum 
                        <span>bluebird • 26 July 11:40</span>
                        </p>
                    </li>
                    <li className="message-feedback">
                        <p className="feedback" id="feedback">someone is typing a message</p>
                    </li>
                </ul>

                <form action="" className="message-form" id="message-form">
                    <input type="text" name="message" id="message-input" className='message-input' />
                    <div className="v-devider"></div>
                    <button type="submit" className="send-button">
                        send <span><i className="fas fa-paper-plane"></i></span>
                    </button>
                </form>
            </div>
        </div>
    )
}
