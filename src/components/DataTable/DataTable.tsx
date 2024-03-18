import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './DataTable.scss';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
    columns: GridColDef[],
    row: object[],
    slug: string
}



export default function DataTable(props: Props) {

    const handleDelete = (id: number) =>{
        console.log("id is deleted")
    }


    const actionColumns: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 100,
        renderCell:(params)=>{
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                    <img src="/view.svg" alt="" />
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="" />
                    </div>
                </div>
            );
        }
    }


  return (
    <div className="datatable">
        <Box sx={{ height: 560, width: '100%' }}>
            <DataGrid className='datagrid'
                rows={props.row}
                columns={[...props.columns,actionColumns]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 4,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter:true,
                        quickFilterProps: { debounceMs: 500 },
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableColumnFilter
                disableRowSelectionOnClick
                disableDensitySelector
                disableColumnSelector
            />
        </Box>
    </div>
  )
}
