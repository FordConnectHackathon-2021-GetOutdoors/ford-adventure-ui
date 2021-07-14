import { Icon } from "@chakra-ui/react";
import React from "react";

export const BatteryIcon = ({ ...props }) => (
  <Icon viewBox="0 0 16 26" {...props}>
    <rect
      width="14"
      height="20.7368"
      x="1"
      y="3.52539"
      fill="#fff"
      stroke="#102B4E"
      strokeWidth="2"
      rx="1"
    />
    <path
      fill="#102B4E"
      stroke="#102B4E"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 24V9l12 5.625V24H2z"
    />
    <path
      fill="#102B4E"
      d="M4.21094.999999c0-.552285.44771-.999999 1-.999999h5.57896c.5523 0 1 .447715 1 1v2.36842H4.21094V.999999z"
    />
  </Icon>
);

export const OilIcon = ({ ...props }) => (
  <Icon viewBox="0 0 15 24" {...props}>
    <path
      fill="#102B4E"
      d="M14.4 16.8c0 3.9765-3.2236 7.2-7.2 7.2C3.22355 24 0 20.7765 0 16.8 0 12.8236 7.2 0 7.2 0s7.2 12.8236 7.2 16.8z"
    />
  </Icon>
);

export const GasIcon = ({ ...props }) => (
  <Icon viewBox="0 0 25 24" {...props}>
    <defs />
    <path
      fill="#102B4E"
      fillRule="evenodd"
      d="M2.05844 1c0-.552284.44771-1 1-1H14.4383c.5523 0 1 .447715 1 1v7.32961c1.5852 0 2.8703 1.28508 2.8703 2.87029v6.4527c0 1.343 1.0887 2.4318 2.4317 2.4318 1.343 0 2.4317-1.0888 2.4317-2.4318v-5.9722c0-.3579-.0335-.7141-.0996-1.0639-.1079.0107-.2216-.0138-.3245-.0824l-3.0716-2.04777c-.1391-.09273-.2227-.24885-.2227-.41602V5.24014l-3.3091-2.80001.646-.76339 2.7448 2.32257c.1559-.23469.5019-.31306.7458-.10167l3.0716 2.66208c.1096.09497.1726.23283.1726.37784v1.86018l.0568.12674c.3889.86675.5899 1.80602.5899 2.75592v5.9722c0 1.8953-1.5364 3.4318-3.4317 3.4318-1.8953 0-3.4317-1.5365-3.4317-3.4318v-6.4527c0-1.0329-.8374-1.87029-1.8703-1.87029V22.0999h1.3911V24H0v-1.9001h2.05844V1z"
      clipRule="evenodd"
    />
    <rect
      width="9.77191"
      height="7.60038"
      x="3.5293"
      y="2.17188"
      fill="#fff"
      rx=".5"
    />
  </Icon>
);

export const TireIcon = ({ ...props }) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <circle cx="19.5" cy="9.5" r="4" fill="#102B4E" stroke="#102B4E" />
    <rect width="13" height="24" fill="#102B4E" rx="2" />
    <path
      stroke="#102B4E"
      strokeWidth="2"
      d="M14 21h3.5c1.1046 0 2-.8954 2-2v-3.5"
    />
    <path
      fill="#102B4E"
      d="M18 13h3v1.5c0 .2761-.2239.5-.5.5h-2c-.2761 0-.5-.2239-.5-.5V13z"
    />
    <path
      fill="#fff"
      d="M20.1943 9.53886c.2976.29761.2976.78014 0 1.07774s-.7801.2976-1.0777 0c-.2976-.2976-1.0777-2.15546-1.0777-2.15546s1.8578.78012 2.1554 1.07772z"
    />
  </Icon>
);

