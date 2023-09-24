import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  h1 {
    text-align: center;
    margin: 2rem 0;
    color: #FFD700;
    margin-bottom: 35px;
  }
  p {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  gap: 2rem; /* Espaço entre os cards */
`;

export const Movie = styled.li`
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  overflow: hidden;
  padding: 5px;
  margin: 1rem; /* Espaço entre os cards */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  }

  .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .movie-info {
    padding: 1rem;
    text-align: center;
  }

  span {
    font-size: 1rem; /* Reduza o tamanho da fonte */
    margin-bottom: 0.5rem; /* Reduza o espaçamento inferior */
    display: block;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem; /* Reduza o espaçamento superior */
  }

  p {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 15px; /* Reduza o tamanho da fonte */
  }

  .icon {
    margin-right: 0.5rem; /* Reduza a margem direita */
  }

  @media (max-width: 768px) {
    /* Para telas pequenas (até 768px), reduza o tamanho dos cards */
    padding: 1rem; /* Reduza o espaçamento do container */
  }
`;


export const Btn = styled.button`
  margin-top: 5px;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #007bff;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave */
  transition: background-color 0.3s, transform 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05); /* Efeito de escala ao passar o mouse */
  }
`;

export const ScrollToTop = styled.div`
  z-index:1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: opacity 0.3s;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
`;

export const ScrollToTopButton = styled.a`
  display: block;
  background-color: #000;
  color: #fff;
  text-align: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;
