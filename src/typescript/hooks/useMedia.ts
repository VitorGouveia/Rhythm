import { fn } from '../types/function';

type Device = 'Mobile' | 'Tablet' | 'Laptop' | 'Desktop';
type Size = 'small' | 'large';

type Devices = `${Size}${Device}`;

const devices = {
  smallMobile: '320px',
  largeMobile: '480px',

  smallTablet: '481px',
  largeTablet: '768px',

  smallLaptop: '769px',
  largeLaptop: '1024px',

  smallDesktop: '1025px',
  largeDesktop: '1200px',
  ExtraLargeDesktop: '1201px',
};

type useMediaProps = {
  device?: Devices;
  width?: number;
};

export const useMedia: fn<useMediaProps> = ({ device, width } = {}) => {
  if (device) {
    const mediaQuery = (size: string) =>
      window.matchMedia(`(min-width: ${size})`).matches;

    return mediaQuery(devices[device]);
  }

  if (width) {
    const breakpoints = Object.values(devices);

    const closest = breakpoints.reduce((previous, current) => {
      return Math.abs(Number(current.split('px')[0]) - width) <
        Math.abs(Number(previous.split('px')[0]) - width)
        ? current
        : previous;
    });

    const index = breakpoints.indexOf(closest);

    const breakpointName = Object.keys(devices)[index];

    return breakpointName;
  }
};

export const useScreenType = () => {
  /* check screen size */
  const isSmallMobile = useMedia({ device: 'smallMobile' });
  const isSmallTablet = useMedia({ device: 'smallTablet' });
  const isSmallLaptop = useMedia({ device: 'smallLaptop' });
  const isSmallDesktop = useMedia({ device: 'smallDesktop' });

  if (isSmallMobile) {
    return 'small-mobile';
  }

  if (isSmallTablet) {
    return 'small-tablet';
  }

  if (isSmallLaptop) {
    return 'small-laptop';
  }

  if (isSmallDesktop) {
    return 'small-desktop';
  }

  return 'large-desktop';
};
