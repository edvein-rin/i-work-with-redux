import { useState } from 'react';

import { styles } from '@/modules/shared';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      className={styles(
        'mx-auto max-w-7xl min-h-[100dvh]',
        'flex flex-col items-center justify-center'
      )}
    >
      <div className="p-4 text-center">
        <h1>I work with Redux ✨</h1>
        <div className="flex items-center justify-center gap-4">
          <span>Count is {count}</span>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};
