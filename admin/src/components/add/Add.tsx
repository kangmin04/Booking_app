import './add.scss'
import {userRows} from '../../data.ts'
import { GridColDef } from '@mui/x-data-grid'

type Props = {
    columns : GridColDef [] , 
    slug : string , 
    setOpenAdd : React.Dispatch<React.SetStateAction<boolean>>
}
const Add = (props : Props) => {

    const handleSubmit = () => {
         // Send data to the server
         
    }
    return (
        <div className="add">
            <div className="addContainer">
                <h1 className="title">Add {props.slug}</h1>
                <span className="close" onClick={() => props.setOpenAdd(false)}>X</span>
                <div className="form" onSubmit={handleSubmit}>
                    {props.columns.filter((col) => col.field !== 'id').map((col) => (
                        <div className="formRow">
                            <label>{col.headerName}</label>
                            <input type={col.type} placeholder={col.field} className='input'/>
                        </div>
                     
                    ))}
                       <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Add