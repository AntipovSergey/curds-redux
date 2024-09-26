import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import type { CurdT } from '../../types/curdsType';

function CurdCard({ curd }: { curd: CurdT }): JSX.Element {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={curd.image} />
        <Card.Title>{curd.title}</Card.Title>
        <Card.Text>Стоимость: {curd.price} рублей</Card.Text>
        <Card.Text>Рейтинг сырка: {curd.rating}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/curds/${curd.id}`)}>
          Инфа о сырке
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CurdCard;
