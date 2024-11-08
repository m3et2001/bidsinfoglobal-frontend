import React, { Component, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Button } from "./common/Button";

export default function SubscribeComponent({ data, handlePlan, submit_loading, success }) {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(
                (category) => category.value !== e.value
            );

        setSelectedCategories(_selectedCategories);
    };

    return (

        <div className="row">
            {
                success ?
                    <div className="alert alert-success">
                        {success.message}
                    </div>
                    :
                    null
            }
            {
                data.map(function (val, key) {
                    return (
                        <div
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            key={key}
                        >
                            <div className="box" >
                                <h3>{val?.title}</h3>
                                {/* {
                                    val.amount > 0
                                        ?
                                        <h4>
                                            <sup>USD</sup>{val.amount} <span> / {val.validity_days} month</span>
                                        </h4>
                                        :
                                        null
                                } */}

                                {
                                    val.plan_name === "CUSTOMISE_PACKAGE"
                                        ?
                                        <ul className="checboixpackage">
                                            {
                                                val?.access && val?.access?.map(function (dd, key) {
                                                    return (
                                                        <li
                                                            key={key}
                                                            className="flex align-items-center"
                                                        >
                                                            <Checkbox
                                                                inputId={key}
                                                                name="category"
                                                                value={dd}
                                                                onChange={onCategoryChange}
                                                                checked={selectedCategories.some(
                                                                    (item) => item === dd
                                                                )}
                                                            />
                                                            <label htmlFor={key} className="ml-2">
                                                                {dd}
                                                            </label>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        :
                                        <ul>
                                            {
                                                val?.access?.map(function (dd, key) {
                                                    return (
                                                        <li key={key}>{dd}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                }

                                <div className="btn-wrap">
                                    <Button value={"Choose Plan"} loading={submit_loading} className="btn-buy" onClick={() => handlePlan({ plan_id: val.plan_id, categories: selectedCategories })} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }



            {/* <div
                className="col-lg-4 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div className="box">
                    <h3>Customise Package </h3>
                    <h4>
                        <sup>USD </sup>199<span> / month</span>
                    </h4>
                    <ul className="checboixpackage">
                        {categories.map((category) => {
                            return (
                                <li
                                    key={category.key}
                                    className="flex align-items-center"
                                >
                                    <Checkbox
                                        inputId={category.key}
                                        name="category"
                                        value={category}
                                        onChange={onCategoryChange}
                                        checked={selectedCategories.some(
                                            (item) => item.key === category.key
                                        )}
                                    />
                                    <label htmlFor={category.key} className="ml-2">
                                        {category.name}
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="btn-wrap">
                        <a href="#" className="btn-buy">
                            Choose Plan
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
