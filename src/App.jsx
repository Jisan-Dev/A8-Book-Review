import { useState } from 'react';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <h1 className="font-playFair font-bold text-[56px]">
        Books to freshen up <br />
        your bookshelf
      </h1>
      <p className="font-workSans text-base bg-[#202124] text-white  p-10 font-normal leading-none text-optical-sizing">Books to freshen up your bookshelf</p>
      <p className="font-workSans text-base bg-[#202124] text-white  p-10 font-normal leading-none text-optical-sizing">Pages to read</p>
      <div className="card font-workSans">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
