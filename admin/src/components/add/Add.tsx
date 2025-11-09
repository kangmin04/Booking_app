import './add.scss'
import {userRows} from '../../data.ts'
import { GridColDef } from '@mui/x-data-grid'

type Props = {
    columns : GridColDef [] , 
    slug : string
}
const Add = (props : Props) => {

    return (
        <div className="add">
            <div className="addContainer">
                <div className="title">Add {props.slug}</div>
                <div className="form">
                    {props.columns.map((col) => (
                        <div className="formRow">
                            <div className="formTitle">{col.field}</div>
                            <input type="text" placeholder="" className='input'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Add