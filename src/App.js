import React, { useState } from 'react';



const App = Props => {

  const[name, setName] = useState(Props.name)
  const[price, setPrice] = useState(Props.price)

  const reset = () => {
      setPrice(Props.price)
      setPrice(Props.name)
  }

  return (
    <>
        <p>現在の{name}は、{price}です。</p>
        <button onClick={()=>setPrice(price + 1)}>+1</button>
        <button onClick={()=>setPrice(price - 1)}>-1</button>
        <button onClick={()=>reset()}>reset</button>
        <input value = {name} onChange={e => setName(e.target.value)}/>
    </>
  );
}

App.defaultProps = {
    name:'',
    price:1000
}

export default App;
