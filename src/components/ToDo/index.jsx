import React, { useEffect, useState , useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/index'; 
import useForm from '../../hooks/form.js';
import List from '../List/index.jsx'

import { v4 as uuid } from 'uuid';
import { Pagination } from '@mantine/core';




const ToDo = () => {
  
  const settings =useContext(SettingsContext);
  

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const [currentPage, setCurrentPage] = useState(1);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);


  return (
    <>
      <div className="ToDo">
        <h1>To Do List: {incomplete} items pending</h1>
      

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>
    
        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>


      <List items={list} toggleComplete={toggleComplete} />
      
     
        <Pagination
          itemsPerPage={settings.items}
          total={10}
          page={currentPage}
          onChange={(newPage) => setCurrentPage(newPage)}
        />
   
      
      </div>
    </>
  );
};

export default ToDo;