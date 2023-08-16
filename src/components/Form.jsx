import React,{useState} from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const Form = (props) => {
  const [isExpanded,setExpanded] = useState(false);
  const [todosValue,setTodosValue] = useState({
    titel:'',
    content:'',
  });
  
  const inputChangeHandeler = (event) =>{
    const {className,value} = event.target;
    setTodosValue({
      ...todosValue,
      [className]:value
    })
  };
  const addBtnHandeler = (event) =>{
    event.preventDefault();
    if(todosValue.titel.length>0){
      props.AddNoteToList(todosValue);
      setTodosValue({
      titel:'',
      content:'',
    })
    setExpanded(false);
    }
  };
  const expandArea =()=>{
    setExpanded(true);
  }
  const shrinkArea=()=>{
    if(todosValue.titel.length === 0) setExpanded(false);
  }
  const onSubmit = (event) =>{
    event.preventDefault()
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit} className='create-note'>
        <input className='titel' value={todosValue.titel}
        onFocus={expandArea}
        onBlur={shrinkArea}
        onChange={inputChangeHandeler} placeholder='Titel'></input>
        
        {isExpanded?
          <textarea
          
                className='content' value={todosValue.content} onChange={inputChangeHandeler} placeholder='Content'>

          </textarea>
        :null}
        
        <Fab  
              onClick={addBtnHandeler}>
              <AddIcon />
        </Fab>
        
      </form>
    </React.Fragment>
  )
}

export default Form
