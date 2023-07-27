import React from 'react';
import { useSelector } from 'react-redux';

function ProfilePage() {
  let missionsData = useSelector((state) => state.missions.missions);
  const localMissions = JSON.parse(localStorage.getItem('missions')) || [];

  // rockectsData
  let rocketsData = useSelector((state) => state.rockets.rockets);
  const localRockets = JSON.parse(localStorage.getItem('rockets')) || [];

  if (localMissions.length > 0) {
    missionsData = localMissions;
  }

  if (localRockets.length > 0) {
    rocketsData = localRockets;
  }

  const newMission = missionsData.filter((mission) => mission.join === true);
  const newRocket = rocketsData.filter((rocket) => rocket.reserved === true);

  return (
    <div className="container mx-auto px-3 py-3 flex gap-10 flex-col md:flex-row">
      <div className="w-6/12">
        <h3 className="text-lg font-semibold">My Missions</h3>
        {newMission.length > 0 ? (
          newMission.map((mission) => (
            <div
              key={mission.mission_id}
              className="border border-gray-300 px-4 py-3 text-left"
            >
              <p className="capitalize">{mission.mission_name}</p>
            </div>
          ))
        ) : (
          <p className="border border-gray-300 px-4 py-3 text-left">
            No Missions
          </p>
        )}
      </div>
      <div className="w-6/12">
        <h3 className="text-lg font-semibold">My Rockets</h3>
        {newRocket.length > 0 ? (
          newRocket.map((rocket) => (
            <div
              key={rocket.id}
              className="border border-gray-300 px-4 py-3 text-left"
            >
              <p className="capitalize">{rocket.rocketName}</p>
            </div>
          ))
        ) : (
          <p className="border border-gray-300 px-4 py-3 text-left">
            No Rockets
          </p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
