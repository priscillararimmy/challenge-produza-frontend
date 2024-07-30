export const Header: React.FC = () => {
  return (
    <section>
      <nav className="bg-white dark:bg-blue-950 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">catalog</span>
          </a>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-blue-800 md:dark:bg-blue-950 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-orange-600 rounded md:bg-transparent md:text-orange-600 md:p-0 md:dark:text-orange-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 md:dark:hover:text-orange-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Starships</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 md:dark:hover:text-orange-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pilots</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}