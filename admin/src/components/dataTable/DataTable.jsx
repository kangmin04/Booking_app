
import './dataTable.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'

const DataTable = (props) => {      

    const actions = {
      field : 'action' , 
      headerName : 'Action',
      width : 100 ,
      renderCell : (params) => (
        <div className="actionContainer">
            <Link to={`/${props.slug}/${params.row.id}`}>
                <img src='view.svg' alt="action logo" />
            </Link>
            <img src="delete.svg" alt="" />
        </div>
      )
  } 

    return (
        <div className="dataTable">
           
            <DataGrid
                className='dataGrid'
                rows={props.rows}
                // getRowId={(rows) => rows._id}
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
