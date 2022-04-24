import { getDoubleDigits } from './data';

const getCurrentWeek = (date: Date) => {
  var result = '';
  switch (date.getDay()) {
    case 1:
      result = '一';
      break;
    case 2:
      result = '二';
      break;
    case 3:
      result = '三';
      break;
    case 4:
      result = '四';
      break;
    case 5:
      result = '五';
      break;
    case 6:
      result = '六';
      break;
    case 0:
      result = '日';
      break;
  }
  return '星期' + result;
};
const getCurrentYearMonthDay = () => {
  const currDate = new Date();
  const week = getCurrentWeek(currDate);
  const year = currDate.getFullYear();
  const month = currDate.getMonth() + 1;
  const day = currDate.getDate();
  return {
    week,
    date: `${year}年${month}月${day}日`,
    time: `${getDoubleDigits(currDate.getHours())} : ${getDoubleDigits(
      currDate.getMinutes(),
    )} : ${getDoubleDigits(currDate.getSeconds())}`,
  };
};
export { getCurrentWeek, getCurrentYearMonthDay };
