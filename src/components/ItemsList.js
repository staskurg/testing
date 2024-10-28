import { useState } from 'react';
import Item from './Item';

import classes from './ItemsList.module.scss';

const filterOptions = ['All', 'Complete', 'Incomplete'];

const ItemsList = ({ items = [] }) => {
  const [filterValue, setFilterValue] = useState(filterOptions[0]);

  const filterItems = (_items) => {
    if (filterValue === 'Complete') {
      return _items.filter((item) => item.completed);
    } else if (filterValue === 'Incomplete') {
      return _items.filter((item) => !item.completed);
    } else {
      return _items;
    }
  };

  const filteredItems = filterItems(items);

  return (
    <div className={classes.root}>
      <div>
        <label htmlFor="filter-select">Filter Data:</label>
        <select
          id="filter-select"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          {filterOptions.map((option) => (
            <option>{option}</option>
          ))}
        </select>
      </div>
      {filteredItems.length > 0 ? (
        <div>
          {filteredItems.map((item) => (
            <Item item={item} />
          ))}
        </div>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default ItemsList;
