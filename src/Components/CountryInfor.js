import React from "react";
import styled from "styled-components";

function CountryInfor(props) {
  const { name, flag, region, population } = props;

  const CountryName = styled.div`
    font-size: 2rem;
    text-align: center;
    font-style: bold;
  `;

  const CardInfor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0.2px solid black;
    margin: auto 10px 10px auto;
  `;

  const Button = styled.button`
    border: 2px solid black;
    border-radius: 0.2rem;
    width: 10rem;
  `;
  return (
    <CardInfor>
      <CountryName>{name}</CountryName>
      <img src={flag} alt="error" height="200rem" width="200rem" />
      <p>Region:{region}</p>
      <p>Population:{population}</p>
      <Button>More information</Button>
    </CardInfor>
  );
}

export default CountryInfor;
