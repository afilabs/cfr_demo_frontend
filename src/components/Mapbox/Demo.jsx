import React, { useRef } from "react";
import Map, { Marker, Layer, Source } from "react-map-gl";

import markerIcons from "../Markers/markerIcons";
import { COLOR_DEFAULT } from "../../constants";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Demo.scss";
import { addPolylines } from "./Utils";

const MAP_CONFIG = {
  mapStyle: "mapbox://styles/theprof/cl8nwpgtl004z15mi7tjvhoaf",
  mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
};
const viewport = {
  width: '100%',
  height: '100%',
  latitude: 49.2474624,
  longitude: -123.1532338,
  zoom: 12,
};

const MapboxDemo = ({ stops, routes }) => {
  const mapRef = useRef();
  const newRoutes = addPolylines(routes);

  return (
    <div className="MapboxDemo">
      <Map
        ref={mapRef}
        initialViewState={viewport}
        {...MAP_CONFIG}
      >
        <Source
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: [...newRoutes.map(route => {
              return {
                properties: {
                  stroke: `#${route.driver?.color}`,
                },
                geometry: {
                  type: "LineString",
                  coordinates: route.pathCoordinate?.length > 0 ? route.pathCoordinate.map(c => [c.lng, c.lat]) : [],
                },
              }
            })]
            
          }}
        >
          <Layer
            id="lineLayer"
            type="line"
            layout={{
              "line-join": "round",
              "line-cap": "round",
            }}
            paint={{
              "line-color": ["get", "stroke"],
              "line-width": 3,
            }}
          />
        </Source>
        {stops.map((stop, i) => {
          const markerColor = stop.color || COLOR_DEFAULT;
          const urlStop = markerIcons[stop.type][markerColor];
          return (
            <div key={stop.type + i}>
              <Marker latitude={stop.lat} longitude={stop.lng}>
                <img src={urlStop} alt=""/>
                <div
                  className="marker-info"
                  style={{
                    color: `#${markerColor}`,
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {stop.sortNo.toString()}
                </div>
              </Marker>
            </div>
          )}
        )}
        {routes.map((route, i) => {
          const driver = route.driver;
          const driverColor = driver.color || COLOR_DEFAULT;
          const urlStart = markerIcons["start"][driverColor];
          const urlEnd = markerIcons["end"][driverColor];
          return (
            <div key={'driver' + i}>
              <Marker latitude={driver.startLat} longitude={driver.startLng}>
                <img src={urlStart} style={{ width: 34, height: 38 }} alt=""/>
              </Marker>
              <Marker latitude={driver.endLat} longitude={driver.endLng}>
                <img src={urlEnd} style={{ width: 34, height: 38 }} alt=""/>
              </Marker>
            </div>
          )}
        )}
      </Map>
    </div>
  );
};

export default MapboxDemo;
