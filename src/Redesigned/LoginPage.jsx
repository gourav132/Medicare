import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion';

export default function LoginPage() {
  
  const { register, handleSubmit, formState: {errors} } = useForm();

  const inputs = (label, name, helperText, type="text") => {
    return (
      <div className='mt-2'>
        <label htmlFor="name" className="text-sm font-semibold text-gray-400">{label}</label>
        <input
            type={name} 
            id={name}
            // name={name}
            {...register(name, {required: "This is a required field"})}
            className={errors[name]?.message ?
              "mt-1 rounded-md shadow-sm pl-2 py-3 focus:outline-none focus:ring-opacity-1 text-gray-500 w-full ring-2 ring-red-500" 
              : "mt-1 rounded-md shadow-sm pl-2 py-3 focus:outline-none hover:ring-2 hover:ring-purple-300 bg-gray-200 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-1 text-gray-500 w-full"}

        />
            <p className='text-xs mt-1 text-red-500 font-bold'>{errors[name]?.message}</p>
        {type==="password" ? 
          <div className='w-full flex mt-2 item-center'>
            <p className='text-xs text-gray-400 w-full'>{helperText}</p> 
            <div className='w-full text-right'>
              <Link to="" className='text-sm text-gray-300 font-semibold'>Forgot Password?</Link> 
            </div>
          </div>
          : <p className='mt-1 text-xs text-gray-400'>{helperText}</p>}

      </div>
    )
  }

  return (
    <div 
      className='w-full flex justify-center h-screen' 
      style={{backgroundColor: "#181818"}}
    >
      <motion.div 
        initial = {{ opacity: 0 }} 
        animate = {{ opacity: 1 }} 
        exit = {{ opacity: 0 }} 
        transition={{ delay:.2 }} 
        className='
          md:bg-black md:px-10 md:py-10 md:m-20 md:w-4/12 
          mt-20 w-10/12 rounded-md h-min md:border md:border-purple-400'
      >

        <h1 className="text-2xl font-bold text-white">Medicare</h1>
        <p className='font-medium text-gray-500 text-sm'>Need your prescriptions or reports? Log in now.</p>

        <motion.form 
          initial = {{ opacity: 0 }} 
          animate = {{ opacity: 1 }} 
          exit = {{ opacity: 0 }} 
          transition={{ delay:.5 }} 
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className='mt-4'
        >

          {inputs("Email Address", "email", "", "email")}
          {inputs("Password", "password", "", "password")}

          <button type='submit' className='px-4 py-2 mt-4 bg-blue-400 hover:bg-blue-500 w-full rounded-md font-semibold text-white'>Login</button>
          <p className='mt-4 text-sm text-gray-400'>Not registered yet?<Link to="" className='text-gray-300 font-semibold'> Register here.</Link></p>
        
        </motion.form>
      </motion.div>
    </div>
  )
}
