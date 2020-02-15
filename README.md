# React hook for binding input values and validating onchang.

<img width="350" src="https://i.postimg.cc/s2Gp6PQq/demopresent.gif"/>

## Get Started by 3 steps
1. Attach Ref
2. const data = useInput(thatRef)
3. use it by `data.get()` `data.set()` `data.onChange()` `data.validation()`

```js
import { useRef } from 'react'
import useInput from 'react-using-input'

const App = () => {
  const usernameRef = useRef()
  const username = useInput(usernameRef)
  /* 
    username.set(newvalue)
    username.onChange(value=>{
      if(value.length!=0) return ture
      return false
    })
    username.validation() will return 'true' or 'false' based on onChange event return value
  */


  const hobbyRef = useRef()
  const hobby = useInput(hobbyRef)

  return (
    <div>
      <form>
        username:
        <input type='text' name='firstname' ref={usernameRef} /> <br />
        hobby:
        <input type='text' name='hobby' ref={hobbyRef} /> <br />
        <button>submit</button>
      </form>
      <h5>{username.get()}</h5>
      <h5>{hobby.get()}</h5>
    </div>
  )
}
export default App

```