import React from 'react'
import { InferGetServerSidePropsType } from 'next'
import { useQuery } from 'react-query'
import styled from 'styled-components'

const InfoBox = styled.div`
  background: #222;
  color: #ddd;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: auto;
  row-gap: 20px;
  border-radius: 8px;
  padding-bottom: 20px;
  margin-top: 50px;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.primary};
`

interface Person {
  name: string
}

type FetchPeople = {
  results: Person[]
}

type PeopleType = {
  people: Person[]
}

type ServerProps = {
  props: PeopleType
}

const fetchPeople = async (): Promise<Person[]> => {
  const res = await fetch('http://swapi.dev/api/people/')
  const people: FetchPeople = await res.json()
  return people.results
}

export const getServerSideProps = async (): Promise<ServerProps> => {
  const data = await fetchPeople()

  return {
    props: {
      people: data
    }
  }
}

const People = ({ people }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const { data, status } = useQuery('people', fetchPeople, { initialData: people })
  console.log(data, status)
  return (
    <InfoBox>
      <Title>People</Title>
      {people.map((person, index) => (
        <div key={index}>{person.name}</div>
      ))}
    </InfoBox>
  )
}

export default People
