import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { IStat } from '../../api/api.types';

/* eslint-disable-next-line */
export interface PokemonStatsProps {
  stats: IStat[];
}

const StyledPokemonStats = styled.div`
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #cccccc;
  padding: 0.5rem;

  .title {
    font-family: 'Flexo-Medium', arial, sans-serif;
    color: #212121;
  }
`;

const StyledAttribute = styled.div`
  .value {
    font-family: 'Flexo-Medium', arial, sans-serif;
    color: #212121;
  }
`;

export function PokemonStats({ stats }: PokemonStatsProps) {
  return (
    <StyledPokemonStats data-testid="pokemon-details-stats">
      <Container>
        <Row className="title">Stats</Row>
        <Row xs={3}>
          {stats.map((stat, index) => {
            return (
              <Col key={index}>
                <StyledAttribute>
                  <div>{stat.name}</div>
                  <div className="value" data-testid={`stat=${stat.name}`}>
                    {stat.value}
                  </div>
                </StyledAttribute>
              </Col>
            );
          })}
        </Row>
      </Container>
    </StyledPokemonStats>
  );
}

export default PokemonStats;
