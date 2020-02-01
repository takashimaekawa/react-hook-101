import React, { useState } from 'react';



const App = () => {
  const [count, setCount] = useState(0)



  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(0)
  const double = () => setCount(previousCount => previousCount * 2)
  const divid3 = () => setCount(previousCount =>{
      if(previousCount % 3 === 0){
         return previousCount / 3
      }else{
        return previousCount
      }
  })

  return (
    <>
        <div>count:{count}</div>
        <div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
        <div>
            <button onClick={increment2}>+1</button>
            <button onClick={decrement2}>-1</button>
        </div>
        <div>
            <button onClick={reset}>reset</button>
        </div>
        <div>
            <button onClick={double}>*2</button>
        </div>

        <div>
            <button onClick={divid3}>%3</button>
        </div>
    </>
    
  );
}

export default App;
