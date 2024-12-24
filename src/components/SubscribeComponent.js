import React, { Component, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Button } from "./common/Button";
import { isAuth } from "../helpers/cookies";
import { Dialog } from "primereact/dialog";
import CallToActionRegisterComponent from "./CallToActionRegisterComponent";

export default function SubscribeComponent({
  data,
  handlePlan,
  submit_loading,
  success,
}) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const openDialog = () => setVisible(true);
  const closeDialog = () => setVisible(false);
  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.value !== e.value
      );

    setSelectedCategories(_selectedCategories);
  };
  const handlePlanSelect = (key, val, selectedCategories) => {
    if (isAuth()) {
      setSubmitLoading(key);
      handlePlan({
        plan_id: val.plan_id,
        categories: selectedCategories,
        formData: formData,
      });
    } else {
      openDialog();
    }
  };
  const selectTagStyle = {
    fontSize: "14px",
    paddingBottom: "5px",
    height: "34px",
    width: "100%",
    border: "1px solid #dee2e6",
    padding: ".375rem .75rem",
    borderRadius: ".375rem",
  };
  const [formData, setFormData] = useState({
    dataType: "XML",
    dataDeliveryType: "API",
    dataCategory: "Multi Industry",
    emailAlerts: 1,
    userId: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can send this data to an API or process it further.
  };

  return (
    <div className="row justify-content-center">
      {success ? (
        <div className="alert alert-success">{success.message}</div>
      ) : null}
      {data.map(function (val, key) {
        return (
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
            key={key}
          >
            <div className="box">
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

              {val.plan_name === "CUSTOMISE_PACKAGE" ? (
                <ul className="checboixpackage">
                  {val?.access &&
                    val?.access?.map(function (dd, key) {
                      return (
                        <li key={key} className="flex align-items-center">
                          <label htmlFor={key} className="ml-2">
                            {dd}
                          </label>
                        </li>
                      );
                    })}
                  <li>
                    <div className="input-container form-group">
                      <label
                        htmlFor="dataType"
                        style={{ fontSize: "14px", paddingBottom: "5px" }}
                      >
                        Data Type
                      </label>
                      <select
                        id="dataType"
                        name="dataType"
                        style={selectTagStyle}
                        value={formData.dataType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          -- Select an option --
                        </option>
                        <option value="XML">XML</option>
                        <option value="Newsletter">Newsletter</option>
                        <option value="JSON">JSON</option>
                        <option value="CSV">CSV</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="input-container form-group">
                      <label
                        htmlFor="dataDeliveryType"
                        style={{ fontSize: "14px", paddingBottom: "5px" }}
                      >
                        Data Delivery Type
                      </label>
                      <select
                        id="dataDeliveryType"
                        name="dataDeliveryType"
                        style={selectTagStyle}
                        value={formData.dataDeliveryType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          -- Select an option --
                        </option>
                        <option value="API">API</option>
                        <option value="Micro-site">Micro-site</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="input-container form-group">
                      <label
                        htmlFor="dataCategory"
                        style={{ fontSize: "14px", paddingBottom: "5px" }}
                      >
                        Data Category
                      </label>
                      <select
                        id="dataCategory"
                        name="dataCategory"
                        style={selectTagStyle}
                        value={formData.dataCategory}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          -- Select an option --
                        </option>
                        <option value="Multi Industry">Multi Industry</option>
                        <option value="Bulk data">Bulk data</option>
                        <option value=" Republishing rights">
                          Republishing rights
                        </option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="input-container form-group">
                      <label
                        htmlFor="emailAlerts"
                        style={{ fontSize: "14px", paddingBottom: "5px" }}
                      >
                        No. Email Alerts
                      </label>
                      <input
                        id="emailAlerts"
                        name="emailAlerts"
                        type="number"
                        placeholder="Enter no. email alerts"
                        className="form-control"
                        style={{ fontSize: "14px", paddingBottom: "5px" }}
                        value={formData.emailAlerts}
                        onChange={handleChange}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="input-container form-group">
                      <label
                        htmlFor="userId"
                        style={{ fontSize: "14px", paddingBottom: "5px" }}
                      >
                        No. User Id
                      </label>
                      <input
                        id="userId"
                        name="userId"
                        type="number"
                        placeholder="Enter no. user id"
                        className="form-control"
                        style={{ fontSize: "14px", paddingBottom: "5px" }}
                        value={formData.userId}
                        onChange={handleChange}
                      />
                    </div>
                  </li>
                </ul>
              ) : (
                <ul>
                  {val?.access?.map(function (dd, key) {
                    return <li key={key}>{dd}</li>;
                  })}
                </ul>
              )}

              <div className="btn-wrap">
                <Button
                  value={"Choose Plan"}
                  loading={submit_loading && submitLoading === key}
                  className="btn-buy"
                  onClick={() => handlePlanSelect(key, val, selectedCategories)}
                />
              </div>
            </div>
          </div>
        );
      })}
      <Dialog
        className="ModalMaindiwo "
        header={"Join Us Today for Exclusive Benefits!"}
        visible={visible}
        style={{ maxWidth: "80vw", textAlign: "left" }}
        onHide={closeDialog}
      >
        <CallToActionRegisterComponent closeDialog={closeDialog} />
      </Dialog>

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
