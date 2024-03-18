import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Bigchartbox.scss';


const data = [
    {
      name: 'Sun',
      books: 4000,
      cloths: 2400,
      electronics: 2400,
    },
    {
        name: 'Mon',
        books: 3000,
        cloths: 1365,
        electronics: 1398,
    },
    {
        name: 'Tue',
        books: 5000,
        cloths: 2210,
        electronics: 2239,
    },
    {
        name: 'Wed',
        books: 2490,
        cloths: 5490,
        electronics: 3000,
    },
    {
        name: 'Thu',
        books: 3490,
        cloths: 4300,
        electronics: 2100,
    },
    {
        name: 'Fri',
        books: 3497,
        cloths: 3800,
        electronics: 4540,
    },
    {
        name: 'Sat',
        books: 5600,
        cloths: 5000,
        electronics: 1500,
      },

  
  ];


export default function Bigchartbox() {
  return (
    <div className='bigchartbox'>
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
            <AreaChart
                data={data}
                 margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                 }}
            >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{background: "transparent" , border: "none"}} />
            <Area type="monotone" dataKey="books" stackId="1" stroke="drakbrown" fill="limegreen" />
            <Area type="monotone" dataKey="cloths" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="electronics" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
