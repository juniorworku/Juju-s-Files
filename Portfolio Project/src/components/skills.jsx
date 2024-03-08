import React from 'react'

export default function Skills() {
  return (

    <div class="flex-col min-h-screen h-full w-full bg-white p-1">
  
        <div class="flex space-x-10 bg-gray-100 p-2 w-full justify-center">
            <button class="min-w-auto w-32 h-10 bg-red-300 p-2 rounded-xl hover:bg-red-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold">
            Danger
            </button>
            
            <button class="min-w-auto w-32 h-10 bg-blue-300 p-2 rounded-xl hover:bg-blue-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold">
            Info
            </button>
            
            <button class="min-w-auto w-32 h-10 bg-green-300 p-2 rounded-xl hover:bg-green-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold">
            OK
            </button>
        </div>

        <div class="flex bg-gray-100 p-2 w-full justify-center">
            <button class="min-w-auto w-32 h-10 bg-red-300 p-2 rounded-l-xl hover:bg-red-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold">
                1
            </button>
            <button class="min-w-auto w-32 h-10 bg-blue-300 p-2 rounded-none hover:bg-blue-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold">
                2
            </button>
            <button class="min-w-auto w-32 h-10 bg-green-300 p-2 rounded-r-xl hover:bg-green-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold">
                2
            </button>
        </div>
        <div class="flex bg-gray-100 p-2 w-full justify-center space-x-10">
            <button class="min-w-auto w-32 h-10 bg-red-300 p-2 rounded-t-xl hover:bg-red-500  text-white font-semibold transition-transform hover:-translate-y-2 ease-in-out">
                Just
            </button>
            <button class="min-w-auto w-32 h-10 bg-blue-300 p-2 rounded-t-xl hover:bg-blue-500 text-white font-semibold transition-transform hover:-translate-y-2 ease-in-out">
                A
            </button>
            <button class="min-w-auto w-32 h-10 bg-green-300 p-2 rounded-t-xl hover:bg-green-500 text-white font-semibold transition-transform hover:-translate-y-2 ease-in-out">
                Maul
            </button>
        </div>
        <div class="flex bg-gray-100 p-2 w-full justify-center space-x-10">
            <button class="min-w-auto w-32 h-10 bg-red-300 p-2 rounded-b-xl hover:bg-red-500  text-white font-semibold transition-transform hover:translate-y-2 ease-in-out">
            A
            </button>
            <button class="min-w-auto w-32 h-10 bg-blue-300 p-2 rounded-b-xl hover:bg-blue-500 text-white font-semibold transition-transform hover:translate-y-2 ease-in-out">
            Reversed
            </button>
            <button class="min-w-auto w-32 h-10 bg-green-300 p-2 rounded-b-xl hover:bg-green-500 text-white font-semibold transition-transform hover:translate-y-2 ease-in-out">
            Maul
            </button>
        </div>
        <div class="flex bg-gray-100 p-2 w-full justify-center space-x-0">
            <button class="min-w-auto w-32 h-10 bg-red-300 p-2 rounded-l-full hover:bg-red-500  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
            I
            </button>
            <button class="min-w-auto w-32 h-10 bg-blue-300 p-2 rounded-none hover:bg-blue-500 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
            Can
            </button>
            <button class="min-w-auto w-32 h-10 bg-green-300 p-2 rounded-r-full hover:bg-green-500 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out">
            Grow !
            </button>
        </div>
        <div class="flex bg-gray-100 p-2 w-full justify-center space-x-10">
            <button class="min-w-auto w-14 h-14 bg-orange-300 p-2 rounded-full hover:bg-orange-500 text-white font-semibold transition-rotation duration-300 hover:rotate-45 ease-in-out">
            You
            </button>
            <button class="min-w-auto w-14 h-14 bg-blue-300 p-2 rounded-full hover:bg-blue-500 text-white font-semibold transition-rotation duration-300 hover:rotate-90 ease-in-out">
            Spin
            </button>
            <button class="min-w-auto w-14 h-14 bg-green-300 p-2 rounded-full hover:bg-green-500 text-white font-semibold transition-rotation duration-300 hover:-rotate-90 ease-in-out">
            My
            </button>
            <button class="min-w-auto w-14 h-14 bg-red-300 p-2 rounded-full hover:bg-red-500 text-white font-semibold transition-rotation duration-300 hover:-rotate-45 ease-in-out">
            Head
            </button>
        </div>
    </div>
    
  )
}
