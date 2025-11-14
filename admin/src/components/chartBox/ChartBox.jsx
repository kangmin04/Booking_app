import "./chartBox.scss"
import { Link } from "react-router-dom"
import { Line, LineChart , Tooltip , ResponsiveContainer} from 'recharts';

const ChartBox = (props) => {
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt="" className="" />
                    <span>{props.title}</span>
                </div>
                <h1 className="number">{props.number}</h1>
                <Link to='/' className="view">View All</Link>
            </div>
            <div className="chartInfo">

                <div className="charts">
                {/* <ResponsiveContainer width="100%" height={100}> */}
                <LineChart
                    style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
                    responsive
                    data={props.chartData}
                   
                    >
                    <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2}  dot={false} />
                    <Tooltip contentStyle={{background: 'transparent', color: '#fff' , border : 'none'}} labelStyle={{display : 'none'}} position={{x : 50 , y : 50}}/>
                    </LineChart>
                    {/* </ResponsiveContainer > */}
                </div>
                <div className="texts">
                    <span className="percentage" style={{color : (props.percentage > 0 ? 'green' : 'tomato')}}>{props.percentage}%</span>
                    <span className="duration">this month</span>
                </div>
            
            </div>
        </div>
    )
}


export default ChartBox;