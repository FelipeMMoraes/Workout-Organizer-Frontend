import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 88px 1fr;

  grid-template-areas:
    'sideBar header'
    'sideBar main';
`

export const OutletContainer = styled.div`
  grid-area: main;
  padding: 32px;
`
