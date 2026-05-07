import { useState } from 'react'

const RegisterForm = () => {
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
        <form className="RegisterForm" onSubmit={handleSubmit}>
            <div>
                <h2>Register</h2>
                <br/>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="example@gmail.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    placeholder="Confirm your password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;

