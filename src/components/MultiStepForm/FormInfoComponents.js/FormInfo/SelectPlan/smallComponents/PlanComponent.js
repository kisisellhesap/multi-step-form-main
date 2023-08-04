import React, { useContext } from 'react'
import "./PlanComponent.css"
import MultiStepContext from '../../../../../../contexts/MultiStepContext';



const PlanComponent = ({ planImg, planName, planPrice, onClick, className }) => {

    const { form } = useContext(MultiStepContext);


    return (
        <div className={className} onClick={onClick}>
            <img src={planImg} className='planImg' alt='' />

            <div className='planInfo'>
                <h3 className='planName'>{planName}</h3>
                <p className='planPrice'>${planPrice}/{form.selectPlan.activePlan.planOption === "Monthly" ? "mo" : "yr"}</p>

                {form.selectPlan.activePlan.planOption === "Yearly" && <span className='plansFree'>2 months free</span>}

            </div>

        </div >
    )
}

export default PlanComponent