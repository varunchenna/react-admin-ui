import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './SinglePage.scss'


type Props ={
  id:number;
  img : string;
  title: string;
  info:object;
  charts:{
    dataKeys: { name: string;
                color: string; 
              }[];
    data: object[];
  };
  activities?: {
    time: string;
    text: string;
  }[]
}

export default function SinglePage(props: Props) {
  return (
    <div className='single'>
      <div className="view">
        <div className="info">
            <div className="topinfo">
                <img src={props.img} alt="" />
                <h1>{props.title}</h1>
            </div>
            <div className="details">
                {Object.entries(props.info).map((item) => (
                  <div className="item">
                    <span className="itemTitle">{item[0]}</span>
                    <span className="itemValue">{item[1]}</span>
                  </div>
                ))}
            </div>
        </div>
        <hr />
        <div className="chart">
            {props.charts && <ResponsiveContainer width="100%" height="100%">
                <LineChart
                        width={500}
                        height={300}
                        data={props.charts.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                            }}>

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background:"transparent", border:"none"}} />
                    <Legend />
                    {props.charts.dataKeys.map(datakey => (
                      <Line type="monotone" dataKey={datakey.name} stroke={datakey.color} />
                    ))}
                </LineChart>
            </ResponsiveContainer>}
        </div>
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        { props.activities && <ul>
            {props.activities.map((activity) => (
            <li key={activity.text}>
                <div>
                    <p>{activity.text}</p>
                    <time>{activity.time}</time>
                </div>
            </li>))}
        </ul> }
      </div>
    </div>
  )
}
