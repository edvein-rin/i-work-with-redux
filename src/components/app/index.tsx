import { FC, useState } from 'react';

import classes from './styles.module.css';

export const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <h1>I work with Redux ✨</h1>
        <div className={classes.card}>
          <span>Count is {count}</span>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};
