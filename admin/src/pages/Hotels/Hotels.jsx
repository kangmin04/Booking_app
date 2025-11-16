import './hotels.scss'
import DataTable from '../../components/dataTable/DataTable.jsx'
import {useState} from 'react'; 
import Add from '../../components/add/Add.jsx';
import useFetch from '../../hooks/useFetch.js';

const Hotels = () => {

    const [openAdd , setOpenAdd] = useState(false);  
    const {data} = useFetch('/api/hotels'); 
    console.log('useFetch로 가져온 데이터들 : ' , data);

    const dataWithId = data.map(item => (
      {
      ...item, id: item._id
    }
    )
    );

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
          {
            field: 'name',
            headerName: 'Name',
            type: 'string',
            width: 200,
            editable: true,
          },
          {
            field: 'type',
            headerName: 'Type',
            type: 'string',
            width: 100,
            editable: true,
          },
          {
            field: 'city',
            headerName: 'City',
            type: 'string',
            width: 100,
            editable: true,
          },
          {
            field: 'address',
            headerName: 'Address',
            type: 'string',
            width: 210,
            editable: true,
          },
          {
            field: 'distance',
            headerName: 'Distance',
            type: 'string',
            width: 100,
            editable: true,
          },
          {
            field: 'desc',
            headerName: 'Description',
            type: 'string',
            width: 200,
            editable: true,
          },
          {
            field: 'rating',
            headerName: 'Rating',
            type: 'number',
            width: 70,
            editable: true,
          },
          {
            field: 'cheapestPrice',
            headerName: 'Price',
            type: 'number',
            width: 100,
            editable: true,
          },
          {
            field: 'featured',
            headerName: 'Featured',
            type: 'boolean',
            width: 150,
            editable: true,
          },
         
        ];


    return (
        <div className="Hotels">
        <div className="info">
          <h1>Hotels</h1>
          <button className="hotelAddButton" onClick = {() => setOpenAdd(!openAdd)}>Add</button>
        </div>
        <div className="dataTable">
          <DataTable slug='Hotels' columns={columns} rows={dataWithId} />
        </div>


        {openAdd && <Add columns={columns} slug='Hotels' setOpenAdd={setOpenAdd}/>}
      </div>
          
    )

}

export default Hotels
