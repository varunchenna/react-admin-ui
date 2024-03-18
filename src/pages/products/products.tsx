import { useState } from "react"
import AddUser from "../../components/AddUser/Adduser"
import DataTable from "../../components/DataTable/DataTable"
import { ProductRows } from "../../data";
import { GridColDef } from "@mui/x-data-grid";
import './products.scss';

const columns: GridColDef[] = [
  { field: 'id',
    headerName: 'ID',
    width: 90 },
  { field: 'img',
    headerName:'image',
    width: 100,
      renderCell: (params) => {
          return <img src={params.row.img || "/noavatar.png"}  alt='' />
      }
  },
  {
    field: 'title',
    headerName: 'Title',
    type: "string",
    width: 240,
    editable: true,
  },
  {
    field: 'color',
    headerName: 'Color',
    type: "string",
    width: 140,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: "string",
    width: 180,
    editable: true,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: "string",
    width: 180,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field:"inStock",
    headerName:"In Stock",
    width:80,
    type:"boolean"
  },
];

export default function products() {
  const [open,setOpen] = useState(false)

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=> setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug='products' columns={columns}  row={ProductRows}/> 
      {open && <AddUser slug='product' columns={columns} setOpen={setOpen} /> }
    </div>
  )
}
