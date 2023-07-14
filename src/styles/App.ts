import styled from 'styled-components'

const Container = styled.body`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 88px 1fr;

  grid-template-areas:
    'sideBar header'
    'sideBar main';

  .aside {
    grid-area: sideBar;
  }
  .main {
    grid-area: main;
  }
  .header {
    grid-area: header;
  }
`

export { Container }