export const OdometerIcon = ({ ...props }) => (
  <Icon viewBox="0 0 22 19" {...props}>
    <defs />
    <path
      fill="#102B4E"
      d="M11 0C4.92487 0 0 4.93564 0 11.0241c0 2.7438 1.00022 5.2535 2.65517 7.1828H19.3448C20.9998 16.2776 22 13.7679 22 11.0241 22 4.93564 17.0751 0 11 0z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="2"
      d="M11.3789 10.6209l3.7931-5.31035"
    />
  </Icon>
);

export const CheckboxIcon = ({ ...props }) => (
  <Icon viewBox="0 0 24 24" {...props} boxSize="6">
    <circle cx="12" cy="12" r="12" fill="#fff" />
    <path
      fill="#0276B3"
      fillRule="evenodd"
      d="M12 24c6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12C5.37258 0 0 5.37258 0 12c0 6.6274 5.37258 12 12 12zm5.9604-15.04618c.3887-.39233.3858-1.02549-.0066-1.4142-.3923-.38871-1.0255-.38577-1.4142.00656L9.82708 14.3213l-2.35901-2.4339c-.38438-.3966-1.01747-.4065-1.41404-.0221-.39658.3843-.40647 1.0174-.0221 1.414l3.06923 3.1667c.18703.1929.44385.3025.71258.304.26876.0015.52676-.1053.71586-.2962l7.4308-7.49998z"
      clipRule="evenodd"
    />
  </Icon>
);

export const EVIcon = ({ ...props }) => (
  <Icon viewBox="0 0 25 24" {...props}>
    <path
      fill="#102B4E"
      fillRule="evenodd"
      d="M3.05859 0c-.55228 0-1 .447716-1 1v21.0999H0V24h16.8294v-1.9001h-1.391V9.32961c1.0329.00008 1.8702.83739 1.8702 1.87029v6.4527c0 1.8953 1.5364 3.4318 3.4317 3.4318 1.8953 0 3.4317-1.5365 3.4317-3.4318v-5.9722c0-.9499-.201-1.88917-.5899-2.75592l-.0568-.12674V6.93756c0-.14501-.063-.28287-.1726-.37784l-3.0716-2.66208c-.2439-.21139-.5899-.13302-.7458.10167l-2.7448-2.32257-.646.76339 3.3091 2.80001v2.83017c0 .16717.0836.32329.2227.41602l3.0716 2.04777c.1029.0686.2166.0931.3245.0824.0661.3498.0996.706.0996 1.0639v5.9722c0 1.343-1.0887 2.4318-2.4317 2.4318-1.343 0-2.4317-1.0888-2.4317-2.4318v-6.4527c0-1.58516-1.285-2.87021-2.8702-2.87029V1c0-.552285-.4477-1-1-1H3.05859zm8.00811 12L5 17.5l3.26667-.4231-1.4 4.9231L12 17.0769 9.2 17l1.8667-5z"
      clipRule="evenodd"
    />
    <rect
      width="9.77191"
      height="7.60038"
      x="3.5293"
      y="2.17188"
      fill="#fff"
      rx=".5"
    />
  </Icon>
);

export const TireCarIcon = ({ ...props }) => (
  <Icon viewBox="0 0 28 57" {...props}>
    <path
      fill="#ECEAE9"
      d="M3 7c0-3.86599 3.13401-7 7-7h8c3.866 0 7 3.13401 7 7v48c0 1.1046-.8954 2-2 2H5c-1.10457 0-2-.8954-2-2V7z"
    />
    <rect width="14" height="22" x="7" y="31" fill="#fff" rx="1" />
    <rect width="14" height="7" x="7" y="16" fill="#fff" rx="1" />
    <rect width="8" height="16" y="5" fill="#102B4E" rx="1" />
    <rect width="8" height="16" x="20" y="5" fill="#102B4E" rx="1" />
    <rect width="8" height="16" y="35" fill="#102B4E" rx="1" />
    <rect width="8" height="16" x="20" y="35" fill="#102B4E" rx="1" />
  </Icon>
);
