import React, { useState } from 'react';

function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [registerError, setRegisterError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // La contraseña debe tener al menos 6 caracteres
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const isFormValid = () => {
    return (
      validateEmail(email) &&
      validatePassword(password) &&
      validateConfirmPassword(password, confirmPassword) &&
      isAccepted
    );
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

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (!validateConfirmPassword(password, confirmPasswordValue)) {
      setConfirmPasswordError('Las contraseñas no coinciden');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAccepted(e.target.checked);
  };

  // Verificar si el correo ya está registrado
  const isEmailAlreadyRegistered = (email) => {
    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    return registeredUsers.some(user => user.email === email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el correo ya está registrado
    if (isEmailAlreadyRegistered(email)) {
      setRegisterError('Este correo electrónico ya está registrado.');
      return;
    }

    // Si el correo no está registrado, agregarlo al localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    registeredUsers.push({ email, password });

    localStorage.setItem('users', JSON.stringify(registeredUsers));

    alert('¡Registro exitoso!');
    setRegisterError(''); // Limpiar mensaje de error
    // Redirigir o hacer algo más tras el registro exitoso
  };

  return (
    <div className="register-container">
      <p>¿Tienes una cuenta? <a href="/login">¡Inicia sesión aquí!</a></p>
      <br />
      <br />
      <h3>Sino te invitamos a registrarte:</h3>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Dirección de correo electrónico"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <div className="error">{emailError}</div>}

        {registerError && <div className="error">{registerError}</div>}

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <div className="error">{passwordError}</div>}

        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}

        <div className="terms-checkbox">
          <label>
            <input
              type="checkbox"
              checked={isAccepted}
              onChange={handleCheckboxChange}
            />
            <span>
              Al usar ByteWise, aceptas los{' '}
              <a href="/terms">Términos de uso</a>,{' '}
              <a href="/privacy">Política de privacidad</a> y{' '}
              <a href="/precontractual">Términos precontractuales</a> de nuestra empresa.
            </span>
          </label>
        </div>

        <button type="submit" className="submit-btn" disabled={!isFormValid()}>
          ¡Sí! Me quiero registrar en ByteWise
        </button>
      </form>

      <div className="social-login">
        <p>...o a través de</p>
        <button className="social-btn facebook-btn">Facebook</button>
        <button className="social-btn google-btn">Google</button>
        <button className="social-btn apple-btn">Apple</button>
      </div>
    </div>
  );
}

export default RegisterScreen;
