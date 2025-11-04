import './users.scss'

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const Users = () => {


const rows: GridRowsProp = [
  { id: 1, name: 'Data Grid', description: 'the Community version' },
  { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
  { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
];

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
];


    return (
        <div className="user">
        <div style={{ height: 600, width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
       />
        </div>
        </div>
          
    )

}

export default Users
