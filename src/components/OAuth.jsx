import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className='flex justify-center items-center bg-red-600 text-white w-full px-7 py-3 uppercase text-sm font-medium hover:bg-red-700 active:bg-red-800 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded '>
        <FcGoogle className='bg-white rounded-full mr-2' />
        Continue with Google
    </button>
  )
}