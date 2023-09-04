import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.jsx';
import { useSettingsContext } from '../../Context/Settings/index.jsx';
import { v4 as uuid } from 'uuid';
import { Pagination, Container, Text, TextInput, Slider, Button } from '@mantine/core';
import List from '../List/index.jsx';
import './todo.scss';

const Todo = () => {
  const { maxItemsPerPage, hideCompleted } = useSettingsContext();
  const [sort, setSort] = useState('difficulty');
  const [defaultValues] = useState({ difficulty: 4 });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit, values } = useForm(addItem, defaultValues);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedList = list.slice().sort((a, b) => {
    if (sort === 'difficulty') {
      return a.difficulty - b.difficulty;
    }
  });

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
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

  const filteredList = hideCompleted
    ? list.filter(item => !item.complete)
    : list;

  const paginatedList = filteredList.slice(
    (currentPage - 1) * maxItemsPerPage,
    currentPage * maxItemsPerPage
  );

  return (
    <Container size="xs">
      <Text align="center" size="xl">
        To Do List: {incomplete} items pending
      </Text>
      <form onSubmit={handleSubmit} className="todo-form">
        <Text size="lg" weight={700} align="center" className="todo-form-label">
          Add To Do Item
        </Text>
        <TextInput
          value={values.text}
          onChange={handleChange}
          name="text"
          label="To Do Item"
          placeholder="Item Details"
          required
          className="todo-form-input"
        />
        <TextInput
          value={values.assignee}
          onChange={handleChange}
          name="assignee"
          label="Assigned To"
          placeholder="Assignee Name"
          required
          className="todo-form-input"
        />
        <Slider
          value={values.difficulty}
          onChange={(value) => handleChange('difficulty', value)}
          min={1}
          max={5}
          label="Difficulty"
          className="todo-form-input"
        />

        <Button type="submit" variant="primary" className="todo-button">
          Add Item
        </Button>
      </form>
      <List items={sortedList} toggleComplete={toggleComplete} />

      {list.length > maxItemsPerPage && (
        <Pagination
          itemsPerPage={maxItemsPerPage}
          total={filteredList.length}
          page={currentPage}
          onChange={(newPage) => setCurrentPage(newPage)}
          withPagesCount
        />
      )}
    </Container>
  );
};

export default Todo;
