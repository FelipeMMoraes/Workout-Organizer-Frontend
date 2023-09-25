import styled from 'styled-components'

const ContainerForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 10px;
  }

  input[type='text'],
  input[type='number'],
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    background-color: #f97316;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    outline: none;
  }
`

export { ContainerForm }
