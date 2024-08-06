import React from 'react';
const CopyRight = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='copyright'>
      <p className='text-center p-0 m-0 fs-5'>
        © 2016-{currentYear} Girl Scouts of the United States of America.{' '}
      </p>
      <p className='text-center fs-5'>
        A 501(c)(3) Organization. All Rights Reserved.
      </p>
    </div>
  );
};
export default CopyRight;
