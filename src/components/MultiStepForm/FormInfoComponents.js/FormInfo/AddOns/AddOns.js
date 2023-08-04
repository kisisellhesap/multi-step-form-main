import React, { useContext, useEffect, useState } from 'react'
import "./AddOne.css"
import HeaderOfInfoComponents from '../GeneralComponents/HeaderOfInfoComponents/HeaderOfInfoComponents'
import AddOnsOptionComponent from './smallComponents/AddOnsOptionComponent'
import MultiStepContext from '../../../../../contexts/MultiStepContext'

const AddOns = () => {
    const { form, setForm } = useContext(MultiStepContext);



    return (
        <div className='infoComponent' id="addOns">
            <HeaderOfInfoComponents name="Pick add-ons" shortInfo="Add-ons help enhance your gaming experience." />


            <div className='baseOfInfoComponents' id="addOns-base">
                {form.addOns.map((item, index) => {
                    return <AddOnsOptionComponent className={item.planCheck ? "addOnsOptionComponent active" : "addOnsOptionComponent"} key={index} planName={item.planName} planInfo={item.planInfo} planPrice={item.planPrice} planCheck={item.planCheck} onClick={() => {



                        setForm({
                            ...form, addOns: form.addOns.map((addon, idx) =>
                                idx === index ? { ...addon, planCheck: !addon.planCheck } : addon
                            )
                        })



                    }} />
                })}
            </div>
        </div>
    )
}

export default AddOns