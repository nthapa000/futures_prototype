"use client";
import React, { useState } from "react";
import getConstants from "@/constants";
import { addUser } from "@/lib/utils";

const CollegePredictorPage = () => {
  const [selectedExam, setSelectedExam] = useState(null);

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };
  return (
    <div>
      <div className="w-full  my-8 p-14 rounded-lg shadow-md sm:p-8">
        <h1 className="text-xl font-bold mb-4 text-center sm:text-2xl">
          {getConstants().TITLE}
        </h1>
        <form action={addUser}>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              Select the examination
            </label>
            <select name="exam" id="exam" onChange={handleExamChange}>
              <option value={false}>Select the Exam</option>
              {getConstants().EXAM_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {selectedExam !== "neet" && (
            <>
              <div className="flex flex-col ">
                <label
                  htmlFor=""
                  className="font-medium m-3 md:text-xl tracking-wider text-center"
                >
                  Select the gender
                </label>
                <select name="gender" id="gender">
                  <option value={false}>Select your gender</option>
                  {getConstants().GENDER_OPTIONS.map((option) => (
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
                  Select your home state
                </label>
                <select name="homeState" id="homeState">
                  <option value={false}>Select your home state</option>
                  {getConstants().STATE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              Select the Category
            </label>
            <select name="category" id="exam">
              <option value={false}>Select your Category</option>
              {getConstants().CATEGORY_OPTIONS.map((option) => (
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
              Enter Category Rank
            </label>
            <input
              type="number"
              placeholder="number"
              name="categoryRank"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium m-3 md:text-xl tracking-wider text-center"
            >
              Select the Round Number
            </label>
            <select name="roundNo" id="exam">
              <option value={false}>Select the Round number</option>
              {getConstants().ROUND_NUMBER_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" class="bg-transparent mt-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollegePredictorPage;
