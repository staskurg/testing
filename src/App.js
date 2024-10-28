import TodoApp from './pages/TodoApp';

import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.root}>
      <TodoApp />
    </div>
  );
};

export default App;
