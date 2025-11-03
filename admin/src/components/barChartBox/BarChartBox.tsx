import './barChartBox.scss';
import { BarChart, Bar , Tooltip} from 'recharts';

interface Props {
    title : string , 
    color : string , 
    dataKey : string , 
    chartData : object[]
}
const BarChartBox = (props : Props) => {



    return (
        <div className="barChart">
           <div className="boxInfo">
            <div className="title">{props.title}</div>
           </div>
           <div className="chartInfo">
           <BarChart
            style={{ width: '100%', maxWidth: '300px', maxHeight: '180px', aspectRatio: 1.618 }}
            responsive
            data={props.chartData}
            >
            <Tooltip wrapperStyle={{background:'transparent' , border : 'none'}} contentStyle={{background:'transparent' , border : 'none'}} labelStyle={{display : 'none'}} position={{x : 50 , y : 50}}/>
            <Bar dataKey={props.dataKey} fill={props.color} />
            </BarChart>
           </div>
        </div>
    )
}

export default BarChartBox ; 