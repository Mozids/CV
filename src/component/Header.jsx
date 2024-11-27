import { Navbar, NavbarLink } from "flowbite-react";

const Header = () => {
  return (
    <Navbar>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 " data-aos="fade-down" >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#home" className="block py-2 px-3 text-white bg-c rounded md:bg-transparent md:text-c md:p-0 md:dark:text-c" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-c md:p-0 md:dark:hover:text-c dark:text-white dark:hover:bg-c dark:hover:text-white md:dark:hover:bg-transparent dark:border-c">About</a>
              </li>
              <li>
                <a href="#skill" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-c md:p-0 md:dark:hover:text-c dark:text-white dark:hover:bg-c dark:hover:text-white md:dark:hover:bg-transparent dark:border-c">Skill</a>
              </li>
              <li>
                <a href="#project" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-c md:p-0 md:dark:hover:text-c dark:text-white dark:hover:bg-c dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Project</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-c md:p-0 md:dark:hover:text-c dark:text-white dark:hover:bg-c dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
    </Navbar>
  );
}

export default Header
