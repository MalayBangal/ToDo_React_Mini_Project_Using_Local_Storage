import React,{useEffect, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';
function App() {

  const [todosList,setTodosList] = useState(
    localStorage.getItem('todosList')?JSON.parse(localStorage.todosList):[]
  );

  useEffect(()=>{
    // localStorage.todosList = JSON.stringify(todosList)

    localStorage.setItem('todosList',JSON.stringify(todosList))
  },[todosList]);

  const AddNoteToList = (note) =>{
    setTodosList([...todosList,note]);

    // setTodosList((prevState)=>{
    //   return[...prevState,todosValue];
    // })

  }
  const deleteNoteFromList = (index) =>{
    const newArr = todosList.filter((item, idx) =>{return index !== idx})
    setTodosList(newArr);
  }
  
    return (
    <React.Fragment>
      <Header/>
      <Form AddNoteToList={AddNoteToList} />
      <List todosList={todosList} deleteNoteFromList={deleteNoteFromList} />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
