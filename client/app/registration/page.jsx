"use client";
import React, { useState, useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    team: "",
    teamMember1: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      institution: "",
    },
    teamMember2: { firstName: "", lastName: "", email: "" },
    teamMember3: { firstName: "", lastName: "", email: "" },
    checkbox: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const [teamMember, field] = name.split(".");
    if (["teamMember1", "teamMember2", "teamMember3"].includes(teamMember)) {
      // Update specific team member fields
      setFormValues({
        ...formValues,
        [teamMember]: { ...formValues[teamMember], [field]: value },
      });
    } else {
      // General form fields
      setFormValues({
        ...formValues,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setLoading(true);

    try {
      const { team, teamMember1, teamMember2, teamMember3, checkbox } =
        formValues;

      const payload = {
        team,
        captain: teamMember1,
        termsAccepted: checkbox,
        // Only include optional team members if any field has a value
        ...(teamMember2.firstName || teamMember2.lastName || teamMember2.email
          ? { teamMember2 }
          : {}),
        ...(teamMember3.firstName || teamMember3.lastName || teamMember3.email
          ? { teamMember3 }
          : {}),
      };

      const res = await fetch(`/api/fll/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("Registration successful");
        setFormValues({
          team: "",
          teamMember1: {
            firstName: "",
            lastName: "",
            email: "",
            institution: "",
            country: "",
          },
          teamMember2: { firstName: "", lastName: "", email: "" },
          teamMember3: { firstName: "", lastName: "", email: "" },
          checkbox: false,
        });
        setFormErrors({});
      } else {
        throw new Error("Registration failed");
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.team) errors.team = "Team name is required";
    if (!values.teamMember1.firstName)
      errors.firstName = "First name is required";
    if (!values.teamMember1.lastName) errors.lastName = "Last name is required";
    if (!values.teamMember1.email) errors.email = "Email is required";
    if (!values.teamMember1.institution)
      errors.institution = "Institution name is required";
    if (!values.teamMember1.country) errors.country = "Country is required";
    if (!values.checkbox)
      errors.checkbox = "Terms and conditions must be accepted";
    return errors;
  };

  return (
    <div className="w-full ">
      <Toaster />

      <div className=" lg:px-20 py-4">
        {" "}
        <div className="flex flex-col items-start justify-start px-2 md:px-16 pb-8 md:py-10 lg:py-16 w-full shadow-md  bg-white">
          <div className="w-full pt-5 md:pt-1 text-[28px] lg:text-3xl font-bold md:font-semibold pb-6 lg:pb-8 border-b-[1px] border-slate-300">
            <h1 className="text-green-900 leading-10">
              FIRST LEGO LEAGUE REGISTRATION
            </h1>
          </div>
          <form
            action="for"
            onSubmit={handleSubmit}
            method="POST"
            className="w-full md:w-3/4"
          >
            <div className="pt-6 space-y-2">
              <label htmlFor="">Team name*</label>
              <input
                type="text"
                id="team"
                name="team"
                value={formValues.team}
                onChange={handleChange}
                className="w-full md:px-2 py-1 border-[1px] border-slate-300 outline-none"
              />

              <p className="text-sm text-red-600 pl-1 font-medium">
                {formErrors.team}
              </p>
            </div>

            <div className="w-full">
              <div className="py-14 lg:py-16 space-y-6">
                <h2 className="text-xl font-medium">Team Member 1 (Captain)</h2>

                <div className="w-full flex flex-col md:flex-row items-start justify-start md:justify-between gap-3">
                  <div className="space-y-3 ">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">First name*</label>
                      <input
                        type="text"
                        className="w-[20rem] md:w-80 text-[14px] pl-2 border-[1px] border-slate-300 rounded-md  py-1 outline-none"
                        name="teamMember1.firstName"
                        value={formValues.teamMember1.firstName}
                        onChange={handleChange}
                      />
                      <p className="text-sm text-red-600 pl-1 font-medium">
                        {formErrors.firstName}
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Last name*</label>
                      <input
                        name="teamMember1.lastName"
                        value={formValues.teamMember1.lastName}
                        onChange={handleChange}
                        type="text"
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
                        name="teamMember1.email"
                        value={formValues.teamMember1.email}
                        onChange={handleChange}
                        placeholder="only university/college emails accepted"
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
                        name="teamMember1.institution"
                        value={formValues.teamMember1.institution}
                        onChange={handleChange}
                        placeholder="only university/college institutions accepted"
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
                        name="teamMember1.country"
                        value={formValues.teamMember1.country}
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

              <div className="py-4 space-y-6">
                <h2 className="text-xl font-medium">
                  Team Member 2 (optional)
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-start md:justify-between gap-3">
                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">First name*</label>
                      <input
                        type="text"
                        name="teamMember2.firstName"
                        value={formValues.teamMember2.firstName}
                        onChange={handleChange}
                        className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1 outline-none"
                      />
                    </div>

                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Last name*</label>
                      <input
                        type="text"
                        name="teamMember2.lastName"
                        value={formValues.teamMember2.lastName}
                        onChange={handleChange}
                        className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Email*</label>
                      <input
                        type="Email"
                        name="teamMember2.email"
                        value={formValues.teamMember2.email}
                        onChange={handleChange}
                        placeholder="only university/college emails accepted"
                        className="outline-none pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1 placeholder:text-sm placeholder:pl-4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-6 lg:py-10 space-y-6">
                <h2 className="text-xl font-medium">
                  Team Member 3 (optional)
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-start md:justify-between gap-3">
                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">First name*</label>
                      <input
                        type="text"
                        name="teamMember3.firstName"
                        value={formValues.teamMember3.firstName}
                        onChange={handleChange}
                        className="outline-none pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1"
                      />
                    </div>

                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Last name*</label>
                      <input
                        type="text"
                        name="teamMember3.lastName"
                        value={formValues.teamMember3.lastName}
                        onChange={handleChange}
                        className="hover:outline-none outline-none pl-1 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80 py-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <label htmlFor="">Email*</label>
                      <input
                        type="Email"
                        name="teamMember3.email"
                        value={formValues.teamMember3.email}
                        onChange={handleChange}
                        placeholder="only university/college emails accepted"
                        className="outline-none pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80  py-1 placeholder:text-sm placeholder:pl-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-[14px] items-start">
              <h3 className="">
                FLL will use, process and store your personal data at all times
                in compliance with our Privacy Policy.
              </h3>
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={formValues.checkbox}
                  onChange={handleChange}
                  className="w-6"
                />
                <p className="text-[10.3px] md:text-[14px] pl-2">
                  Yes, I accept the FLL Terms and Conditions.
                </p>
              </div>
              {formErrors.checkbox && (
                <p className="text-sm text-red-600 font-medium">
                  {formErrors.checkbox}
                </p>
              )}

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

export default Registration;
