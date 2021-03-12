import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
id: 'default-malmo',
  predictionPlace: {
    address: 'Malmö, Skåne',
    bounds: new LatLngBounds(new LatLng(55.66933501,13.08615451), new LatLng(55.51374506,12.93272021)),
    },
  },
  {
    id: 'default-stockholm',
    predictionPlace: {
      address: 'Stockholm, Södermanland',
      bounds: new LatLngBounds(new LatLng(59.4988979,18.26806001), new LatLng(59.16249845,17.90054401)),
    },
  },
  {
    id: 'default-umea',
    predictionPlace: {
      address: 'Umeå, Västerbotten',
      bounds: new LatLngBounds(new LatLng(63.97767591,20.47000108), new LatLng(63.64188897,20.04602559)),
    },
  },
  {
    id: 'default-goteborg',
    predictionPlace: {
      address: 'Göteborg, Västa götaland',
      bounds: new LatLngBounds(new LatLng(57.86999104,12.20587166), new LatLng(57.47685148,11.79617489)),
    },
  },
  {
    id: 'default-lulea',
    predictionPlace: {
      address: 'Luleå, Norrbotten',
      bounds: new LatLngBounds(new LatLng(65.83730424,22.54518037), new LatLng(65.27520836,21.78818037)),
    },
  },
];
export default defaultLocations;
