import React, { useEffect, useState } from "react";
import { Spin, Button } from "antd";
import { forEach } from "lodash";
import axios from 'axios';

import "./Demo.scss";
import MapBoxDemo from "../components/Mapbox/Demo";
import inputData from "./DemoInput.json";
import outputData from "./DemoOutput.json";

import { COLORS } from "../constants";

const DemoPage = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [stops, setStops] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const getStop = (pickup, type, index, shipmentIndex, color = "606060") => {
    return {
      id: `${index}-${type}`,
      shipmentIndex,
      type,
      color,
      status: "draft",
      sortNo: "",
      lat: pickup.arrivalLocation.latitude,
      lng: pickup.arrivalLocation.longitude,
      startTime: pickup.timeWindows.startTime,
      endTime: pickup.timeWindows.endTime,
    };
  };

  const getVehicle = (vehicle, index) => {
    return {
      id: `${index}`,
      vehicleIndex: index,
      driver: {
        color: COLORS[index],
        startLat: vehicle.startLocation.latitude,
        startLng: vehicle.startLocation.longitude,
        endLat: vehicle.endLocation.latitude,
        endLng: vehicle.endLocation.longitude,
      },
    };
  };

  useEffect(() => {
    const stopsT = [];
    forEach(inputData.model.shipments, (shipment, shipmentIndex) => {
      forEach(shipment.pickups, (pickup, index) => {
        stopsT.push(getStop(pickup, "pickup", index, shipmentIndex));
      });
      forEach(shipment.deliveries, (delivery, index) => {
        stopsT.push(getStop(delivery, "delivery", index, shipmentIndex));
      });
    });
    setStops(stopsT);

    const vehiclesT = [];
    forEach(inputData.model.vehicles, (vehicle, index) => {
      vehiclesT.push(getVehicle(vehicle, index));
    });
    setVehicles(vehiclesT);
    // eslint-disable-next-line
  }, [inputData]);

  const getDirections = async (driver, pickup, delivery) => {
    const url = `${process.env.REACT_APP_API_URI}/directions?origin=${driver.startLat},${driver.startLng}&destination=${driver.endLat},${driver.endLng}&waypoints=via:${pickup.lat},${pickup.lng}|via:${delivery.lat},${delivery.lng}&key=${process.env.REACT_APP_GOOGLE_KEY}`
    console.log(url);
    let polyline = '';
    await axios.get(url)
      .then(function (response) {
        polyline = response.data.routes[0].overview_polyline.points;
      })
      .catch(function (error) {
        console.log(error);
      });
    return polyline;
  }

  const handleOptimize = async () => {
    setIsFetching(true);
    const stopsT = [...stops];
    const vehiclesT = [...vehicles];
    await forEach(outputData.routes, async (route, index) => {
      const vehicleIndex = route.vehicleIndex || 0;
      const vehicle = vehicles[vehicleIndex];
      const driver = vehicle.driver;
      const driverColor = driver.color;

      const pickupVisitIndex = route.visits.findIndex((v) => v.isPickup);
      const pickupStopIndex = stops.findIndex(
        (s) =>
          s.shipmentIndex ===
            (route.visits[pickupVisitIndex].shipmentIndex || 0) &&
          s.type === "pickup"
      );
      const pickup = {...stops[pickupStopIndex]};
      pickup.color = driverColor;
      pickup.status = "assigned";
      pickup.sortNo = pickupVisitIndex + 1;

      const deliveryVisitIndex = route.visits.findIndex((v) => !v.isPickup);
      const deliveryStopIndex = stops.findIndex(
        (s) =>
          s.shipmentIndex ===
            (route.visits[deliveryVisitIndex].shipmentIndex || 0) &&
          s.type === "delivery"
      );
      const delivery = {...stops[deliveryStopIndex]};
      delivery.color = driverColor;
      delivery.status = "assigned";
      delivery.sortNo = deliveryVisitIndex + 1;

      const polyline = await getDirections(driver, stops[pickupStopIndex], stops[deliveryStopIndex]);
      const vehicleT = {...vehicle};
      vehicleT.polyline = polyline;

      vehiclesT[vehicleIndex] = vehicleT;
      stopsT[pickupStopIndex] = pickup;
      stopsT[deliveryStopIndex] = delivery;
    });

    setTimeout(() => {
      setStops(stopsT);
      setVehicles(vehiclesT);
      setIsFetching(false);
    }, 1000);
  };

  return (
    <Spin spinning={isFetching}>
      <div className="Content ContentFull DemoPage">
        <MapBoxDemo
          stops={stops}
          routes={vehicles}
        />
        <div className="footer">
          <div className="right">
            <Button
              type="primary"
              size="large"
              className="btn-optimize"
              onClick={handleOptimize}
            >
              Optimize
            </Button>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default DemoPage;
