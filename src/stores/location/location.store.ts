import {
  Geolocation,
  combine,
  create,
  createJSONStorage,
  persist,
} from '~/modules';
import { zustandStorage } from '~/services';
import { ILocationStore, initialState } from './location.config';

export const locationStore = combine({ ...initialState }, (set) => ({
  getLocation: async () => {
    const { status } = await Geolocation.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }
    const {
      coords: { latitude, longitude },
    } = await Geolocation.getCurrentPositionAsync({});

    const location = { latitude, longitude };
    set({ location });
  },

  clearLocation: (): void => {
    set(initialState);
  },
}));

export const useLocationStore = create<ILocationStore>()(
  persist(locationStore, {
    name: 'location',
    storage: createJSONStorage(() => zustandStorage),
  }),
);
