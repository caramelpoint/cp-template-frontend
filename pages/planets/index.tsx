
import { Key } from "react";
import { useQuery } from "react-query";
import styled from 'styled-components'
import Planet from "../../components/Planet";

const Content = styled.div`
  margin: 2rem auto;
  background: #0000;
  width: 500px;
  text-align: center;
  
`
const fetchPlanets = async () => {
  const res = await fetch(`https://swapi.dev/api/planets/`);
  const planets = await res.json();
  return planets.results
};

export async function getStaticProps() {
  const planets = await fetchPlanets();
  return { props: { planets } }
}


export default function Plants(props: { planets: any; }) {
  const { data, status } = useQuery('planets', fetchPlanets, { initialData: props.planets })
  return (
    <Content>
      <h1>List planets</h1>
      {status === 'loading' && <div> loading data</div>}
      {status === 'error' && <div> error fetching data</div>}
      {data && (
        <div>
          {data.map((planet: any, index: Key | null | undefined) => (
            <>
              <div>
                <Planet key={index} planet={planet} />
              </div>
            </>
          ))}
        </div>
      )}
    </Content>
  );
}

