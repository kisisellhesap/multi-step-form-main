import React, { useContext, useEffect } from 'react'
import "./Summary.css"
import HeaderOfInfoComponents from '../GeneralComponents/HeaderOfInfoComponents/HeaderOfInfoComponents'
import MultiStepContext from '../../../../../contexts/MultiStepContext';
const Summary = ({ handlePlanOptionChange }) => {
    const { form, setForm } = useContext(MultiStepContext);

    const filteredData = form.addOns.filter(item => {
        return item.planCheck === true;
    })

    const currentPlanOption = form.selectPlan.activePlan.planOption;
    const planPricee = form.selectPlan.activePlan.planPrice;

    const newPlanOption = currentPlanOption === "Monthly" ? "Yearly" : "Monthly";


    let totalSum = () => {
        let totalOns = 0;
        let totalSum = 0;
        if (filteredData.length !== 0) {
            filteredData.map(item => {
                return totalOns = totalOns + item.planPrice;
            })
        }

        return totalSum = totalOns + planPricee;
    }
    let totalPrice = totalSum();

    useEffect(() => {

        totalSum();
    }, [form])




    return (
        <div className='infoComponent' id="summary">
            <HeaderOfInfoComponents name="Finishing up" shortInfo="Double-check everything looks OK before confirming." />


            <div className='baseOfInfoComponents' id="summary-base">

                <div className='finishFormHeader'>
                    <div className='finishFormPlansOption'>
                        <div className='finishFormNameDiv'>
                            <div className='finishFormNameDivInfo'>
                                <p className='finishFormPlanName'>{form.selectPlan.activePlan.planName}</p>
                                <p className='finishFormPlanOption'>({form.selectPlan.activePlan.planOption})</p>
                            </div>
                            <button className='finishFormPlanOptionChange' onClick={() => {
                                const currentPlanOption = form.selectPlan.activePlan.planOption;
                                const newPlanOption = currentPlanOption === "Monthly" ? "Yearly" : "Monthly";



                                setForm({
                                    ...form, startStep: 2,
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

                            }}>Change</button>
                        </div>
                        <p className='finishFormPlanPrice'>${form.selectPlan.activePlan.planPrice}/{form.selectPlan.activePlan.planOption === "Monthly" ? "mo" : "yr"}</p>
                    </div>
                    <div className='finishFormAddOns'>
                        {filteredData.map((item, index) => {
                            return <div key={index} className='finishFormAddOn'>
                                <p className='finishFormAddOnName'>{item.planName}</p>
                                <p className='finishFormAddOnPrice'>${item.planPrice}/{form.selectPlan.activePlan.planOption === "Monthly" ? "mo" : "yr"}</p>
                            </div>
                        })}

                    </div>
                </div>

                <div className='finishFormTotal'>
                    <p className='finishFormTotalName'>Total ({form.selectPlan.activePlan.planOption === "Monthly" ? "per month" : "per yearly"})</p>
                    <p className='finishFormTotalPrice'>+{totalPrice}/{form.selectPlan.activePlan.planOption === "Monthly" ? "mo" : "yr"}</p>
                </div>




            </div>
        </div>
    )
}

export default Summary