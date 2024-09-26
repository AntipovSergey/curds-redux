import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../providers/redux/hooks';
import CurdCard from '../ui/CurdCard';
import { getCurdsThunk } from '../providers/redux/curds/curdsThunk';

export default function MainPage(): JSX.Element {
  const curds = useAppSelector((store) => store.curds.curds);
  const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(getCurdsThunk())
    }, [])

  return (
    <Container>
      <Row>
        {curds.map((curd) => (
          <Col key={curd.id}>
            <CurdCard curd={curd} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
