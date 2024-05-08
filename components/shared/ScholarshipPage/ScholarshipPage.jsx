"use client";
import React, { useState } from "react";
import getConstants from "@/constants";
import { submitForm } from "@/lib/utils";

const ScholarshipPage = () => {
  const [selectedExam, setSelectedExam] = useState(null);

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };
  const categoryOptions = getConstants().SCHOLARSHIP_CATEGORY_OPTIONS || [];

  const genderOptions = getConstants().SCHOLARSHIP_GENDER_OPTIONS || [];
  return (
    <div>
      <div className="w-full  my-10 p-12 rounded-lg shadow-md sm:p-8">
        <h1 className="text-xl font-bold mb-4 text-center sm:text-2xl">
        {getConstants().SCHOLARSHIP_TITLE}
        </h1>
        <form action={submitForm}>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              {getConstants().STATUS_LABEL}
            </label>
            <select name="scholarshipStatus" id="scholarshipStatus" >
              <option value={false}>Select..</option>
              {getConstants().SCHOLARSHIP_STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              {getConstants().GRADE_LABEL}
            </label>
            <select name="grade" id="grade" >
              <option value={false}>Select..</option>
              {getConstants().GRADE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              {getConstants().STREAM_LABEL}
            </label>
            <select name="stream" id="stream" >
              <option value={false}>Select..</option>
              {getConstants().STREAM_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              {getConstants().CATEGORY_LABEL}
            </label>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getConstants().CATEGORY_HELP_TEXT}
            </label>
            <select name="category" id="category" >
              <option value={false}>Select..</option>
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              {getConstants().FAMILY_INCOME_LABEL}
            </label>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getConstants().FAMILY_INCOME_HELP_TEXT}
            </label>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getConstants().FAMILY_INCOME_HELP_TEXT_TWO}
            </label>
            <select name="income" id="income" >
              <option value={false}>Select..</option>
              {getConstants().FAMILY_INCOME_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              {getConstants().GENDER_LABEL}
            </label>
            <select name="gender" id="gender" >
              <option value={false}>Select..</option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              {getConstants().STATE_LABEL}
            </label>
            <select name="state" id="state" >
              <option value={false}>Select..</option>
              {getConstants().STATE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              {getConstants().CITY_LABEL}
            </label>
            <select name="city" id="city" >
              <option value={false}>Select..</option>
              {getConstants().CITY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center">
          <button type="submit" class="bg-transparent mt-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
            Submit
          </button>
          </div >
        </form>
      </div>
    </div>
  );
};

export default ScholarshipPage;
