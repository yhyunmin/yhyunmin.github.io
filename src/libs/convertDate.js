const convertDates = date => {
  const Object = new Date(date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const Year = Object.getFullYear();
  const Index = Object.getMonth();
  if (!months[Index]) return '';
  return `${months[Index]} ${Year}`;
};

export default convertDates;
