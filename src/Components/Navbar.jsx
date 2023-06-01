import React from 'react';

export const Navbar = () => {

  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
      <a href="/whoami" className="anchorClasses">
        Who am I?
      </a>
      <a href="/books" className="anchorClasses">
        Books
      </a>
      <a href="https://wiki.sandorvass.xyz" className="anchorClasses">
        Wiki
      </a>
      <a href="/contact" className="anchorClasses">
        Contact
      </a>
    </div>
  );
}
