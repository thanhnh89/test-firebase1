import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #f4f6f6;
  font-size: 23px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: gray;
`

const NotFound = () => {
  return (
    <Wrapper>
      <div>Not found</div>
    </Wrapper>
  )
}

export default NotFound
