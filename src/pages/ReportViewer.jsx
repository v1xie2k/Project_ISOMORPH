import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { queryBarang, queryKategori, getAllAnime } from "../api/index";

const ReportViewer = () => {
  const [data, setData] = useState([]);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/anime");
        setData(response.data);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
      }
      //   const query = await getAllAnime();
      //   let result = {};
      //   result.rows = query;
      //   console.log(query);
      //   setData(result);
    };

    fetchData();
  }, []);

  const options = {
    title: {
      text: "Grafik Data dari MongoDB",
    },
    xAxis: {
      categories: data.map((item) => item.name),
    },
    series: [
      {
        name: "Like",
        data: data.map((item) => item.like),
      },
    ],
  };

  return (
    <div>
      <h1>Penampil Laporan</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div>
        <p>Total Likes: {totalLikes}</p>
        {data.map((item) => (
          <div key={item._id}>
            {/* <img src={item.pict} alt={item.name} /> */}
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <p>Like: {item.like}</p>
            <p>Created At: {item.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportViewer;

export const loader = async () => {
  // const query = await queryBarang();
  const query = await getAllAnime();
  let result = {};

  result.rows = query;
  // result.kategoriList = await queryKategori()
  return result;
};
