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
            <DataTable slug='products' columns={columns} rows={productRows} />
          </div>
        </div>
          
    )

}

export default Products