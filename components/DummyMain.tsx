import { Trans } from '@lingui/macro'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  background-color: #3e3e3e;
`

const Title = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
`

const SubTitle = styled.h2`
  color: ${(props) => props.theme.palette.secondary.main};
`

const DummyMain = (): ReactElement => {
  return (
    <Container>
      <Title>
        <Trans id="dummyMainTitle">This is a title</Trans>
      </Title>
      <SubTitle>
        <Trans id="dummyMainSubtitle">This is a sub title</Trans>
      </SubTitle>
    </Container>
  )
}

export default DummyMain
