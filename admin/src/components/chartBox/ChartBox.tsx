import "./chartBox.scss"
import { Link } from "react-router-dom"
import { Line, LineChart , Tooltip , ResponsiveContainer} from 'recharts';

type Props = {
    color: string , 
    icon : string , 
    title : string , 
    number : string , 
    dataKey : string , 
    percentage : number , 
    chartData : object[]
}
const ChartBox = (props : Props) => {
    // const data = [
    //     {
    //       name: 'Page A',
    //       uv: 4000,
    //       pv: 2400,
    //       amt: 2400,
    //     },
    //     {
    //       name: 'Page B',
    //       uv: 3000,
    //       pv: 1398,
    //       amt: 2210,
    //     },
    //     {
    //       name: 'Page C',
    //       uv: 2000,
    //       pv: 9800,
    //       amt: 2290,
    //     },
    //     {
    //       name: 'Page D',
    //       uv: 2780,
    //       pv: 3908,
    //       amt: 2000,
    //     },
    //     {
    //       name: 'Page E',
    //       uv: 1890,
    //       pv: 4800,
    //       amt: 2181,
    //     },
    //     {
    //       name: 'Page F',
    //       uv: 2390,
    //       pv: 3800,
    //       amt: 2500,
    //     },
    //     {
    //       name: 'Page G',
    //       uv: 3490,
    //       pv: 4300,
    //       amt: 2100,
    //     },
    //   ];
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
                    <span className="percentage" style={{color : (props.percentage > 0 ? 'mangogreen' : 'tomato')}}>{props.percentage}%</span>
                    <span className="duration">this month</span>
                </div>
            
            </div>
        </div>
    )
}


export default ChartBox;