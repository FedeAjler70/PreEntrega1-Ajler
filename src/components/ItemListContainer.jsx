import Container from 'react-bootstrap/Container';

// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({greeting}) => (
    <Container className="mt-4">
    <h1>{greeting}</h1>
    </Container>
    );