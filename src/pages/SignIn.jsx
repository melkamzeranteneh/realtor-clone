import {useState} from 'react'

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const {email, password} = formData;
  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>SignIn</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb12 md:mb-6'>
          <img className='w-full rounded-2xl' src="https://plus.unsplash.com/premium_photo-1678208873704-29c8259777eb?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="keys"></img>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input className='w-full' type="email" placeholder='Email Address' id="email" value={email} onChange={onChange} />
          </form>
        </div>
      </div>
    </section>
  )
}
