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