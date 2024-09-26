import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch} from '../providers/redux/hooks';
import { curdFormSchema } from '../../utils/validation';
import { editOneCurd } from '../providers/redux/curds/curdsThunk';
import { closeModal } from '../providers/redux/curds/curdsSlice';
import type { CurdT } from '../../types/curdsType';

function EditModal({ show }: {show : CurdT}): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = curdFormSchema.parse(Object.fromEntries(new FormData(e.currentTarget)));
    void dispatch(editOneCurd({ id: show?.id ?? 0, formData }));
  };

  return (
    <Modal show={!!show} onHide={() => void dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Отредактируй инфу о сырке</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              defaultValue={show?.title}
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              defaultValue={show?.image}
              placeholder="Enter image URL"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              defaultValue={show?.price}
              placeholder="Enter price"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              min={0}
              max={10}
              defaultValue={show?.rating !== null ? show?.rating : ''}
              placeholder="Enter rating"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Изменить сырок
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditModal;
