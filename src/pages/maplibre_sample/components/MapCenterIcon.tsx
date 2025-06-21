import React from 'react';
import { mapCenterIconWrapperStyle } from './style';

interface MapCenterIconProps {
  strokeColor?: string;
}

export const MapCenterIcon: React.FC<MapCenterIconProps> = ({
  strokeColor = 'rgba(100,100,100,0.75)',
}) => {
  return (
    <div id="icon-center" className={mapCenterIconWrapperStyle}>
      <svg
        focusable="false"
        width="64x"
        height="64px"
        viewBox="-0.5 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5001 12.5H16.5601"
          stroke={strokeColor}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.44 12.5H2.5"
          stroke={strokeColor}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 22V17.06"
          stroke={strokeColor}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 7.94V3"
          stroke={strokeColor}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.26001 10.5C5.93001 8.22 7.73001 6.41999 10.01 5.75999"
          stroke={strokeColor}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.01 19.24C16.29 18.58 18.09 16.78 18.76 14.5"
          stroke={strokeColor}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.26001 14.5C5.93001 16.78 7.73001 18.58 10.01 19.24"
          stroke={strokeColor}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.01 5.75999C16.29 6.41999 18.09 8.22 18.76 10.5"
          stroke={strokeColor}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
