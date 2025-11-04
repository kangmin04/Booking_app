import "./pieChartBox.scss"
import { Tooltip , PieChart , Pie } from 'recharts';

// type Props = {
//     color: string , 
//     icon : string , 
//     title : string , 
//     number : string , 
//     dataKey : string , 
//     percentage : number , 
//     chartData : object[]
// }
const data = [
    { name: 'Group A', value: 400, fill: '#0088FE' },
    { name: 'Group B', value: 300, fill: '#00C49F' },
    { name: 'Group C', value: 300, fill: '#FFBB28' },
    { name: 'Group D', value: 200, fill: '#FF8042' },
  ];

const PieChartBox = () => {
    return (
        <div className="pieChartBox">
            <div className="boxInfo">
                <div className="title">
                   <h1>Leads by Source</h1>
                </div>
            
            </div>
            <div className="pieChartInfo">

                <div className="pieChart">
                <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} responsive >
                    <Pie 
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="4%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Tooltip contentStyle={{backgroundColor : 'transparent' , border : 'none' }} labelStyle={{color : 'white'}}/>
                    </PieChart>
                </div>
                <div className="textInfo">
                    {
                        data.map((item) => (
                            <div className="info" key={item.name}>
                                <div className="colorContainer">
                                    <div className="color" style={{backgroundColor: item.fill}}></div>
                                </div>
                                <div className="textContainer">
                                    <div className="sourceTitle">{item.name}</div>
                                    <div className="sourceValue">{item.value}</div>
                                </div>
                            </div>
                        ))
                        
                    }
                    
                </div>
            
            </div>
        </div>
    )
}


export default PieChartBox;