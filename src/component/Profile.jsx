import { Card, Dropdown } from "flowbite-react";
import pp from '../assets/Kucingh.jpg'
const Profile = () => {
  return (
    <div className="flex justify-center w-auto">
      <div className="w-3/4 border-2 rounded-3xl shadow-md">
        <div className="flex justify-center pt-5 pb-5">
            <div className="flex flex-col items-center">
              <img
                alt="Kucingh"
                height="96"
                src={pp}
                width="96"
                className="mb-3 rounded-full shadow-lg"
              />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sultan sulaiman</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Pengusaha kaya raya</span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-xl">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sultan sulaiman</h5>
                  <h5>Phone  : +62 878 6611 9248</h5>
                  <h5>Email  : sutsult4n@gmail.com</h5>
                  <h5>Github : https://github.com/Mozids</h5>
                  </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile