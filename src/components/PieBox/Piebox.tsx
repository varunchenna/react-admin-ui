import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './Piebox.scss';

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 400, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" }
]

export default function Piebox() {
  return (
    <div className='piebox'>
      <h2>Lead by Source</h2>
        <div className="chart" style={{height: 400}}>
            <ResponsiveContainer width="99%" height={300}>
                <PieChart >
                    <Tooltip contentStyle={{background: "white"}} />
                    <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value" >
                        {data.map((item) => (
                        <Cell key={item.name} fill={item.color} />
                ))}
                    </Pie>
                </PieChart> 
            </ResponsiveContainer> 
        </div>
        <div className="bottom">
            { data.map((item) =>(
                <div className="block" key={item.name}>
                    <div className="top">
                        <div className="dot" style={{background:item.color}}></div>
                        <span>{item.name}</span>
                    </div>
                    <h5>{item.value}</h5>
                </div>
            ))}
        </div>
    </div>
  )
}
