import React, { useState } from 'react';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState(''); // Error de inicio de sesión

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // La contraseña debe tener al menos 6 caracteres
  };

  const isFormValid = () => {
    return validateEmail(email) && validatePassword(password);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (!validateEmail(emailValue)) {
      setEmailError('El correo electrónico no es válido');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if (!validatePassword(passwordValue)) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = registeredUsers.find(user => user.email === email);

    if (!user) {
      setLoginError('El correo electrónico no está registrado');
      return;
    }

    if (user.password !== password) {
      setLoginError('La contraseña es incorrecta');
      return;
    }

    // Si las credenciales son correctas, eliminar el mensaje de error
    setLoginError('');
    alert('¡Inicio de sesión exitoso!');
    // Redirigir a otra página o hacer algo después del login exitoso
  };

  return (
    <div className="login-container">
      <p>
        ¿No tienes una cuenta? <a href="/register">¡Regístrate aquí!</a>
      </p>
      <h3>Inicia sesión en ByteWise</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Dirección de correo electrónico"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <div className="error">{emailError}</div>}

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <div className="error">{passwordError}</div>}

        {loginError && <div className="error">{loginError}</div>}

        <button type="submit" className="submit-btn" disabled={!isFormValid()}>
          Iniciar sesión
        </button>
      </form>
      <div className="password-recovery">
        <p>¿Olvidaste tu contraseña? <a href="/recover-password">Recupérala aquí</a></p>
      </div>

      <div className="social-login">
        <p>...o a través de</p>
        <button className="social-btn facebook-btn">Facebook</button>
        <button className="social-btn google-btn">Google</button>
        <button className="social-btn apple-btn">Apple</button>
      </div>
    </div>
  );
}

export default LoginScreen;
