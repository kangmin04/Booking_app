import './products.scss'
import DataTable from '../../components/dataTable/DataTable.jsx'
import {productRows} from '../../data.js'
import {useState} from 'react'; 
import Add from '../../components/add/Add.jsx';

const Products = () => {

     const [openAdd , setOpenAdd] = useState(false);  
  
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
            field: 'title',
            headerName: 'Title',
            width: 240,
            editable: true,
          },
          {
            field: 'color',
            headerName: 'Color',
            width: 150,
            editable: true,
          },
          {
            field: 'producer',
            headerName: 'Producer',
            type: 'string',
            width: 210,
            editable: true,
          },
          {
            field: 'price',
            headerName: 'Price',
            type: 'string',
            width: 150,
            editable: true,
          },
          {
            field: 'inStock',
            headerName: 'inStock',
            type: 'boolean',
            width: 150,
            editable: true,
          },
         
        ];


    return (
        <div className="products">
        <div className="info">
          <h1>Products</h1>
          <button className="productAddButton" onClick = {() => setOpenAdd(!openAdd)}>Add</button>
        </div>
        <div className="dataTable">
          <DataTable slug='products' columns={columns} rows={productRows} />
        </div>


        {openAdd && <Add columns={columns} slug='products' setOpenAdd={setOpenAdd}/>}
      </div>
          
    )

}

export default Products


 