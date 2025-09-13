import {useState} from 'react'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import OAuth from '../components/OAuth';

export default function SignUp () {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({name: "", email: "", password: "" });
  const {name, email, password} = formData;
  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>SignUp</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl'>
        <div className='md:w-[67%] lg:w-[50%] mb12 md:mb-6'>
          <img className='w-full rounded-2xl' src="https://plus.unsplash.com/premium_photo-1678208873704-29c8259777eb?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="keys" />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' 
              type="text" 
              placeholder='Name' 
              id="name" 
              value={name} 
              onChange={onChange}/>
            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' 
              type="email" 
              placeholder='Email Address' 
              id="email" 
              value={email} 
              onChange={onChange}/>
            <div className='relative'>
              <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' 
                type={showPassword ? "text" : "password"} 
                placeholder='Password' 
                id="password" 
                value={password} 
                onChange={onChange}/>
              {showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPassword((prev) => !prev)} /> : <AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPassword((prev) => !prev)} />}
            </div>

            <div className='flex 
            justify-between 
            whitespace-nowrap
            text-sm 
            sm:-lg'>
              <p>
                Don't have an account?
                <Link to="/SignIn" className='text-red-500 hover:text-red-700 transition duration-200 ease-in-out cursor-pointer'>Sign In</Link>
              </p>
              <p>
                <Link to="/ForgotPassword" className='text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out cursor-pointer'>Forgot Password?</Link>
              </p>
            </div>
            <button className='w-full bg-blue-500 text-white py-3 px-7 rounded shadow-md transition duration-200 ease-in-out hover:bg-blue-600' type='submit'>
              Sign In
            </button>
            <div className='
            flex 
            items-center 
            my-4 
            before:border-t 
            before:flex-1 
            before:border-gray-300 
            after:border-t 
            after:flex-1 
            after:border-gray-300'>
              <p>OR</p>
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  )
}
