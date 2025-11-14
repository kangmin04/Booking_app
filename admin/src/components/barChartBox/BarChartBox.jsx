import './barChartBox.scss';
import { BarChart, Bar , Tooltip} from 'recharts';

const BarChartBox = (props) => {



    return (
        <div className="barChart">
           <div className="boxInfo">
            <h1 className="title">{props.title}</h1>
           </div>
           <div className="chartInfo">
           <BarChart
            style={{ width: '100%', maxWidth: '300px', maxHeight: '180px', aspectRatio: 1.618 }}
            responsive
            data={props.chartData}
            >
            <Tooltip wrapperStyle={{background:'transparent' , border : 'none'}} contentStyle={{background:'transparent' , border : 'none'}} labelStyle={{display : 'none'}} position={{x : 50 , y : 10}} 
            cursor={{fill : 'none'}}/>
                <Bar dataKey={props.dataKey} fill={props.color} />
            </BarChart>
           </div>
        </div>
    )
}

export default BarChartBox ; 