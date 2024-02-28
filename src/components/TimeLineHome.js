import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
// import './TimeLineHomeStyles.css'


const TimeLineHome = ({data}) => {
    // Prepare chart data from detections
  const chartData = data.map(detection => ({
    time: detection.time,
    detections: detection.objects.length,
    // objects:detection.objects,
    objects: detection.objects.join(', '),
  }));
  const isEmpty = data.length === 0;
  const defaultData = Array.from({ length: 8 }, (_, index) => ({ time: index, detections: 0 }));

  return (
    <div style={{ overflowX: 'auto' }}>
      <LineChart
        className='bg-custom-gray bg-opacity-120'
        
        width={1032}
        height={223}
        data={isEmpty ? defaultData: chartData}
        margin={{ right: 20, left:20, top:15, bottom: 10 }}
      >
        <CartesianGrid stroke="#767676" strokeOpacity={4} strokeWidth={0.5} />
        <XAxis className='text-xs' dataKey="time" />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="detections" stroke="#3f73a5" dot={<CustomDot />} />
      </LineChart>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label}) => {
  if (active && payload && payload.length) {
    const objects = payload[0].payload.objects;
    return (
      <div className="p-2 bg-slate-900 flex flex-col gap-0 rounded-md">
        <p className="text-sm text-lg text-white">{`${label} sec`}</p>
        <p className="text-sm text-indigo-400">
          Detections:
          <span className="ml-2">{objects}</span>
        </p>
      </div>
    );
  }
};

const CustomDot = (props) => {
  const { cx, cy, stroke, payload } = props;

  return (
    <svg
      x={cx - 5}
      y={cy - 5}
      width={10}
      height={10}
      viewBox="0 0 15 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x={3} y={3} width={4} height={4} fill="#f3be00" stroke="#f3be00" strokeWidth="2" />
    </svg>
  );
};

export default TimeLineHome;