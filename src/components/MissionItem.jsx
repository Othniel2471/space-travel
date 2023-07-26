import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, join, leave } from '../redux/mission/MissionSlice';

function MissionPage() {
  let missionsData = useSelector((state) => state.missions.missions);
  const localMissions = JSON.parse(localStorage.getItem('missions')) || [];
  if (localMissions.length > 0) {
    missionsData = localMissions;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsData.length === 0) {
      dispatch(fetchMissions());
    }
  });
  return (

    <div className="container mx-auto my-5">
      <div className="overflow-x-scroll">

        <table className="table-fixed">
          <thead>
            <tr>
              <th scope="col" className="border border-gray-300 w-44">Mission</th>
              <th scope="col" className="border border-gray-300 py-4 min-w-9/12">Description</th>
              <th scope="col" className="border border-gray-300 w-44">Status</th>
              <th scope="col" className="border border-gray-300 w-48">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            { missionsData
            && missionsData.map((mission) => (
              <tr key={mission.mission_id} className="odd:bg-gray-200 text-center">
                <th className="border border-gray-300 px-4 py-2" scope="row">{mission.mission_name}</th>
                <td className="border border-gray-300 px-4 py-2 text-left">{mission.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  { mission.join && (
                    <p className="bg-blue-500 rounded-md text-white">Active Member</p>
                  )}
                  { !mission.join && (
                    <p className="bg-red-500 rounded-md text-white">Not A Member</p>
                  )}
                </td>
                <td className="border border-gray-300 py-2">
                  {mission.join && (
                    <button
                      type="button"
                      className="inline-block border-2 text-red-500 border-red-500 rounded-md py-1 px-3 hover:bg-red-500 hover:text-white"
                      onClick={
                        () => dispatch(leave(mission.mission_id))
                      }
                    >
                      Leave Mission
                    </button>
                  ) }
                  { !mission.join && (
                    <button
                      type="button"
                      className="inline-block border-2 text-blue-500 border-blue-500 rounded-md py-1 px-3 hover:bg-blue-500 hover:text-white "
                      onClick={
                        () => dispatch(join(mission.mission_id))
                      }
                    >
                      Join Mission
                    </button>
                  )}
                </td>
              </tr>
            ))}
            { !missionsData && (
            <div>
              <h3>Loading..</h3>
            </div>
            ) }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MissionPage;
