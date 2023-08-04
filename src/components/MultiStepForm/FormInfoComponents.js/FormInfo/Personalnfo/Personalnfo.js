import React, { useContext, useEffect } from 'react'
import "./Personalnfo.css"
import HeaderOfInfoComponents from "../GeneralComponents/HeaderOfInfoComponents/HeaderOfInfoComponents"
import InputComponent from "./smallComponents/InputComponent/InputComponent"
import MultiStepContext from '../../../../../contexts/MultiStepContext'

const Personalnfo = () => {

    const { form, setForm, formError } = useContext(MultiStepContext);

    const handleChange = (e) => {


        if (e.target.name === "phoneNumber" && !/^\d*$/.test(e.target.value)) {
            return;
        }

        setForm({ ...form, personalInfo: { ...form.personalInfo, [e.target.name]: e.target.value } })
    }



    return (
        <div className='infoComponent' id="personalInfo">
            <HeaderOfInfoComponents name="Personal info" shortInfo="Please provide your name, email adress, and phone number." />

            <div className='baseOfInfoComponents' id="personalBase">

                <InputComponent
                    inputName="Name"
                    placeholder="e.g Stephen King"
                    name="name"
                    value={form.personalInfo.name}
                    errorMessage={formError.personalInfoError.name.errorMessage}
                    classError={formError.personalInfoError.name.classError}

                    onChange={handleChange} />

                <InputComponent
                    inputName="Email Adress"
                    placeholder="e.g stephenking@lorem.com"
                    name="email"
                    value={form.personalInfo.email}
                    errorMessage={formError.personalInfoError.email.errorMessage}
                    classError={formError.personalInfoError.email.classError}
                    onChange={handleChange} />

                <InputComponent
                    inputName="Phone Number"
                    placeholder="e.g +1 234 567 890"
                    name="phoneNumber"
                    value={form.personalInfo.phoneNumber}
                    errorMessage={formError.personalInfoError.phoneNumber.errorMessage}
                    classError={formError.personalInfoError.phoneNumber.classError}
                    onChange={handleChange} />

            </div>

        </div>
    )
}

export default Personalnfo