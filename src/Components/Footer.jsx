import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="text-gray-600 body-font bg-green-300  ">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col flex justify-center items-center">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">MediGo+</span>
          </a>
          <p class="text-sm text-black font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 MediGo —
            <a
              href="https://twitter.com/knyttneve"
              class="text-black font-semibold ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Anas Mirza
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
