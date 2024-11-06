"use client";

import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const RegistrationPage = () => {
  const initialValues = {
    firstName: "",
    email: "",
    lastName: "",
    institution: "",
    country: "",
    aboutParticipant: "",
    checkbox: false,
  };
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form values and update error state
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const {
      email,
      country,
      firstName,
      lastName,
      institution,
      aboutParticipant,
      checkbox,
    } = formValues;

    // Check if any field is empty
    if (
      email === "" ||
      country === "" ||
      firstName === "" ||
      lastName === "" ||
      institution === "" ||
      aboutParticipant === "" ||
      checkbox === false
    ) {
      toast.error("Please fill in all fields"); // Display error message
    } else {
      toast.success("Form submitted successfully!"); // Display success message
      setFormValues(initialValues);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "Your first name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Your last name is required!";
    }
    if (!values.country) {
      errors.country = "Your country's name is required!";
    }
    if (!values.aboutParticipant) {
      errors.team = "Your Team name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.institution) {
      errors.institution = "Name of institution is required";
    } else if (values.institution.length < 6) {
      errors.institution = "Full name of institution is required";
    }

    return errors;
  };

  return (
    <div className="w-full ">
      <Toaster />

      <div className=" lg:px-20 py-4">
        {" "}
        <div className="flex flex-col items-start justify-start px-2 md:px-16 pb-8 md:py-10 lg:py-16 w-full shadow-md  bg-white">
          <div className="w-full pt-5 md:pt-1 text-[28px] lg:text-4xl font-bold md:font-semibold pb-4 lg:pb-3 border-b-[1px] border-slate-300">
            <h1 className="text-red-500 leading-10">Get Involved in FLL</h1>
          </div>
          <p className="mt-3 text-gray-600">
            Fill out the form to submit your details.
          </p>
          <form
            action="form"
            onSubmit={handleSubmit}
            className="w-full md:w-3/4"
          >
            <div className="w-full">
              <div className="py-8 lg:py-10 space-y-2">
                <h2 className="text-xl font-medium"></h2>

                <div className="w-full flex flex-col md:flex-row items-start justify-start md:justify-between gap-3">
                  <div className="space-y-3 ">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">First name*</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formValues.firstName}
                        onChange={handleChange}
                        className="w-[20rem] md:w-80 text-[14px] pl-2 border-[1px] border-slate-300 rounded-md  py-1 outline-none"
                      />
                      <p className="text-sm text-red-600 pl-1 font-medium">
                        {formErrors.firstName}
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Last name*</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formValues.lastName}
                        onChange={handleChange}
                        className="w-[20rem] text-[14px] md:w-80   pl-2 border-[1px] border-slate-300 rounded-md py-1 outline-none"
                      />
                      <p className="text-sm text-red-600 pl-1 font-medium">
                        {formErrors.lastName}
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Email*</label>
                      <input
                        type="Email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="w-[20rem] text-[14px] md:w-80 outline-none   pl-2 border-[1px] border-slate-300 rounded-md py-1 placeholder:text-sm placeholder:pl-4"
                      />
                      <p className="text-sm text-red-600 pl-1 font-medium">
                        {formErrors.email}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Institution name*</label>
                      <input
                        type="text"
                        name="institution"
                        value={formValues.institution}
                        onChange={handleChange}
                        placeholder=""
                        className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80 text-[14px]  py-1 placeholder:text-sm placeholder:pl-4 outline-none"
                      />
                      <p className="text-sm text-red-600 pl-1 font-medium">
                        {formErrors.institution}
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Country*</label>
                      <input
                        type="text"
                        name="country"
                        value={formValues.country}
                        onChange={handleChange}
                        className=" pl-2 text-[14px] border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1 outline-none"
                      />
                      <p className="text-sm text-red-600 pl-1 font-medium">
                        {formErrors.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="aboutParticipant" className="sr-only">
                  About Participant
                </label>
                <textarea
                  id="aboutParticipant"
                  name="aboutParticipant"
                  rows="6"
                  required
                  value={formValues.aboutParticipant}
                  onChange={handleChange}
                  placeholder="Tell us a little about yourself and your interest in FLL"
                  className="appearance-none placeholder:text-[15px] rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder:text-gray-600  text-gray-900 rounded-b-md focus:outline-none focus:ring-[#0d2b42] focus:border-[#0d2b42] focus:z-10  text-[18px] sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-4 text-[14px] items-start mt-8">
              <h3 className="">
                FLL will use, process and store your personal data at all times
                in compliance with our Privacy Policy.
              </h3>
              <div
                className={`${
                  formValues.checkbox === false
                    ? " text-red-500 "
                    : "text-black"
                }  flex items-center justify-start`}
                // className="space-x-3 flex items-center justify-start"
              >
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={formValues.checkbox}
                  onChange={handleChange}
                  className="w-6"
                ></input>
                <p className="text-[10.3px] md:text-[14px]">
                  Yes, I accept the FLL Terms and Conditions.
                </p>
              </div>

              <button
                type="submit"
                className="px-8 py-3 text-sm cursor-pointer bg-green-900 text-white rounded-md hover:shadow-sm hover:scale-105 transition-all duration-500 ease-in-out hover:border-[1px] hover:border-green-900 hover:bg-transparent hover:text-green-900"
                disabled={loading}
              >
                {loading ? "Submitting..." : "REGISTER"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
