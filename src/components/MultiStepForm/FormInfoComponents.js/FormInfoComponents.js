import React, { useContext } from 'react';
import "./FormInfoComponents.css"
import FormInfo from "./FormInfo/FormInfo"
import FormController from "./FormController/FormController"
import MultiStepContext from '../../../contexts/MultiStepContext';



const FormInfoComponents = ({ validationName, validationEmail, validationPhoneNumber }) => {

    const { form, formError, setFormError } = useContext(MultiStepContext);




    return (
        <div className={form.startStep === 5 ? "formInfoComponents completedForm" : "formInfoComponents"}>
            <div className='formInfoComponentsWrapper'>

                <FormInfo />
                <FormController validationName={validationName} validationEmail={validationEmail} validationPhoneNumber={validationPhoneNumber} />


            </div>
        </div>
    )
}

export default FormInfoComponents