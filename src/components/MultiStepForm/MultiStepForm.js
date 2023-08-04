import React, { useState, useEffect } from 'react'
import "./MultiStepForm.css"
import NavSide from "./NavSide/NavSide"
import FormInfoComponents from './FormInfoComponents.js/FormInfoComponents'

import arcade from "../../assets/images/icon-arcade.svg"
import advanced from "../../assets/images/icon-advanced.svg"
import pro from "../../assets/images/icon-pro.svg"
import MultiStepContext from "../../contexts/MultiStepContext"
const MultiStepForm = () => {

    const initialState = {
        startStep: 1,
        lastStep: 5,
        personalInfo: {
            name: "",
            email: "",
            phoneNumber: ""
        },
        selectPlan: {
            data: [
                {
                    planImg: arcade,
                    planName: "Arcade",
                    planPrice: 9,

                },
                {
                    planImg: advanced,
                    planName: "Advanced",
                    planPrice: 12,

                },
                {
                    planImg: pro,
                    planName: "Pro",
                    planPrice: 15

                }
            ],
            activePlan: {
                planName: "",
                planOption: "Monthly",
                planPrice: ""
            }
        },
        addOns: [
            {
                planName: "Online service",
                planInfo: "Access to multiplayer games",
                planPrice: 1,
                planCheck: false
            },
            {
                planName: "Larger storage",
                planInfo: "Extra 1TB of cloud save",
                planPrice: 2,
                planCheck: false
            },
            {
                planName: "Customizable profile",
                planInfo: "Custom theme on your profile",
                planPrice: 2,
                planCheck: false
            }
        ]
    }


    const [form, setForm] = useState(initialState);

    const [formError, setFormError] = useState({
        personalInfoError: {
            name: {
                classError: "inputText",
                errorMessage: "",
            },
            email: {
                classError: "inputText",
                errorMessage: "",
            },
            phoneNumber: {
                classError: "inputText",
                errorMessage: "",
            }
        },
        selectPlanError: {
            classError: "",
            errorMessage: ""
        }
    });

    useEffect(() => {
        changePlanPrice();
    }, [form.selectPlan.activePlan]);

    const changePlanPrice = () => {
        const updatedAddOns = form.addOns.map((addon) => {
            // Döngü içinde seçeneklerin fiyatlarını güncelle
            if (addon.planName === "Online service") {
                return { ...addon, planPrice: form.selectPlan.activePlan.planOption === "Monthly" ? 1 : 10 };
            }
            else if (addon.planName === "Larger storage") {
                return { ...addon, planPrice: form.selectPlan.activePlan.planOption === "Monthly" ? 2 : 20 };
            }

            else if (addon.planName === "Customizable profile") {
                return { ...addon, planPrice: form.selectPlan.activePlan.planOption === "Monthly" ? 2 : 20 };
            }
            else {
                return addon;
            }
        });

        const updatedSelectPlanData = form.selectPlan.data.map((item) => {
            if (item.planName === "Arcade") {
                return { ...item, planPrice: form.selectPlan.activePlan.planOption === "Monthly" ? 9 : 90 };
            }
            else if (item.planName === "Advanced") {
                return { ...item, planPrice: form.selectPlan.activePlan.planOption === "Monthly" ? 12 : 120 };
            }
            else if (item.planName === "Pro") {
                return { ...item, planPrice: form.selectPlan.activePlan.planOption === "Monthly" ? 15 : 150 };
            }
            else {
                return item;
            }
        })

        setForm({ ...form, selectPlan: { ...form.selectPlan, data: updatedSelectPlanData }, addOns: updatedAddOns });
    };





    const validationName = () => {
        if (form.personalInfo.name === "") {
            setFormError((prevFormError) => ({
                ...prevFormError,
                personalInfoError: {
                    ...prevFormError.personalInfoError,
                    name: { classError: "inputText errBorder", errorMessage: "This field is required" }
                }
            }));
            return false;

        } else {
            setFormError((prevFormError) => ({
                ...prevFormError,
                personalInfoError: {
                    ...prevFormError.personalInfoError,
                    name: { classError: "inputText", errorMessage: "" } // Hata mesajını temizler.
                }
            }));

            return true;
        }

    }
    const validationEmail = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.personalInfo.email)) {
            setFormError((prevFormError) => ({
                ...prevFormError,
                personalInfoError: {
                    ...prevFormError.personalInfoError,
                    email: { classError: "inputText", errorMessage: "" } // Hata mesajını temizler.
                }
            }));
            return true;
        } else if (form.personalInfo.email === "") {
            setFormError((prevFormError) => ({
                ...prevFormError,
                personalInfoError: {
                    ...prevFormError.personalInfoError,
                    email: { classError: "inputText errBorder", errorMessage: "This field is required" }
                }
            }));
            return false;
        }
        else {
            setFormError((prevFormError) => ({
                ...prevFormError,
                personalInfoError: {
                    ...prevFormError.personalInfoError,
                    email: { classError: "inputText errBorder", errorMessage: "Enter a valid email" }
                }
            }));
            return false;
        }
    }
    const validationPhoneNumber = () => {
        if (form.personalInfo.phoneNumber === "") {
            setFormError((prevFormError) => ({
                ...prevFormError,
                personalInfoError: {
                    ...prevFormError.personalInfoError,
                    phoneNumber: { classError: "inputText errBorder", errorMessage: "This field is required" }
                }
            }));
            return false;
        } else {
            setFormError((prevFormError) => ({
                ...prevFormError,
                personalInfoError: {
                    ...prevFormError.personalInfoError,
                    phoneNumber: { classError: "inputText", errorMessage: "" } // Hata mesajını temizler.
                }
            }));
            return true;
        }
    }





    return (
        <div id='multiStepFrom' >
            <MultiStepContext.Provider value={{ form, setForm, formError, setFormError }}>
                <NavSide validationName={validationName} validationEmail={validationEmail} validationPhoneNumber={validationPhoneNumber} />
                <FormInfoComponents validationName={validationName} validationEmail={validationEmail} validationPhoneNumber={validationPhoneNumber} />
            </MultiStepContext.Provider>
        </div>
    )
}

export default MultiStepForm