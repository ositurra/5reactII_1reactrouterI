import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


const Contact = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="name@example.com">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <br />
                <Button variant="danger">Enviar</Button>{''}
            </Form.Group>
        </Form>
    )
}
export default Contact