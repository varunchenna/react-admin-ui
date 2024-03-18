import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/DataTable/DataTable';
import './users.scss';
import { userRows } from '../../data';
import { useState } from 'react';
import AddUser from '../../components/AddUser/Adduser';


const columns: GridColDef[] = [
  { 
    field: 'id',
    headerName: 'ID',
    width: 90 },
  { 
    field: 'img',
    headerName:'Image',
    width: 100,
      renderCell: (params) => {
          return <img src={params.row.img || "/noavatar.png"}  alt='' />
      }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 140,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 140,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 220,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
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
    field:"verified",
    headerName:"Verified",
    width:80,
    type:"boolean"
  }
];




export default function users() {
const [open,setOpen] = useState(false)

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=> setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug='users' columns={columns}  row={userRows}/> 
      {open && <AddUser slug='user' columns={columns} setOpen={setOpen} /> }
    </div>
  )
}