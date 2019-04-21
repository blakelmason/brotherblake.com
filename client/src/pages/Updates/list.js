import moment from 'moment';

const list = ['2019-04-21', '2019-04-14'];

list.forEach((date, index) => {
  list[index] = moment(date);
});

export default list;
