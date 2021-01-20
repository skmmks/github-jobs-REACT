import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className='mb-4'>
      <Form.Row>
        <Form.Group as={Col}>Search Bar Placeholder</Form.Group>
      </Form.Row>
    </Form>
  );
}
