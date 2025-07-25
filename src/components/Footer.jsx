import React from 'react'
import { Link } from 'react-router-dom'
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
export const Footer = () => {




  return (
    <div >
      <footer className="footer sm:footer-horizontal bg-base-100  border-t-1 p-10 dark:bg-black dark:text-white  ">
        <nav>
          <h6 className="footer-title">
            <div>
              <Link to={'/'} className='text-center '>
                <p className='font-bold text-xl'>RIF</p>
                <p className='text-gray-500'>MJPRU</p>
              </Link>
            </div>
          </h6>
          <a >Rohilkhand Incubation Foundation (RIF) at <br />Mahatma Jyotiba Phule Rohilkhand University <br />(MJPRU) is dedicated to fostering innovation,<br />Incubation, and entereneuship</a>
          <div className='flex justify-center items-center gap-8 text-xl '>
            <a href="https://www.facebook.com/" target='_blank'><SlSocialFacebook /></a>
            <a href="https://www.twitter.com/" target='_blank'><CiTwitter /></a>
            <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
            <a href="https://in.linkedin.com/" target='_blank'><SlSocialLinkedin /></a>
            {/* <SlSocialFacebook className='hover:bg-blue-500 rounded-2xl hover:cursor-pointer  h-8 w-8'  target="_blank" href='#'/>
            <CiTwitter className='hover:bg-blue-500 rounded-2xl hover:cursor-pointer h-8 w-8' onClick={handlerOnTwitter}/>
          <FaInstagram className='hover:bg-red-500 rounded-2xl hover:cursor-pointer h-8 w-8' onClick={handlerOnInstagram}/>
          <SlSocialLinkedin className='hover:bg-blue-500 rounded-2xl hover:cursor-pointer h-8 w-8' onClick={handlerOnLinkedln} /> */}


          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link to={'/program'}> <a className="link link-hover">Program & Offering</a></Link>
          <Link to={'/startups'}> <a className="link link-hover">Startups at RIF</a></Link>
          <Link to={'/events'}><a className="link link-hover">Events & Innovation</a></Link>
          <a className="link link-hover">Research & Innovation</a>
          <a className="link link-hover">Government Policies</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Apply for Incubation</a>
          <a className="link link-hover">Media & News</a>
          <a className="link link-hover">Alumni Network</a>
          <a className="link link-hover">FAQs</a>
          <Link to={'/contact'}><a className="link link-hover">Contact Us</a></Link>
        </nav>
        <nav>

          <h6 className="footer-title">Contact Information</h6>

          <div> <span>🚒</span><a> Rohilkhand Incubation Foundation,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MJPRU Campus, Bareilly, Uttar <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pradesh, India</a></div>
          <div> <span> 📞 </span><a> +91 1234567891</a></div>
          <div> <span> 💌 </span><a> info@gmail.com</a></div>
        </nav>

      </footer>

    </div>
  )
}
