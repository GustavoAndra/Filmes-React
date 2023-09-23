import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  h1 {
    text-align: center;
    margin: 2rem 0;
  }
  p {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem; /* Espaço entre os cards */
`;

export const Movie = styled.li`
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 10rem; /* Espaço entre os cards */
  padding: 5px;
  

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
  }

  .movie-info {
    padding: 1rem;
    text-align: center;
  }

  span {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    display: block;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
  }

  .icon {
    margin-right: 0.5rem;
  }
`;

export const Btn = styled.button`
  margin-top: 5px;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 15px;
  color: #fff;
  background-color: #007bff;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ScrollToTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: opacity 0.3s;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
`;

export const ScrollToTopButton = styled.a`
  display: block;
  background-color: #007bff;
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
    background-color: #0056b3;
  }
`;
