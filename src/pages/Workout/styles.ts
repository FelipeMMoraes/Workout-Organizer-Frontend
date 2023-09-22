import styled from 'styled-components'

export const WorkoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

export const ContainerForm = styled.div`
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

export const TableContainer = styled.div`
  margin-top: 20px;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #f97316;
    color: #fff;
  }
`
