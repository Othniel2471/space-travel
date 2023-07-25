import React from 'react';

function RocketItem() {
  return (
    <div className="container mx-auto px-3 py-3 flex flex-col md:flex-row">
      <div className="col-span-2">
        <h1 className="text-2xl font-semibold">Rockets</h1>
      </div>
      <div className="col-span-7 mt-4 md:mt-0 ml-3">
        <h3 className="capitalize text-lg font-semibold">falcon</h3>
        <p className="title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic rem vero
          eos esse beatae. Laborum ratione, saepe odio dolor cum a laboriosam
          nisi dolore velit rem, magnam, cupiditate et explicabo!
        </p>
        <button
          type="button"
          className="capitalize bg-[#017bfe] mt-2 text-white rounded py-2 px-4 hover:bg-[#0d8bf0]"
        >
          reserve rocket
        </button>
      </div>
    </div>
  );
}

export default RocketItem;
