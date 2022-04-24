const getDoubleDigits = (num: Number) => {
  if (num < 10 && num >= 0) {
    return '0' + num;
  } else {
    return num + '';
  }
};

export { getDoubleDigits };
