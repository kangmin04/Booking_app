import './single.scss'
import { LineChart , Line , Tooltip, CartesianGrid, XAxis, YAxis, Legend} from 'recharts'

const Single = () => {
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
    return (
        <div className="single">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        <img src="user.svg" alt="" />
                        <h1>Kim Knamgin</h1>
                        <button>update</button>
                    </div>
                    <div className="details">
                        <div className="item">
                            <span className="itemTitle">username : </span>
                            <span className="itemValue">kangmin</span>
                        </div>
                    </div>
                </div>
                <div className="chart">
                <LineChart
                    style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
                    
                </div>
            </div>
            <div className="activites">
                <h2>Latest Activity</h2>
                <ul>
                    <li>
                        <div className="">
                            <p>kim purchased ps 5 </p>
                            <time>3 days ago</time>
                        </div>
                    </li>
                    <li>
                        <div className="">
                            <p>kim purchased ps 5 </p>
                            <time>3 days ago</time>
                        </div>
                    </li>
                    <li>
                        <div className="">
                            <p>kim purchased ps 5 </p>
                            <time>3 days ago</time>
                        </div>
                    </li>
                    <li>
                        <div className="">
                            <p>kim purchased ps 5 </p>
                            <time>3 days ago</time>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Single