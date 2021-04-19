import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import CountryInfor from "./CountryInfor";

function MainPage() {
  const url = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(url);
    setCountries(data.data);
    console.log("data", data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const Title = styled.div`
    font-family: "Indie Flower", cursive;
    text-align: center;
    font-size: 5rem;
  `;
  const Card = styled.div`
    font-family: "Indie Flower", cursive;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;
  return (
    <div>
      <Title>COUNTRY LIST</Title>
      <Card>
        {countries.slice(0, 20).map((item) => {
          return (
            <CountryInfor
              name={item.name}
              flag={item.flag}
              region={item.region}
              population={item.population}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default MainPage;
