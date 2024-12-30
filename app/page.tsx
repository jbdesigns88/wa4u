
import Image from "next/image";
import SlideShow from "./components/slideshow";
import Testimonials from "./components/Testimonials";
import { clients } from "@/data/clients";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {

  return (
 
    <main className="flex min-h-screen flex-col items-center justify-between">
       
       <div className="bg-gradient-to-b from-slate-900 from-40% via slate-700 via-20% to-transparent w-full p-5 absolute z-20 "> 
         <div className="column-2">
            <div>
              <h2 className=" text-2xl subpixel-antialiased font-bold text-zinc-200 ">Wellness All 4 U</h2>
            </div>
            <nav className="text-2xl leading-10   gap-8 column bg-gradeient-to-b from-bg-sky-600 to-sky-900 p-3">
            <div className="transition ease-in-out delay-500 text-slate-400 hover:text-zinc-300">
                <a href="#home">home</a>
            </div>

            <div className="transition ease-in-out delay-500 text-slate-400 hover:text-zinc-300">

              <a href="#about">about</a></div>
              <div className="transition ease-in-out delay-500 text-slate-400 hover:text-zinc-300">

                <a href="#testimonials">testimonials</a>
              </div>
              <div className="transition ease-in-out delay-500 text-slate-400 hover:text-zinc-300">

              <a href="#services">services</a></div>
              <div className="transition ease-in-out delay-500 text-slate-400 hover:text-zinc-300">

              <a href="contact">contact</a></div>

          </nav>
         </div>
         
          
         
        </div> 
      {/* <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">b[ixe]
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Wellness 4 U</span>
            <h2>Wellness 4 u</h2>
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
          </a>
        </div>
      
        </nav>
      </header> */}



        <div className="relative w-full h-screen overflow-hidden">
        <a
        href="#"
        className=" z-10 absolute inset-0 flex items-center justify-left text-center text-white bg-opacity-50 bg-black  transition-opacity duration-300"
      >
        
        
        
        <div className="bg-gray-200 rounded-xl p-3 m-5 ">
          <h1 className="text-3xl sm:text-5xl lg:text-3xl text-slate-700">
          Build a better version of you! &nbsp;
          </h1>
          <p className="text-lg sm:text-xl lg:text-lg text-slate-700 hover:text-fuchsia-500 ">
            sign up now
          </p>
        </div>
      </a>

          <div className="relative w-full h-full full-screen-only">

          <SlideShow speed={3000} images={["/web/banner_1.jpg","/web/banner_2.jpg","/web/banner_3.jpg"]}/>
          </div>
          <div className="relative w-full h-full mobile-only">
              <SlideShow speed={3000} images={["/web/banner_1_m.jpg","/web/banner_2_m.jpg","/web/banner_3_m.jpg"]}/>
          </div>
        </div>


        


          <div id="testimonials" className="py-8 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800`">
            <Testimonials clients={clients} />
          </div>



          <div id="about" className="w-full">
            <About/>
          </div>

          <div id="services" className="w-full">
            <Services/>
          </div>

          <div id="contact" className="w-full">
            <Contact/>
          </div>
        
      




    </main>
  );
}
