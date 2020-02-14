import React, { useState, useEffect } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

function Hello(){
  const [state, setState] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setState(!state)
    },1000)
  })

  return(
    <h1 css={css`
      color: ${state ? 'royalblue' : 'hotpink'};
    `}>Hello World</h1>
  )
}

export default Hello