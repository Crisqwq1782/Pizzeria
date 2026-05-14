import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === '' || password === '') {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        console.log("Enviando datos de login...");
        alert("Login successful!");
        
        setEmail('');
        setPassword('');
    }

    return (
        <div className="form-container">
        <form className="form-card">
            <h2>Iniciar Sesión</h2>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="example@gmail.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Ingresa tu contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn-submit">Iniciar Sesión</button>
            <p className="form-link">¿No tienes cuenta? <button type="button" onClick={() => navigate('/register')} className="btn-link">Regístrate</button></p>
        </form>
        </div>
    );
};

export default LoginForm;
