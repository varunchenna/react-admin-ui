import { GridColDef } from '@mui/x-data-grid';
import './Adduser.scss';

type Props ={
  slug:string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddUser(props: Props) {





  


  const handlesubmit =(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

  }

  return (
    <div className='add'>
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>X</span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handlesubmit}>
        {props.columns.filter(item => item.field !=="id" && item.field !=="img" && item.field !== "actions")
        .map((col)=>(
          <div className="item" key={col.field}>
            <label>{col.headerName}</label>
            <input type={col.type} placeholder={col.field}  id={col.field}  autoComplete='off'/>
          </div>
        ))}
        <button type='submit'>Add</button>
      </form>
      </div>
    </div>
  )
}
