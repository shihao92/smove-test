import Moment from 'moment';

export default function TimeModifier( data ) {
  data.map(( item, index ) => {
    data[index].book_start = Moment( item.book_start ).format( 'LLL' );
    data[index].book_end = Moment( item.book_end ).format( 'LLL' );
  });

  return data;
}