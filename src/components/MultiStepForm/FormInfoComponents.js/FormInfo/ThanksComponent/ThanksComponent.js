import React from 'react'
import "./ThanksComponent.css"
import thanksIcon from "../../../../../assets/images/icon-thank-you.svg";
const ThanksComponent = () => {
    return (
        <div className='infoComponent' id='thanksComponent'>
            <div className='baseOfInfoComponents' id="thanksBase">

                <img src={thanksIcon} alt='' />
                <h3>Thank you !</h3>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>

        </div>
    )
}

export default ThanksComponent