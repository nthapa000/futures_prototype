"use server"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export async function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const addUser = async (formData)=>{

  console.log(formData);
  const {exam,category,categoryRank,roundNo,gender,homeState}= Object.fromEntries(formData);
}


export const submitForm = async (formData)=>{

  console.log(formData);
  // const {}= Object.fromEntries(formData);
}

// Whenever we want to make a operation we need to connect to Database and it will create a new connection everytime instead we will first check whether if we are connected or not , if we are not connected then only we will be connecting to DB else using the existing connection.
