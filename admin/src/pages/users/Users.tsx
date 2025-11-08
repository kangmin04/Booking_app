import DataTable from '../../components/dataTable/DataTable'
import './users.scss'
import {userRows} from '../../data.ts'
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';



const Users = () => {
      const columns: GridColDef[] = [
          {   
              field: 'id',
              headerName: 'ID',
              width: 90 
          },
          //추후 데이터에 img 넣어줌으로써 row.img 기능하게 할것. 
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
        ];

    return (
        <div className="user">
          <div className="userNav">
            <div className="title">User</div>
            <button className="userAddButton">Add</button>
          </div>
          <div className="dataTable">
            <DataTable columns={columns} rows={userRows} />
          </div>
        </div>
          
    )

}

export default Users
