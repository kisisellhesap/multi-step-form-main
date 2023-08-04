import React, { useContext } from 'react'
import "./AddOnsOptionComponent.css"
import MultiStepContext from '../../../../../../contexts/MultiStepContext';
const AddOnsOptionComponent = ({ className, planName, planInfo, planPrice, planCheck, onClick }) => {

    const { form } = useContext(MultiStepContext);
    return (
        <div className={className} onClick={onClick}>
            <input className='addOnsOptionPlanCheck' type='checkbox' checked={planCheck ? "checked" : ""} onChange={() => { }} />
            <div className='addOnsOptionHeader'>
                <p className='addOptionPlanName'>{planName}</p>
                <p className='addOptionPlanInfo'>{planInfo}</p>
            </div>

            <span className='addOnsOptionPlanPrice'>${planPrice}/{form.selectPlan.activePlan.planOption === "Montly" ? "mo" : "yr"}</span>
        </div>
    )
}

export default AddOnsOptionComponent