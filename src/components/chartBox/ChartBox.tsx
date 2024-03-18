import { Link } from 'react-router-dom'
import './chartbox.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'


type Props ={
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[ ]
}
  


export default function ChartBox(props: Props) {
  return (
    <div className='chartbox'>
        <div className='boxInfo'>
            <div className='title'>
                <img src={props.icon} />
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to="/" style={{color:props.color}}>View all</Link>
        </div>
        <div className='chartInfo'>
            <div className='chart'>
                <ResponsiveContainer width="99%" height="99%">
                    <LineChart data={props.chartData}>
                        <Tooltip
                        contentStyle={{background:"transparent", border:"none"}} 
                        labelStyle={{display:"none"}}
                        position={{x:20, y:25}} />

                        <Line type="monotone"
                        dataKey={props.dataKey}
                        stroke={props.color}
                        strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='texts'>
                <span className='percentage' style={{color: props.percentage < 0 ? "tamato" : "limegreen"}} >{props.percentage}</span>
                <span className="duration">This month</span>
            </div>
        </div>      
    </div>
  )
}
