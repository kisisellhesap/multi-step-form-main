import React, { useContext } from 'react'
import "./NavSide.css"
import MultiStepContext from '../../../contexts/MultiStepContext'
const NavSide = ({ validationName, validationEmail, validationPhoneNumber }) => {

    const { form, setForm, formError, setFormError } = useContext(MultiStepContext);

    const warningSteps = () => {

        if (form.startStep === 1) {
            for (const item of document.querySelectorAll(".menu")) {

                if (item.classList.contains("step2")) {
                    console.log(item.children[0]);
                    item.children[0].classList.add("warningP");
                }
            }
        }

    }


    const stepIncrement1 = () => {
        const nameValidation = validationName();
        const emailValidation = validationEmail();
        const phoneNumberValidation = validationPhoneNumber();

        if ((nameValidation && emailValidation && phoneNumberValidation)) {
            setForm({ ...form, startStep: 1 })
        }
    }

    const stepIncrement2 = () => {

        const nameValidation = validationName();
        const emailValidation = validationEmail();
        const phoneNumberValidation = validationPhoneNumber();

        if ((nameValidation && emailValidation && phoneNumberValidation)) {

            setForm({ ...form, startStep: 2 })
            setFormError({ ...formError, selectPlanError: { ...formError.selectPlan, classError: "", errorMessage: "" } })
        }
        // else {
        //             setFormError({ ...formError, selectPlanError: { ...formError.selectPlan, classError: "warning", errorMessage: "Please choose a plan !" } })
        //         }

    }

    const stepIncrement3 = () => {
        const nameValidation = validationName();
        const emailValidation = validationEmail();
        const phoneNumberValidation = validationPhoneNumber();

        if ((nameValidation && emailValidation && phoneNumberValidation) && form.selectPlan.activePlan.planName !== "") {
            setForm({ ...form, startStep: 3 })
        }
        if ((nameValidation && emailValidation && phoneNumberValidation) && form.selectPlan.activePlan.planName === "") {
            warningSteps();
            setFormError({ ...formError, selectPlanError: { ...formError.selectPlan, classError: "warning", errorMessage: "Please choose a plan !" } })
        }


    }
    const stepIncrement4 = () => {
        const nameValidation = validationName();
        const emailValidation = validationEmail();
        const phoneNumberValidation = validationPhoneNumber();

        if ((nameValidation && emailValidation && phoneNumberValidation) && form.selectPlan.activePlan.planName !== "") {
            setForm({ ...form, startStep: 4 })
        }

        if ((nameValidation && emailValidation && phoneNumberValidation) && form.selectPlan.activePlan.planName === "") {
            warningSteps();
            setFormError({ ...formError, selectPlanError: { ...formError.selectPlan, classError: "warning", errorMessage: "Please choose a plan !" } })
        }

    }


    return (
        <div className={form.startStep === 5 ? "navSide completedNav" : "navSide"}>

            <div className={form.startStep === 5 ? "menu step1 menuDisplayNone" : "menu step1"} onClick={stepIncrement1}>
                <p className={form.startStep === 1 ? "menuNumber activeP" : "menuNumber"}>1</p>
                <div className='menuInfo'>
                    <span className='stepName'>STEP 1</span>
                    <p className='menuName'>YOUR INFO</p>
                </div>
            </div>
            <div className={form.startStep === 5 ? "menu step2 menuDisplayNone" : "menu step2"} onClick={stepIncrement2}>
                <p className={form.startStep === 2 ? "menuNumber activeP" : "menuNumber"}>2</p>
                <div className='menuInfo'>
                    <span className='stepName'>STEP 2</span>
                    <p className='menuName'>SELECT PLAN</p>
                </div>
            </div>
            <div className={form.startStep === 5 ? "menu step3 menuDisplayNone" : "menu step3"} onClick={stepIncrement3}>
                <p className={form.startStep === 3 ? "menuNumber activeP" : "menuNumber"}>3</p>
                <div className='menuInfo'>
                    <span className='stepName'>STEP 3</span>
                    <p className='menuName'>ADD-ONS</p>
                </div>
            </div>
            <div className={form.startStep === 5 ? "menu step4 menuDisplayNone" : "menu step4"} onClick={stepIncrement4}>
                <p className={form.startStep === 4 ? "menuNumber activeP" : "menuNumber"}>4</p>
                <div className='menuInfo'>
                    <span className='stepName'>STEP 4</span>
                    <p className='menuName'>SUMMARY</p>
                </div>
            </div>
        </div>
    )
}

export default NavSide