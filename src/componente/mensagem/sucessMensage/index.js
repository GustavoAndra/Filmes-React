import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuccessMessage = ({ message }) => {
  useEffect(() => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Fechar a notificação após 2 segundos
    });
  }, [message]);
  return null; // O componente não renderiza nada no DOM, pois é usado apenas para notificações
};

export default SuccessMessage;