import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export interface IIconProps {
    color?: string,
    size?: number;
    style?: Object;
  }

const PlusCircleIcon20x: React.FunctionComponent<IIconProps> = ({color, size, style}) => (
  <Svg width={size || "20"} height={size || "20"} viewBox="0 0 20 20" fill="none" style={style}>
    <Path 
      d="M9.99999 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 9.99999 1.66667C5.39762 1.66667 1.66666 5.39763 1.66666 10C1.66666 14.6024 5.39762 18.3333 9.99999 18.3333Z" 
      stroke={color || 'black'} 
      strokeWidth="1.5" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path 
      d="M10 6.66667V13.3333" 
      stroke={color || 'black'} 
      strokeWidth="1.5" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path 
      d="M6.66666 10H13.3333" 
      stroke={color || 'black'} 
      strokeWidth="1.5" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(PlusCircleIcon20x);
