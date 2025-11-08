import './products.scss'
import DataTable from '../../components/dataTable/DataTable.tsx'
import {productRows} from '../../data.ts'
import { GridColDef } from '@mui/x-data-grid'

const Products = () => {
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
        <div className="product">
          <div className="productNav">
            <div className="title">Products</div>
            <button className="productAddButton">Add</button>
          </div>
          <div className="dataTable">
            <DataTable columns={columns} rows={productRows} />
          </div>
        </div>
          
    )

}

export default Products