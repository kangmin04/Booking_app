
import './dataTable.scss';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'

// interface Props {
//   id : number , 
//   img  :string , 
//   lastName : string , 
//   firstName : string , 
//   email : string , 
//   phone : string , 
//   createdAt : string ,  
//   verified : boolean
// }

type Props = {
  columns : GridColDef[] , 
  rows : object []
}


const DataTable = (props : Props) => {      

    const actions : GridColDef = {
      field : 'action' , 
      headerName : 'Action',
      width : 100 ,
      renderCell : (params) => (<>
      <Link to='/'>
          <img src='view.svg' alt="action logo" />
      </Link>
          <img src="delete.svg" alt="" />
      </>
      )
  } 

    return (
        <div className="dataTable">
           
            <DataGrid
                className='dataGrid'
                rows={props.rows}
                columns={[...props.columns , actions]}    // ... 연산자는 배열안에서 사용하는거다. 
                
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 10,
                    },
                },
                }}
                slots={{
                    toolbar: GridToolbar
                }}
                slotProps={{
                    toolbar : {
                        showQuickFilter : true ,
                        quickFilterProps : {
                         debounceMs : 500
                        }
                    } 
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
            />
        </div>
          
    )

}

export default DataTable
