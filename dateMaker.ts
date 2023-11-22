import moment from 'moment';

export default function generateDate() {
    return moment().format('LLLL');
  }