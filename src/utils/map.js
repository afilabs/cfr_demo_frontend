import WebMercatorViewport from "@math.gl/web-mercator";
import { maxBy, minBy } from "lodash";

const getMinOrMax = (markers, minOrMax, latOrLng) => {
  if (minOrMax === "max") {
    return maxBy(markers, (value) => value[latOrLng])[latOrLng];
  } else {
    return minBy(markers, (value) => value[latOrLng])[latOrLng];
  }
};

export const getBounds = (markers) => {
  const maxLat = getMinOrMax(markers, "max", "lat");
  const minLat = getMinOrMax(markers, "min", "lat");
  const maxLng = getMinOrMax(markers, "max", "lng");
  const minLng = getMinOrMax(markers, "min", "lng");

  const southWest = [minLng, minLat];
  const northEast = [maxLng, maxLat];
  const result = [southWest, northEast];
  return result;
};

export const getMapBounds = (viewport, points, width, height) => {
  const MARKERS_BOUNDS = getBounds(points);
  const newViewport = new WebMercatorViewport({
    width,
    height,
  });
  const bound = newViewport.fitBounds(MARKERS_BOUNDS, {
    padding: 200,
  });
  const { longitude, latitude, zoom } = bound;
  return { longitude, latitude, zoom: points.length === 1 ? 14 : zoom - 1 };
};
