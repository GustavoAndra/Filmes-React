import React from 'react';
import { toast } from 'react-toastify';

const ErrorMessage = ({ message }) => {
  const notify = () => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Fechar a notificação após 2 segundos
    });
  };

  return (
    <button onClick={notify}>Exibir Mensagem de Erro</button>
  );
};

export default ErrorMessage;