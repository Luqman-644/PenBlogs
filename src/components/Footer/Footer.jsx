import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full text-gray-700 bg-gray-100">
      <div className="container flex flex-col flex-wrap px-4 py-6 mx-auto sm:px-6 md:px-8 md:flex-row lg:py-15 md:items-start">
        <div className="flex-shrink-0 w-full sm:w-64 mx-auto text-center md:text-left mb-6 md:mb-6 md:mx-auto ">
          <Link to="/">
            <img className="w-32 sm:w-40 md:w-[170px] mx-auto md:mx-0" src="/Logo.png" alt="Logo" />
          </Link>
          <p className="mt-2 text-xs sm:text-sm text-gray-500">Your First Choice to Blog!</p>
          <div className="mt-4">
            <span className="inline-flex justify-center md:justify-start gap-3">
              <a className="text-gray-500 hover:text-gray-700" href="#">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </a>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-6 md:mt-0 md:pl-8 text-center md:text-left">
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-6">
            <h2 className="mb-2 text-xs sm:text-sm font-medium tracking-widest text-gray-900 uppercase">
              About
            </h2>
            <nav className="list-none">
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  Company
                </a>
              </li>
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  Careers
                </a>
              </li>
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  Blog
                </a>
              </li>
            </nav>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-6">
            <h2 className="mb-2 text-xs sm:text-sm font-medium tracking-widest text-gray-900 uppercase">
              Support
            </h2>
            <nav className="list-none">
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  Contact Support
                </a>
              </li>
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  Help Resources
                </a>
              </li>
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  Release Updates
                </a>
              </li>
            </nav>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-6">
            <h2 className="mb-2 text-xs sm:text-sm font-medium tracking-widest text-gray-900 uppercase">
              Platform
            </h2>
            <nav className="list-none">
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  Terms & Privacy
                </a>
              </li>
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  Pricing
                </a>
              </li>
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  FAQ
                </a>
              </li>
            </nav>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-6">
            <h2 className="mb-2 text-xs sm:text-sm font-medium tracking-widest text-gray-900 uppercase">
              Contact
            </h2>
            <nav className="list-none">
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  Send a Message
                </a>
              </li>
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  Request a Quote
                </a>
              </li>
              <li className="mt-2">
                <a className="text-xs sm:text-sm text-gray-500 hover:text-gray-900" href="#">
                  +123-456-7890
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-300">
        <div className="container px-4 py-3 sm:px-6 sm:py-4 mx-auto">
          <p className="text-xs sm:text-sm text-gray-700 text-center">
            © PenBlogs All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;