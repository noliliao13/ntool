import { getCurrentYearMonthDay } from '@/utils/date';
import { useState } from 'react';

const TimeInfo: React.FC = () => {
  const dateInfo = getCurrentYearMonthDay();
  const [week, setWeek] = useState(dateInfo.week);
  const [date, setDate] = useState(dateInfo.date);
  const [time, setTime] = useState(dateInfo.time);
  setInterval(() => {
    const result = getCurrentYearMonthDay();
    setWeek(result.week);
    setDate(result.date);
    setTime(result.time);
  }, 1000);

  return (
    <div style={{ background: 'rgba(231,231,231,0.85)', padding: 12, paddingLeft: 20 }}>
      <div
        style={{
          display: 'inline',
          fontSize: 20,
          color: 'green',
          fontWeight: 700,
          marginRight: 12,
        }}
      >
        {week}
      </div>
      <div
        style={{
          display: 'inline',
          fontSize: 20,
          color: 'green',
          fontWeight: 700,
          marginRight: 12,
        }}
      >
        {date}
      </div>
      <div
        style={{
          display: 'inline',
          fontSize: 22,
          color: 'blue',
          fontWeight: 700,
          marginRight: 12,
        }}
      >
        {time}
      </div>
    </div>
  );
};

export default TimeInfo;
