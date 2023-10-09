
import { useState } from 'react';
import { generatePassword } from '../../domain/useCases/passwordManager.usecase';

const useHandlePassword = () => {
    const [password, setPassword] = useState<string>();

    const handleGeneratePassword = (addNumbers: boolean, addSpecialChars: boolean) => setPassword(generatePassword(addNumbers, addSpecialChars, length));

    return { password, handleGeneratePassword };
};

export default useHandlePassword;

