import React from 'react';

export const  Contact = () => {
  return (
    <div className="flex pt-8 pl-8">
      <div className="flex flex-colpb-7">
        <ul>
          <li className="text-teal-500">
            github:
            <a href="https://github.com/rdg5" className='pb-1 underline text-orange-100 decoration-orange-500'  > rdg5</a>
          </li>
          <li className="text-teal-500">
            linkedin:
            <a href="https://www.linkedin.com/in/sandorvass" className='pb-1 underline text-orange-100 decoration-orange-500'  > linkedin</a>
          </li>
          <li className="text-teal-500">
            twitter:
            <a href="https://twitter.com/not_rdg" className=' pb-1 underline text-orange-100 decoration-orange-500'>  @not_rdg</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
