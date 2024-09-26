import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../providers/redux/hooks';
import { deleteOneCurd, getOneCurdThunk } from '../providers/redux/curds/curdsThunk';
import type { CurdT } from '../../types/curdsType';
import { resetError, showModal } from '../providers/redux/curds/curdsSlice';
import EditModal from '../ui/EditModal';

function OneCurdPage(): JSX.Element {
  const { currentCurd: curd, error, showCurd: show } = useAppSelector((store) => store.curds);
  const dispatch = useAppDispatch();
  const { curdId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    void dispatch(getOneCurdThunk(Number(curdId)));
    void dispatch(resetError());
  }, [curdId, dispatch]);

  const deleteHandler = (id: CurdT['id']): void => {
    void dispatch(deleteOneCurd(id));
    navigate('/');
  };

  return (
    <Container>
      {!error ? (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img variant="top" src={curd?.image} />
            <Card.Title>{curd?.title}</Card.Title>
            <Card.Text>Стоимость: {curd?.price} рублей</Card.Text>
            <Card.Text>Рейтинг сырка: {curd?.rating}</Card.Text>
            <Button variant="primary" onClick={() => void dispatch(showModal(curd?.id))}>
              Отредактировать сырок
            </Button>
            <Button variant="danger" onClick={() => deleteHandler(Number(curd?.id))}>
              Удалить сырок
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <img
          src="https://quasa.io/storage/images/news/1wy7s2BEZhuJaqYsay2yO8QkAYe76BvTD1K7A7Gt.png"
          alt="Error"
        />
      )}
      <EditModal show={show as CurdT} />
    </Container>
  );
}

export default OneCurdPage;
