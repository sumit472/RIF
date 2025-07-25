import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";


const Home = () => {
  return (
    <div>
      <div className="carousel w-full pt-5 dark:bg-gray-900 ">


        <div id="slide1" className="carousel-item relative w-full">

          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className='flex  w-full pt-8 dark:bg-gray-900 dark:text-white'>
        <div className='w-1/2 pl-10 p-2'>
          <button className='btn bg-red-500'>Our Mission</button>
          <h1 className='text-3xl font-bold pt-2'>Supporting and nurturing <br />innovative ideas</h1>
          <p className='pt-2'>Commited to supporting and narturing incubattion startups <br /> innovaion ideas and entrepreneurship in their pursuit to become <br />sufficient sustainable and impactful enterPrises
          </p>
        </div>
        <div >
          <button className='btn bg-blue-500'>Our Vision</button>
          <h1 className='text-3xl font-bold pt-2'>Building a vibrant ecosystem</h1>
          <p className='pt-2'>To establish a vibrant and sustainable ecosystem hub for incubation, <br />innovation and  enterpreneurship that fosters growth and <br />  development in the region!
          </p>
        </div>
      </div>
      <div className='w-full pt-5 dark:bg-gray-900 dark:text-white bg-blue-100 p-4'>
        <div>
          <h1 className='text-center font-bold text-2xl'>Our Impact</h1>
          <h1 className='text-center'>Driving innovation and eneterpreneurship at MJPRU</h1>
        </div>

        <div className='flex justify-around items-center gap-50 pt-5'>
          <div >
            <h1 className='text-center font-bold text-2xl'>50</h1>
            Startups Innovation
          </div>
          <div>
            <h1 className='text-center font-bold text-2xl'>15</h1>
            Patents Filed
          </div>
          <div>
            <h1 className='text-center font-bold text-2xl'>₹10Cr+</h1>
            Funds Raised
          </div>
          <div>
            <h1 className='text-center font-bold text-2xl'>200</h1>
            JObs Created
          </div>
        </div>
      </div>
      <div className='pt-5 dark:bg-gray-900 dark:text-white '>
        <h1 className='text-center font-bold text-4xl'>Current Initiatives</h1>
        <p className='text-center text-xl'>Driving innovation throgh srategic programs</p>
      </div>
      <div className='p-4 pt-10 dark:bg-gray-900 dark:text-white flex w-full gap-5 justify-around'>
        <div className="card bg-base-300 w-96 shadow-sm p-4  dark:bg-gray-900 dark:text-white dark:border">
          <div className='pl-4'>
            <h1 className='font-bold text-2xl'>Startup Accelerator Program</h1>
            <p >Fast-track growth for early-stage startups</p>
          </div>
          <div className='flex p-2 gap-5'>
            <button className='btn rounded-2xl bg-amber-400 '>Government Backend</button>
            <button className='btn rounded-2xl bg-blue-400'>DPIIT Alliged</button>
          </div>
          <p className='p-2'>A 12 Week intensive designed to help startups <br />refine their bussiness model, connect with <br />mentors, and prepare for investemnt</p>
          <button className='btn rounded-2xl w-full bg-blue-400 hover:cursor-pointer hover:opacity-70'>Learn More </button>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm p-4  dark:bg-gray-900 dark:text-white dark:border">
          <div className='pl-4'>
            <h1 className='font-bold text-2xl'>Innovation Lab</h1>
            <p >State-of-the art-facilities for R&D</p>
          </div>
          <div className='flex p-2 gap-5'>
            <button className='btn rounded-2xl bg-amber-400 '>MJPRU Supported</button>
            <button className='btn rounded-2xl bg-blue-400'>Industry Partners</button>
          </div>
          <p className='p-2'>Access cutting-edge equipment and resourses to prototype and test innovation solutions across various domains</p>
          <button className='btn rounded-2xl w-full bg-blue-400 hover:cursor-pointer hover:opacity-70'>Learn More </button>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm p-4  dark:bg-gray-900 dark:text-white dark:border">
          <div className='pl-4'>
            <h1 className='font-bold text-2xl'>Mentor Connect</h1>
            <p >Expert guidance from industry leaders</p>
          </div>
          <div className='flex p-2 gap-5'>
            <button className='btn rounded-2xl bg-amber-400 '>Expert Network</button>
            <button className='btn rounded-2xl bg-blue-400'>1:1 Sessions</button>
          </div>
          <p className='p-2'>Connect with experiences enterpreneus indusrt expert and investrs who provide personalised guidance and support</p>
          <button className='btn rounded-2xl w-full bg-blue-400 hover:cursor-pointer hover:opacity-70'>Learn More </button>
        </div>
      </div>

      <div className='pt-5 dark:bg-gray-900 dark:text-white '>
        <h1 className='text-center font-bold text-3xl'>Quick Links</h1>
        <p className='text-center text-xl'>Navigation to important sections</p>
        <div className='flex w-full justify-around p-4'>
          <div className="card bg-base-300 w-96 shadow-sm p-4  dark:bg-gray-900 dark:text-white dark:border ">
            <div className='pl-4'>

               <FaLightbulb className='bg-red-500 rounded-xl text-3xl p-2 ' />
            </div>
            <div className='flex p-2 gap-5'>
              <h1 className='font-bold text-2xl'>Programs & Offering</h1>
            </div>
            <p className='p-2'>Explore our incubation progams, funding opportunities, and resourses </p>
            <button className='btn rounded-2xl  bg-blue-400 hover:cursor-pointer hover:opacity-70'>Learn More </button>
          </div>

          <div className="card bg-base-300 w-96 shadow-sm p-4  dark:bg-gray-900 dark:text-white dark:border ">
            <div className='pl-4'>
              <FaUserGroup className='bg-blue-500 rounded-xl text-3xl p-2 ' />
            </div>
            <div className='flex p-2 gap-5'>
              <h1 className='font-bold text-2xl'>Programs & Offering</h1>
            </div>
            <p className='p-2'>Explore our incubation progams, funding opportunities, and resourses </p>
            <button className='btn rounded-2xl  bg-blue-400 hover:cursor-pointer hover:opacity-70'>Learn More </button>
          </div>

          <div className="card bg-base-300 w-96 shadow-sm p-4  dark:bg-gray-900 dark:text-white dark:border ">
            <div className='pl-4'>

                   <FaGraduationCap className='bg-red-500 rounded-xl text-3xl p-2 ' />
            </div>
            <div className='flex p-2 gap-5'>
              <h1 className='font-bold text-2xl'>Programs & Offering</h1>
            </div>
            <p className='p-2'>Explore our incubation progams, funding opportunities, and resourses </p>
            <button className='btn rounded-2xl  bg-blue-400 hover:cursor-pointer hover:opacity-70'>Learn More </button>
          </div>
        </div>
      </div>


    </div>
  )
}
export default Home