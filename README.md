# React hook for binding input values and validating onchang.

## Get Started by 3 steps
1. Attach Ref
2. useInput(someRef)
3. use it

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