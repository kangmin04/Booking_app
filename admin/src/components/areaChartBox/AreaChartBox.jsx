import "./areaChartBox.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  
const AreaChartBox = () => {
    return (
        <div className="areaChartBox">
            <div className="boxInfo">
                <div className="title">
                   <h1>Revenue </h1>
                </div>
            
            </div>
            <div className="areaChartInfo">

                <div className="areaChart">
                    <AreaChart
                    style={{ width: '100%', maxWidth: '900px', height: '40vh', aspectRatio: 1.618 }}
                    responsive
                    data={data}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Tooltip wrapperStyle={{background:'transparent' , border : 'none'}} contentStyle={{background:'transparent' , border : 'none'}} labelStyle={{display : 'none'}} position={{x : 400 , y : 10}} 
                    cursor={{fill : 'none'}} />
                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </div>
                
            </div>
        </div>
    )
}


export default AreaChartBox;