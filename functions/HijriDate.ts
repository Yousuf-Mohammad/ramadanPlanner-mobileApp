import HijriDate from 'hijri-date';
import {months} from '../assets/constants/hijriMonths';

export const hijriDate = () => {
  const hijriDateNow = new HijriDate();

  const day =
    hijriDateNow._date < 10 ? '0' + hijriDateNow._date : hijriDateNow._date;
  let month = '';
  months.map((i, idx) => {
    if (hijriDateNow._month === idx + 1) {
      month = i.name;
    }
  });
  const monthNumber = hijriDateNow._month;
  const year = hijriDateNow._year;

  // console.log('day: ', day, 'month: ', month);
  return {day: day, month: month, monthNumber: monthNumber, year: year};
};
