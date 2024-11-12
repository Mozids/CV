import { Card, Dropdown } from "flowbite-react";
import pp from '../assets/Kucingh.jpg'
const Profile = () => {
  return (
    <Card>
      <div className="flex justify-end px-4 pt-4">
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Kucingh"
          height="96"
          src={pp}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
        <div>
          <h5>hallooo</h5>
          <h5>hallooo</h5>
          <h5>hallooo</h5>
          <h5>hallooo</h5>
          <h5>hallooo</h5>
        </div>
        </div>
      </div>
    </div>
    </Card>
  );
}

export default Profile