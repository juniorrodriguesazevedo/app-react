import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormLoginComponent() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /* useEffect(() => {
      // Só será execultado quando o componente for carregado somente uma vez
      if (window.confirm('Você é Flamenguista')) {
          console.log('Sim, eu sou');
      }
  }, []); */

    const handleLogin = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        Nunca compartilharemos seu e-mail com mais ninguém.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleLogin}>
                    Entrar
                </Button>
            </Form>
        </div>
    );
}

export default FormLoginComponent;