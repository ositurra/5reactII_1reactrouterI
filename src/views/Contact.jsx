import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';


const Contact = () => {
    return (
        <div className="contact1">
            <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
            <br />
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button href="#">Enviar</Button> 
            </Form>
        </div>
    )
}
export default Contact