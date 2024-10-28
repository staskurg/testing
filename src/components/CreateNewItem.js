import { useState } from 'react';
import classes from './CreateNewItem.module.scss';

const CreateNewItem = ({ onCreateNewItem }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completeBy, setCompleteBy] = useState('');

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCompleteBy('');
  };

  const isFormValid = () => title && description && completeBy;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onCreateNewItem({
        title,
        description,
        completeBy,
        id: crypto.randomUUID(),
      });
      resetForm();
    } else {
      console.log('Please fill out the form');
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={completeBy}
          onChange={(e) => setCompleteBy(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateNewItem;
