import { IPokemonDetails } from '../../api/api.types';
import Card from 'react-bootstrap/Card';

import { Badge, Container, Row } from 'react-bootstrap';

import styled from '@emotion/styled';

const StyledPokeMainCard = styled.div`
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: lightcoral;
  padding: 1rem;
`;

export interface PokeMainCardProps {
  summary: IPokemonDetails;
}

export function PokeMainCard({ summary }: PokeMainCardProps) {
  return (
    <StyledPokeMainCard>
      <Card>
        <Card.Img
          src={summary.thumbnailImage}
          alt={summary.thumbnailImageAlt}
        ></Card.Img>
      </Card>
      <Card.Title>{summary.name}</Card.Title>
      <Card.Subtitle>
        <div>#{summary.id}</div>
      </Card.Subtitle>
      <Card.Body>
        <Container>
          <Row>Type:</Row>
          <Row xs="auto">
            {summary.type.map((typeName) => {
              return <Badge>{typeName}</Badge>;
            })}
          </Row>
          <Row>Weakneses:</Row>
          <Row xs="auto">
            {summary.weakness.map((weakness) => {
              return <Badge>{weakness}</Badge>;
            })}
          </Row>
        </Container>
      </Card.Body>
    </StyledPokeMainCard>
  );
}

export default PokeMainCard;
