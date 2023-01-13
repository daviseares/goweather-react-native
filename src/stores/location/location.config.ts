export interface ILocationStore {
  location: LocationType;
  getLocation(): Promise<void>;
  clearLocation(): void;
}

export const initialState = {
  location: {} as LocationType,
};
