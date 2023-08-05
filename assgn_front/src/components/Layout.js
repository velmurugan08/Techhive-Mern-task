import {Link, Outlet} from "react-router-dom"

export default function useLayoutEffect(){
    return <div>
            {/* <nav className=" flex h-[50px]">
                <div className=" flex flex-row justify-between">
                    <button className=" flex align-middle items-center" >Navbar</button>
                    <button className="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""></span>
                    </button> 
                    <div className="" id="navbarNavAltMarkup">
                    <div className="flex items-center align-middle justify-center">
                        <button className=" flex align-middle items-center" aria-current="page"><Link to="/Home">Home</Link></button>
                        <button className=" flex align-middle items-center" ><Link to="/Professional">Professional</Link></button>
                        <button className=" flex align-middle items-center" ><Link to="/Addprofessional">Addprofessional</Link></button>
                    </div>
                    </div>
                </div>
            </nav> */}


            <nav className="border-gray-200 bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Navbar</span>
                
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col md:p-0  p-4  md:flex-row md:space-x-8 md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a   href="/Home"className="block py-2 pl-3 pr-4 text-gray-900 no-underline  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                    </li>
                    <li>
                    <a href="/Professional" className="block py-2 pl-3 pr-4 text-gray-900 no-underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Students</a>
                    </li>
                    <li>
                    <a href="/Addprofessional" className="block py-2 pl-3 pr-4 text-gray-900 no-underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AddStudents</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        <Outlet/>
    </div>
}