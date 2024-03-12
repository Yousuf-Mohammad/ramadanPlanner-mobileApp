import HijriDate from 'hijri-date';
import {months} from '../assets/constants/hijriMonths';

export const hijriDate = () => {
  const hijriDateNow = new HijriDate();

  const day =
    hijriDateNow._day < 10 ? '0' + hijriDateNow._day : hijriDateNow._day;
  let month = '';
  months.map((i, idx) => {
    if (hijriDateNow._month === idx + 1) {
      month = i.name;
    }
  });

  // console.log('day: ', day, 'month: ', month);
  return {day: day, month: month};
};
