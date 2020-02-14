import { useState, useEffect } from 'react'

function useInput(ref,initialValue = '') {
  const [value, setValue] = useState(initialValue)
  const [validation, setValidation] = useState(false)

  // updateValue
  useEffect(()=>{
    ref.current.oninput = ev => {
      setValue(ev.target.value)
    }
  }, [])

  // bindValue
  useEffect(()=>{
    ref.current.value = value
  })

  
  // on value change event
  const valueObj = {
    get: ()=>value,
    set: (newValue)=>setValue(newValue),
    validation: ()=>validation,
    onChange: (cb)=>{
      useEffect(()=>{
        cb && cb(value) ? setValidation(true) : setValidation(false)
      }, [value])
    },
  }

  return valueObj
}

export default useInput