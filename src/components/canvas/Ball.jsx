import React from 'react';

const BallCanvas = ({ icon }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img src={icon} alt="Icon" className="rounded-full w-20 h-20" />
    </div>
  );
};

export default BallCanvas;
