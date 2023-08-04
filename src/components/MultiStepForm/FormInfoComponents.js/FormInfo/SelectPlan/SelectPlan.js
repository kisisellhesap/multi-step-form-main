import React, { useContext, useEffect } from 'react'
import "./SelectPlan.css"
import HeaderOfInfoComponents from "../GeneralComponents/HeaderOfInfoComponents/HeaderOfInfoComponents"
import PlanComponent from './smallComponents/PlanComponent'
import MultiStepContext from '../../../../../contexts/MultiStepContext'

const SelectPlan = () => {

    const { form, setForm, formError } = useContext(MultiStepContext);

    return (
        <div className='infoComponent' id="selectPlan">
            <HeaderOfInfoComponents name="Select your plan" shortInfo="You have the option of montly or yearly billing." />


            <div className='baseOfInfoComponents' id="selectPlan-base">

                <div className='planComponentPlans'>

                    {form.selectPlan.data.map((item, index) => {
                        return <PlanComponent className={form.selectPlan.activePlan.planName === item.planName ? "planComponent active" : "planComponent"} key={index} planImg={item.planImg} planName={item.planName} planPrice={item.planPrice} onClick={() => {

                            setForm({ ...form, selectPlan: { ...form.selectPlan, activePlan: { ...form.selectPlan.activePlan, planName: item.planName, planPrice: item.planPrice } } })
                        }

                        } />
                    })}

                </div>

                <div className='planComponentToggle'>
                    <p className={form.selectPlan.activePlan.planOption === "Monthly" ? "monthlyPlan active" : "monthlyPlan"}>Monthly</p>
                    <div className={form.selectPlan.activePlan.planOption === "Monthly" ? "toggleDiv monthly" : "toggleDiv yearly"} onClick={
                        () => {
                            const currentPlanOption = form.selectPlan.activePlan.planOption;
                            const newPlanOption = currentPlanOption === "Monthly" ? "Yearly" : "Monthly";



                            setForm({
                                ...form,
                                selectPlan: {
                                    ...form.selectPlan,
                                    activePlan: {
                                        ...form.selectPlan.activePlan,
                                        planOption: newPlanOption,
                                        planPrice: "",
                                        planName: ""
                                    },
                                },
                            });
                        }
                    } >
                        <p className='circle'></p>
                    </div>
                    <p className={form.selectPlan.activePlan.planOption !== "Monthly" ? "yearlyPlan active" : "yearlyPlan"}>Yearly</p>
                </div>

                {form.selectPlan.activePlan.planName === "" && <p className={formError.selectPlanError.classError}>{formError.selectPlanError.errorMessage}</p>}

            </div>
        </div>
    )
}

export default SelectPlan