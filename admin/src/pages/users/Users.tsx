import DataTable from '../../components/dataTable/DataTable'
import './users.scss'
import {userRows} from '../../data.ts'
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import {useState} from 'react'; 
import Add from '../../components/add/Add.tsx';

const Users = () => {
      const [openAdd , setOpenAdd] = useState(false);  

      const columns: GridColDef[] = [
          {   
              field: 'id',
              headerName: 'ID',
              width: 90 
          },
          {
              field : 'img' , 
              headerName : 'Img',
              width : 100 ,
              renderCell : (params) => (
                  <img src={params.row.img || "/noavatar.png"} alt="" />
              )
          } ,
        
          {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
          },
          {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
          },
          {
            field: 'email',
            headerName: 'Email',
            type: 'string',
            width: 210,
            editable: true,
          },
          {
            field: 'phone',
            headerName: 'Phone',
            type: 'string',
            width: 150,
            editable: true,
          },
          {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
          },
          {   
            field: 'verified',
            headerName: 'verified',
            width: 120 ,
            type : 'boolean'
        },
        ];

    return (
      
        <div className="user">
          <div className="info">
            <h1>User</h1>
            <button className="userAddButton" onClick = {() => setOpenAdd(!openAdd)}>Add</button>
          </div>
          <div className="dataTable">
            <DataTable slug='users' columns={columns} rows={userRows} />
          </div>


          {openAdd && <Add columns={columns} slug='users' setOpenAdd={setOpenAdd}/>}
        </div>

    
          
    )

}

export default Users
