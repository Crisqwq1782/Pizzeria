import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '' || (confirmPassword !== undefined && confirmPassword === '')) {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (confirmPassword !== undefined && password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("¡Account created successfully!");
    console.log("Formulario enviado correctamente");
    
    setEmail('');
    setPassword('');
    if (setConfirmPassword) setConfirmPassword('');
};

    return (
        <div className="form-container">
        <form className="form-card" onSubmit={handleSubmit}>
            <h2>Crear Cuenta</h2>
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
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    placeholder="Confirma tu contraseña" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
            </div>
            <button type="submit" className="btn-submit">Registrarse</button>
            <p className="form-link">¿Ya tienes cuenta? <button type="button" onClick={() => navigate('/login')} className="btn-link">Inicia sesión</button></p>
        </form>
        </div>
    );
};

export default RegisterForm;

