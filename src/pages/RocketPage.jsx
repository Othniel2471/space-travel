import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rocket/RocketSlice';
import RocketItem from '../components/RocketItem';

function RocketPage() {
  const dispatch = useDispatch();

  let rockets = useSelector((state) => state.rockets.rockets);

  const localRockets = JSON.parse(localStorage.getItem('rockets')) || [];
  if (localRockets.length > 0) {
    rockets = localRockets;
  }

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  const renderRockets = () => {
    if (rockets.length > 0) {
      return rockets.map((rocket) => (
        <RocketItem
          key={rocket.id}
          id={rocket.id}
          rocketName={rocket.rocketName}
          description={rocket.description}
          flickrImages={rocket.flickrImages}
          reserved={rocket.reserved}
        />
      ));
    }
    return <h1>Loading...</h1>;
  };

  return <div className="container mx-auto px-3 py-3">{renderRockets()}</div>;
}

export default RocketPage;
