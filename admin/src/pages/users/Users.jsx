import DataTable from '../../components/dataTable/DataTable'
import './users.scss'
import {userRows} from '../../data.js'
import {useState} from 'react'; 
import Add from '../../components/add/Add.jsx';
import useFetch from '../../hooks/useFetch.js';

const Users = () => {
      const [openAdd , setOpenAdd] = useState(false);  

      const {data} = useFetch('/api/users');
      // console.log(data);
      // Object.entries(data).map((prev) => {
      //   return ([...prev , 
      //     {
      //       'id' : prev._id,
            
      //     }
      //   ])
      // })

      const dataWithId = data.map(item => (
        {
        ...item, id: item._id
      }
      )
      );

      console.log(data); 
      const columns = [
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
        
          // {
          //   field: 'firstName',
          //   headerName: 'First name',
          //   width: 150,
          //   editable: true,
          // },
          // {
          //   field: 'lastName',
          //   headerName: 'Last name',
          //   width: 150,
          //   editable: true,
          // },
           {
            field: 'username',
            headerName: 'Username',
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
            field: 'password',
            headerName: 'Password',
            width: 120 ,
            type : 'password'
        },
          {
            field: 'phone',
            headerName: 'Phone',
            type: 'string',
            width: 150,
            editable: true,
          },
          // {
          //   field: 'fullName',
          //   headerName: 'Full name',
          //   description: 'This column has a value getter and is not sortable.',
          //   sortable: false,
          //   width: 160,
          //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
          // },
        //   {   
        //     field: 'verified',
        //     headerName: 'verified',
        //     width: 120 ,
        //     type : 'boolean'
        // }, 

        {
          field: 'country',
          headerName: 'Country',
          type: 'string',
          width: 210,
         
        },
        ];

    return (
      
        <div className="user">
          <div className="info">
            <h1>User</h1>
            <button className="userAddButton" onClick = {() => setOpenAdd(!openAdd)}>Add</button>
          </div>
          <div className="dataTable">
            <DataTable slug='users' columns={columns} rows={dataWithId} />
          </div>


          {openAdd && <Add columns={columns} slug='users' setOpenAdd={setOpenAdd}/>}
        </div>

    
          
    )

}

export default Users
