import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  h1 {
    text-align: center;
    margin: 4rem 0;
  }a {
    text-decoration: none;
  }
  
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3); /* Sombra semelhante à Netflix */
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5); /* Sombra mais intensa ao passar o mouse */
  }

  img {
    width: 200px;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    text-decoration: none;
  }

`;export const Btn = styled.button`
margin-top: 5px;
padding: 0.7rem 3rem;
border: none;
border-radius: 15px;
color: #212121;
background-color: #ffffff;
font-weight: 1000;
font-size: 12 px;
cursor: pointer;
transition: all 250ms;
`;