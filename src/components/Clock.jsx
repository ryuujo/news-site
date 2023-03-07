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
    <div className="uppercase">
      <div className="inline-flex border-b-2 pb-2 pr-1.5 border-primary">
        {dateTime.weekdayLong}
      </div>
      <div className="inline-flex pb-2 border-b-2 pl-1.5 pr-1.5 border-primary">
        {dateTime.toLocaleString(DateTime.DATE_FULL)}
      </div>
      <div className="inline-flex pb-2 border-b-2 pl-1.5 border-secondary">
        {dateTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
      </div>
    </div>
  );
}

export default Clock;
