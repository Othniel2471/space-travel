import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { fetchMissions } from '../redux/mission/MissionSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('missionSlice', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch missions successfully and update state', async () => {
    const mockMissions = [{ id: 1, name: 'Mission 1' }, { id: 2, name: 'Mission 2' }];

    fetchMock.mockResponseOnce(JSON.stringify(mockMissions));

    const store = mockStore({ missions: { data: null, error: null } });

    // Dispatch the fetchMissions action and wait for it to complete
    await store.dispatch(fetchMissions());

    // Get the actions that were dispatched to the mock store
    const actions = store.getActions();

    // Expectations
    expect(actions[0].type).toEqual(fetchMissions.pending.type);
    expect(actions[1].type).toEqual(fetchMissions.fulfilled.type);
    expect(store.getState().missions.error).toBeNull();
  });

  // ... other test cases ...
});
