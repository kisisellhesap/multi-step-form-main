import React, { useContext } from 'react';
import "./FormInfo.css"
import MultiStepContext from '../../../../contexts/MultiStepContext';
import Personalnfo from './Personalnfo/Personalnfo'
import SelectPlan from './SelectPlan/SelectPlan'
import AddOns from './AddOns/AddOns'
import Summary from './Summary/Summary'
import ThanksComponent from './ThanksComponent/ThanksComponent';



const FormInfo = () => {

    const { form } = useContext(MultiStepContext);


    return (
        <div className='formInfo'>

            {form.startStep === 1 && <Personalnfo />}
            {form.startStep === 2 && <SelectPlan />}
            {form.startStep === 3 && <AddOns />}
            {form.startStep === 4 && <Summary />}
            {form.startStep === 5 && <ThanksComponent />}

        </div>
    )
}

export default FormInfo