"use client";
import React, { useState } from "react";

const Involve = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    school: "",
    aboutParticipant: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to a backend or API here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg rounded-3xl  p-5 shadow-xl  text-[28px] lg:text-3xl font-bold md:font-semibold border-b-[1px] border-slate-100">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Get Involved in FLL
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Fill out the form to submit your details.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder:bg-transparent placeholder:text-[16px] text-[18px] text-[#0d2b42] focus:outline-none focus:ring-[#0d2b42] focus:border-[#0d2b42] focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder:bg-transparent placeholder:text-[16px] text-[18px] text-[#0d2b42] focus:outline-none focus:ring-[#0d2b42] focus:border-[#0d2b42] focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="School" className="sr-only">
                Country
              </label>
              <input
                id="school"
                name="school"
                type="text"
                required
                value={formData.school}
                onChange={handleChange}
                placeholder="School"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder:bg-transparent placeholder:text-[16px] text-[18px] text-[#0d2b42] focus:outline-none focus:ring-[#0d2b42] focus:border-[#0d2b42] focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="aboutParticipant" className="sr-only">
                About Participant
              </label>
              <textarea
                id="aboutParticipant"
                name="aboutParticipant"
                rows="4"
                required
                value={formData.aboutParticipant}
                onChange={handleChange}
                placeholder="Tell us a little about yourself and your interest in FLL"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-[#0d2b42] text-gray-900 rounded-b-md focus:outline-none focus:ring-[#0d2b42] focus:border-[#0d2b42] focus:z-10 placeholder:text-[16px] text-[18px] sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full transition-all duration-700 ease-in-out flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0d2b42] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Involve;
