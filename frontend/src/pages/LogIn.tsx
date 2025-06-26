import React , {useState }from 'react'
import{ Link} from 'react-router-dom'

const LogIn: React.FC = () => {
  const[username, setUsername] = useState('');
  const[password,setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

};
  return (
      <main className='bg-purple-200 bg-gradient-to-br from-pink-400 via-purple-400 to-violet-400 md:bg-none flex justify-center items-center h-screen'>
        <section className='flex flex-col justify-start items-center gap-16 p-6 h-3/4 md:w-1/3 rounded-3xl 
                        bg-gradient-to-br from-pink-400 via-purple-400 to-violet-400
                        text-white md:border-2 border-gray-400'>
          <div className='flex flex-col items-center gap-10'>
            <h1 className='font-bold text-4xl text-white'>Welcome Back!</h1>
            <h2 className='font-bold text-2xl text-white underline'>LOGIN</h2>
          </div>
          <form className='flex flex-col gap-16 w-full ' onSubmit={ handleSubmit }>
          <div className='flex flex-row gap-8 w-full'>
            <label htmlFor="username" className='flex justify-center items-center'>Username</label>
            <input      
              id="username"      
              name="username"
              value={username}
              onChange={e =>setUsername(e.target.value)}
              type= 'text'
              placeholder='Enter your Username'
              autoComplete="username"
              required
              className='border border-gray-500 w-full p-2 rounded-md text-orange-950 placeholder-white focus:border-violet-800 focus:ring-1 focus:ring-violet-800 focus:outline-none '
            />
          </div>
          <div className='flex flex-row gap-9 w-full'>
            <label className='flex justify-center items-center' htmlFor="password">Password</label>
            <div className='relative w-full'>
            <input
              id="password"
              value={password}
              name='password'
              onChange={e =>setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your Password'
              autoComplete="current-password"
              required
              className='border border-gray-500 w-full p-2 rounded-md text-orange-950 placeholder-white focus:border-violet-800 focus:ring-1 focus:ring-violet-800 focus:outline-none'
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-white underline focus:outline-none'
              >{showPassword ? 'Hide' : 'Show'}</button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-purple-600 rounded-2xl py-2 px-6 flex font-bold justify-center items-center text-white hover:bg-purple-700 transition cursor-pointer w-1/3 mx-auto"
            >Log In</button>
          </form>
          <div className='flex flex-row gap-1 text-xs'>
            <span>New Customer?</span>
            <p><Link to="/signup" className='text-blue-900 underline' >Click Here</Link></p>
          </div>
        </section>
      </main>
  )
}

export default LogIn
