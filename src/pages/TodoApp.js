import { useEffect, useState } from 'react';
import CreateNewItem from '../components/CreateNewItem';
import ItemsList from '../components/ItemsList';

import { getItemsList } from '../api/todoAPI';

import classes from './TodoApp.module.scss';

const TodoApp = () => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleCreateNewItem = (newItem) => {
    console.log(newItem);
    setItemList((oldList) => [...oldList, newItem]);
  };

  const updateItem = (item) => {};

  const deleteItem = (item) => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todoData = await getItemsList();
        if (
          todoData &&
          todoData.TodoItems &&
          Array.isArray(todoData.TodoItems) &&
          todoData.TodoItems.length > 0
        ) {
          setItemList(todoData.TodoItems);
        }
      } catch (error) {
        console.log('Error fetching Todo items:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <CreateNewItem onCreateNewItem={handleCreateNewItem} />
      <ItemsList items={itemList} />
    </div>
  );
};

export default TodoApp;
