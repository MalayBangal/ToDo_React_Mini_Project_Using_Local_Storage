import React from 'react'
import Fab from '@mui/material/Fab';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const List = (props) => {
  const deleteNoteFromList = (idx) =>{
    props.deleteNoteFromList(idx);
  }
  return (
    <React.Fragment>
      <ul>
          {props.todosList.map((ele,idx)=>{
            return <div className='note' key={idx}>
              <h1> {ele.titel} </h1>
              <p> {ele.content} </p>

              <Fab onClick={()=>{
                  deleteNoteFromList(idx)
                }}>
                 <DeleteRoundedIcon style={{fontSize:'medium'}}/>
              </Fab>

            </div>
          })}
        </ul>
        
    </React.Fragment>
  )
}

export default List