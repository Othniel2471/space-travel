import render from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RocketItem from '../components/RocketItem';

const mockStore = configureStore([]);

describe('RocketItem', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      rockets: [
        {
          id: 1,
          name: 'Falcon 1',
          description:
            'Falcon 1 is a two-stage rocket designed and manufactured by SpaceX',
          image: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
          reserved: false,
        },
        {
          id: 2,
          name: 'Falcon 9',
          description:
            'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
          image: 'https://images2.imgbox.com/be/e7/iNqsqVYM_o.png',
          reserved: false,
        },
      ],
    });

    store.dispatch = jest.fn();

    component = render.create(
      <Provider store={store}>
        <RocketItem rocket={store.rockets} />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
