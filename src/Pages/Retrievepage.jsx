import React from "react";
import Navbar from "../components/Navbar/navbar";

import { useState, useEffect } from "react";
import CardComp from "../components/Card/Card";

function Retrievepage() {
  const [data, setData] = useState([]);
  const [del, setDel] = useState(false);
  const baseURL = "https://mock11-p6rc.onrender.com";

  const filterFun = () => {
    const filterSelect = document.getElementById("filterSelect");
    try {
      fetch(`${baseURL}/api/filter/${filterSelect.value}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };

  const sortFun = () => {
    const sortSelect = document.getElementById("sortSelect");
    try {
      fetch(`${baseURL}/api/sort/${sortSelect.value}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };

  useEffect(() => {
    const fetData = () => {
      try {
        fetch(`${baseURL}/api/retrieve`)
          .then((res) => res.json())
          .then((res) => {
            setData(res.data);
            setDel(false);
          });
      } catch (error) {
        console.log(error);
        setData([]);
      }
    };
    fetData();
  }, [del]);

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "auto",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "auto",
            padding: "2rem",
            border: "1px solid silver",
            borderRadius: "5px",
          }}
        >
          <span>Filter</span>
          <select onChange={filterFun} id="filterSelect">
            <option value="">Select option</option>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Australia">Australia</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "auto",
            padding: "2rem",
            border: "1px solid silver",
            borderRadius: "5px",
          }}
        >
          <span>Sort</span>
          <select onChange={sortFun} id="sortSelect">
            <option value="">Select option</option>
            <option value="1">Low To High</option>
            <option value="-1">High To Low</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "1rem",
          margin: "auto",
          width: "80%",
          padding: "2rem",
        }}
      >
        {data.map((item) => {
          return <CardComp item={item} state={setDel} />;
        })}
      </div>
    </div>
  );
}

export default Retrievepage;
