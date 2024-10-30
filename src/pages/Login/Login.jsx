import React from 'react'
import logo from '../../assets/images/logo.jpg'

export default function Login() {
    return <>
        <div className="bg-gradient h-screen bg-cover bg-center flex justify-center items-center ">
            <div className="w-full flex flex-col items-center justify-center space-y-5 ">
                <div className='w-20 rounded-full overflow-hidden'>
                    <img className='w-full' src={logo} loading='lazy' alt="IEEE helwan logo" />
                </div>
                <div className="w-4/5 lg:w-1/4 p-5 backdrop-blur-md bg-[#0000001c] shadow-lg rounded-lg">
                    <div className="text-center text-white font-bold tracking-wider text-2xl mb-5">LOGIN</div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-white ">Email address</label>
                        <input type="email" id="email" class="bg-gray-50 bg-opacity-25 border  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none " placeholder="Shafek@gmail.com" required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-white ">Password</label>
                        <input type="password" id="password" class="bg-gray-50 bg-opacity-25 border  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="•••••••••" required />
                    </div>
                    <div className='w-fit m-auto'>
                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
