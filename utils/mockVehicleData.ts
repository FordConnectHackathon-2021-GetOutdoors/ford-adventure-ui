const status = {
  status: "SUCCESS",
  vehicle: {
    vehicleId: "8a7f9fa878849d8a0179579d2f26043a",
    make: "F",
    modelName: "Edge",
    modelYear: "2019",
    color: "OXFORD WHITE SOLID C/C",
    nickName: "Hackathon Car!",
    modemEnabled: true,
    lastUpdated: "07-13-2021 01:32:35",
    vehicleAuthorizationIndicator: 1,
    serviceCompatible: true,
    engineType: "ICE",
    vehicleDetails: {
      fuelLevel: {
        value: -5.0,
        distanceToEmpty: 0.0,
        timestamp: "07-13-2021 01:32:35",
      },
      batteryChargeLevel: {
        value: null,
        distanceToEmpty: 409.0,
        timestamp: null,
      },
      mileage: 372.8,
      odometer: 600.0,
    },
    vehicleStatus: {
      tirePressureWarning: false,
      deepSleepInProgress: false,
      firmwareUpgradeInProgress: false,
      remoteStartStatus: {
        status: "ENGINE_RUNNING",
        duration: 0,
        timeStamp: "07-13-2021 01:32:35",
      },
      chargingStatus: {
        value: "ChargingAC",
        timeStamp: "07-13-2021 01:32:35",
        chargeStartTime: "02-02-2017 00:00:00",
        chargeEndTime: "02-02-2017 00:00:00",
      },
      plugStatus: { value: true, timeStamp: "07-13-2021 01:32:35" },
      ignitionStatus: { value: "ON", timeStamp: "07-13-2021 01:32:35" },
      doorStatus: [
        {
          vehicleDoor: "UNSPECIFIED_FRONT",
          value: "CLOSED",
          vehicleOccupantRole: "DRIVER",
          timeStamp: "07-13-2021 01:32:35",
        },
        {
          vehicleDoor: "UNSPECIFIED_FRONT",
          value: "CLOSED",
          vehicleOccupantRole: "PASSENGER",
          timeStamp: "07-13-2021 01:32:35",
        },
        {
          vehicleDoor: "HOOD_DOOR",
          value: "CLOSED",
          vehicleOccupantRole: "NOT_APPLICABLE",
          timeStamp: "07-13-2021 01:32:35",
        },
        {
          vehicleDoor: "REAR_LEFT",
          value: "CLOSED",
          vehicleOccupantRole: "PASSENGER",
          timeStamp: "07-13-2021 01:32:35",
        },
        {
          vehicleDoor: "REAR_RIGHT",
          value: "CLOSED",
          vehicleOccupantRole: "PASSENGER",
          timeStamp: "07-13-2021 01:32:35",
        },
        {
          vehicleDoor: "TAILGATE",
          value: "CLOSED",
          vehicleOccupantRole: "PASSENGER",
          timeStamp: "07-13-2021 01:32:35",
        },
        {
          vehicleDoor: "INNER_TAILGATE",
          value: "CLOSED",
          vehicleOccupantRole: "PASSENGER",
          timeStamp: "07-13-2021 01:32:35",
        },
      ],
    },
    vehicleLocation: {
      longitude: "-83.205249",
      latitude: "42.300180",
      speed: 0.0,
      direction: "South",
      timeStamp: "07-13-2021 01:32:34",
    },
  },
};

export default status;
