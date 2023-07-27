import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rocket/RocketSlice';

const RocketItem = ({
  id,
  rocketName,
  description,
  flickrImages,
  reserved,
}) => {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveRocket(id));
  };

  const handleCancel = () => {
    dispatch(cancelReservation(id));
  };
  return (
    <div className="container mx-auto px-3 py-3 flex gap-10 flex-col md:flex-row">
      <div className="col-span-2 w-full md:w-2/12">
        <img
          src={flickrImages}
          alt={rocketName}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="col-span-7 w-full  md:w-10/12 mt-4 md:mt-0 ml-3">
        <h3 className="capitalize text-lg font-semibold">{rocketName}</h3>
        <p className="title">
          {reserved && (
            <span className=" bg-blue-800 text-white rounded-md px-1 pb-1 text-center mr-2">
              reserved
            </span>
          )}
          {description}
        </p>
        {!reserved && (
          <button
            type="button"
            className="bg-[#017bfe] mt-2 text-white rounded py-2 px-4"
            onClick={handleReserve}
          >
            Reserve rocket
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className="border border-slate-500 mt-2 rounded  text-zinc-500 py-2 px-4"
            onClick={handleCancel}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  id: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  reserved: PropTypes.bool.isRequired,
}.isRequired;

export default RocketItem;
