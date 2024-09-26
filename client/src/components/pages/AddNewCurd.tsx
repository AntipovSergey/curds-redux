import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../providers/redux/hooks';
import { addOneCurd } from '../providers/redux/curds/curdsThunk';
import { curdFormSchema } from '../../utils/validation';

function AddNewCurd(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = curdFormSchema.parse(Object.fromEntries(new FormData(e.currentTarget)));
    void dispatch(addOneCurd(formData));
    navigate('/');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name="image" placeholder="Enter image URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" placeholder="Enter price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number" name="rating" min={0} max={10} placeholder="Enter rating" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Добавить сырок
      </Button>
    </Form>
  );
}

export default AddNewCurd;
