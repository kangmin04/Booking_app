
import './dataTable.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import {Link} from 'react-router-dom'

const DataTable = (props) => {      
    const handleDelete = async (id) => {
        try{
            const res = await axios.delete(`/api/${props.slug}/${id}`) ; 
            console.log(res); 
            console.log('------------deleted-------------'); 
        }catch(err){
            console.log(err); 
        }
        
        return (
            console.log('does this required? ')
        )
    }
    

    const actions = {
      field : 'action' , 
      headerName : 'Action',
      width : 100 ,
      renderCell : (params) => (
        <div className="actionContainer">
            <Link to={`/${props.slug}/${params.row.id}`}>
                <img src='/view.svg' alt="action logo" />
            </Link>
            <img src="/delete.svg" alt=""  onClick={() => handleDelete(params.row.id)}/>
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
                    pageSize: 15,
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
