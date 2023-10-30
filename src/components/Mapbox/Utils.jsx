import { forEach } from "lodash";
const mapboxPolyline = require("@mapbox/polyline");

export const addPolylines = (routes) => {
  const newRoutes = [];
  forEach(routes, (route) => {
    const newRoute = { ...route };
    const polyline = newRoute.polyline;
    if (polyline) {
      const points = mapboxPolyline.decode(polyline);
      const pathCoordinate = points.map((x) => {
        return { lat: x[0], lng: x[1] };
      });
      newRoute.pathCoordinate = pathCoordinate;
    }
    newRoutes.push(newRoute);
  });
  return newRoutes;
};
