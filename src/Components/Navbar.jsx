import React from "react";

export const Navbar = () =>  {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  
    return <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
      
    <a
      href="/whoami"
      className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      Who am I?
    </a>
    <a
      href="/books"
      className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      Books
    </a>
    <a
      href="https://wiki.sandorvass.xyz"
      className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      Wiki
    </a>
  </div>
}
  