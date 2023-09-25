import styled from 'styled-components'

const TableContainer = styled.div`
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

export { TableContainer }
