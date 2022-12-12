import { useState } from "react";

function App(){
  const [active, setActive] = useState(true) 
  const [todos, setTodos] = useState([
    {
      txt: 'Бухнуть',
      complete: active,
      id: Math.random().toString(36).substring(2,9)
    },
    {
      txt: 'Курнуть',
      complete: active,
      id: Math.random().toString(36).substring(2,9)
    },
    {
      txt: 'Нюхнуть',
      complete: active,
      id: Math.random().toString(36).substring(2,9)
    }
  ])
  const [text, setText] = useState('');
  function handleChange(e){
    setText(e.target.value)
  }
  function handleKey(e){
    if(e.key === 'Enter'){
      handleClick(e)
    }
  }
  function handleClick(){
    const bukvi = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmйцукенгшщзхэждлорпавыфячсмитьбюЙЦУКЕНГШЩЗХЪЭЖДЛОРПАВЫФЯЧСМИТЬБЮ';
    if(bukvi.includes(text) !== true){
          setTodos([
           ...todos.filter(i => i.txt !== text),
              {
                txt: text,
                complete: active,
                id: Math.random().toString(36).substring(2,9)
              }
          ])
          todos.forEach(i => {
            if(text === i.txt){
              alert('Задача уже имеется!')
            }
          })
      setText('')
    }
  }
  function handleChecked(){
    setActive(!active)
  }
  function handleChecked2(id){
    setTodos(todos.map(i => i.id === id ? {...i, complete: !i.complete} : {...i}))
  }
  return(
    <div className="App">
      <div className="inputs">
        <input className="textInput" type="text" value={text} onChange={handleChange} onKeyDown={handleKey}/>
        <input className="check" type="checkbox" checked={active} onChange={handleChecked}/>
        <button onClick={handleClick}>fdsfd</button>
      </div>
      <ul>
      {todos.map(item => {
        return(
          <li key={item.id}>
            {item.txt}
            <input className="check2" type="checkbox" checked={item.complete} onChange={() => handleChecked2(item.id)}/>
          </li>
          
        )
      })}
      </ul>
    </div>
  )
}
export default App