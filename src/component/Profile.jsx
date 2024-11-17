import { Card, Dropdown } from "flowbite-react";
const Profile = () => {
  return (
      <section id="home" className="pt-24">
        <div className="container scroll-smooth ">
          <div className="flex flex-wrap">

            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base text-c font-semibold md:text-xl">Hallo Semua, saya 
                <span className="block font-bold text-3xl text-b lg:text-5xl">Sultan Sulaiman</span></h1>
              <p className="font-medium mb-10 text-lg text-a lg:text-2xl">Junior Frontend  
              </p>
              <a href="#" className="text-base font-semibold text-white bg-c px-8 py-3 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Get Contact</a>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 lg:mt-0 lg:right-0">
                <img src="src\img\kucingh.jpg" alt="image" className="max-w-full mx-auto"/>
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="pt-24 pb-32" >
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-10">
                <h4 className="font-bold uppercase text-c text-ml mb-3">About Me</h4>
                <h2 className="font-medium font-semibold text-white bg-c px-8 py-3 rounded-xl">
                  Saya sangat tertarik dengan frontend development dan UI/UX, 
                  Saya suka menciptakan aplikasi web yang menarik dan fungsional 
                  dengan menggunakan HTML, CSS, JavaScript, serta framework seperti React dan Tailwind CSS.
                  Tujuan utama saya adalah membangun antarmuka yang responsif dan intuitif, 
                  memastikan pengalaman pengguna yang optimal 
                  dengan memadukan desain estetis dan kinerja yang tinggi</h2>
              </div>
            </div>
          </div>

        </section>
      </section>
  );
}

export default Profile