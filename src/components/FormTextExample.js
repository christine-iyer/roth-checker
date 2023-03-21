import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form>
     <Form.Control size="lg" type="text" placeholder="Normal text" />
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control size="lg" type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control size="lg" as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default TextControlsExample;