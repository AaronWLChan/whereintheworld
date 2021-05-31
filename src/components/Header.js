import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../redux/uiSlice'

const Header = () => {

    const darkMode = useSelector((state) => state.uiReducer.darkMode)
    const dispatch = useDispatch()

    return (
        <div className="dark:bg-gray-800 shadow-md py-4 mb-8">

            <div className="container mx-auto">
                <div className="flex justify-between items-center px-8">
                
                    <Link to="/" className="sm:text-2xl text-xl font-bold dark:text-white hover:opacity-70">
                        Where in the world
                    </Link>

                    {/* Menu */}
                    <div className="flex items-center justify-center">

                        <button className="focus:outline-none" onClick={() => dispatch(toggleDarkMode())}>
                            <div className={"w-10 h-6 flex items-center rounded-full p-1 bg-gray-200 dark:bg-green-400"}>
            
                                <div className={"bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out " + (darkMode && "translate-x-4")}></div>

                            </div>
                        </button>
                
                    </div>
                </div>
            </div>

          

        </div>
    )
}



export default Header
