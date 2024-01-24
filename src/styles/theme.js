export const light = {
  bgc: '#FFFFFF',
  heading: '#333333',
  subtitle: '#222222',
  primary: '#5022C2',
  borderColor: '#D6D5D8',
  iconColor: '#261F37',
  elavateColor: '#F8F8F8',
};

export const dark = {
  bgc: '#121212',
  heading: '#ECECEC',
  subtitle: '#EEEEEE',
  primary: '#CBBDED',
  borderColor: '#413F46',
  iconColor: '#D8D8D8',
  elavateColor: '#282828',
};

const size = {
  mobile: '500px',
  tablet: '1280px',
  pc: '1440px',
};

export const responsive = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  pc: `(min-width: ${size.pc})`,
};
