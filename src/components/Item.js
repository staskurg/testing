import classes from './Item.module.scss';

const Item = ({ item, onComplete, onEdit, onDelete }) => {
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.completeContainer}>
          <div>Completed: {item.completed ? 'Yes' : 'No'}</div>
        </div>
        <div className={classes.mainInfoContainer}>
          <div>Title: {item.title}</div>
          <div>Description: {item.description}</div>
        </div>
        <div className={classes.modifyContainer}>
          <button onClick={() => onComplete(item)}>Complete</button>
          <button onClick={() => onEdit(item)}>Edit</button>
          <button onClick={() => onDelete(item)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
