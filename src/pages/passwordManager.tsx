import { useState } from 'react';

import useHandlePassword from './hooks/useHandlePassword';
import './PasswordManager.css';

const PasswordManager = () => {

  const [length, setLength] = useState<number>(12);

  const { password, handleGeneratePassword } = useHandlePassword();
  

  return (
    <div className="password-manager">
      <input type='number' value={length} onChange={(e) => setLength(Number(e.target.value))} max='24' min="4" />
      <div className="actions">
        <button onClick={() => handleGeneratePassword(true, false)}>Agregar Números</button>
        <button onClick={() => handleGeneratePassword(false, false)}>Generar Contraseña</button>
        <button onClick={() => handleGeneratePassword(true, true)}>Agregar Caracteres Especiales</button>
      </div>
      <p>Contraseña Generada: {password}</p>
    </div>
  );
}

export default PasswordManager;