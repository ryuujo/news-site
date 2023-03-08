import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function Clock() {
  const [dateTime, setDateTime] = useState(DateTime.now());

  useEffect(() => {
    setInterval(() => {
      setDateTime(DateTime.now());
    }, 1000);
  }, []);

  return (
    <div className='uppercase text-xs lg:text-base'>
      <div className='inline-flex md:border-b-2 md:pb-2 pr-1.5 md:border-primary'>
        {dateTime.weekdayLong}
      </div>
      <div className='inline-flex md:pb-2 md:border-b-2 pl-1.5 pr-1.5 md:border-primary'>
        {dateTime.toLocaleString(DateTime.DATE_FULL)}
      </div>
      <div className='inline-flex md:pb-2 md:border-b-2 pl-1.5 md:border-secondary'>
        {dateTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
      </div>
    </div>
  );
}

export default Clock;
