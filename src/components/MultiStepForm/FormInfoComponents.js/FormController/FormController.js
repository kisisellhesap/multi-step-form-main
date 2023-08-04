import React, { useContext, useEffect } from 'react'
import "./FormController.css"
import MultiStepContext from '../../../../contexts/MultiStepContext';

const FormController = ({ validationName, validationEmail, validationPhoneNumber }) => {

    const { form, setForm, formError, setFormError } = useContext(MultiStepContext);


    useEffect(() => {
        console.log(form.startStep);
    }, [form])


    const stepIncrement1 = () => {
        const nameValidation = validationName();
        const emailValidation = validationEmail();
        const phoneNumberValidation = validationPhoneNumber();

        if ((nameValidation && emailValidation && phoneNumberValidation)) {
            setForm({ ...form, startStep: form.startStep + 1 })
        }
    }

    const stepIncrement2 = () => {
        if (form.selectPlan.activePlan.planName !== "") {
            setForm({ ...form, startStep: form.startStep + 1 })
            setFormError({ ...formError, selectPlanError: { ...formError.selectPlan, classError: "", errorMessage: "" } })
        }
        else {
            setFormError({ ...formError, selectPlanError: { ...formError.selectPlan, classError: "warning", errorMessage: "Please choose a plan !" } })
        }
    }
    const stepIncrement3 = () => {
        setForm({ ...form, startStep: form.startStep + 1 })
    }
    const stepIncrement4 = () => {
        setForm({ ...form, startStep: form.startStep + 1 })
    }



    const incrementStep = () => {

        if (form.startStep === form.lastStep) {
            setForm({ ...form, startStep: 1 })
        }

        else if (form.startStep === 1) {
            stepIncrement1();
        }
        else if (form.startStep === 2) {
            stepIncrement2();
        }
        else if (form.startStep === 3) {
            stepIncrement3();
        }
        else if (form.startStep === 4) {
            stepIncrement4();
        }

    }

    const decrementStep = () => {
        setForm({ ...form, startStep: form.startStep - 1 })

        if (form.startStep === 1) {
            setForm({ ...form, startStep: form.lastStep })
        }
    }

    return (



        <div className={form.startStep === form.lastStep ? "formController controllerDisable" : "formController"}>
            {form.startStep !== 1 && <button className='btn goBackBtn' onClick={decrementStep}>Go Back</button>}
            {form.startStep >= 4 ? <button className='btn confirmBtn' onClick={incrementStep} >Confirm</button> : <button className='btn nextBtn' onClick={incrementStep}>Next Step</button>}
        </div>
    )
}

export default FormController