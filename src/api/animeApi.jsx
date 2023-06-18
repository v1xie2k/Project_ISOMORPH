import axios from "axios";
import qs from "qs";
// import axiosPrivate from "./axiosPrivate";

const animeApi = axios.create({ baseURL: "http://localhost:3000/api/v1" });


export const getAllAnime = async () => {
//   const response = await axiosPrivate.get("/anime");
  const response = await animeApi.get("/anime");
  return !response?.data ? [] : response.data;
};

export const postAnime = async (data) => {
  // kalau mau pakai JSON AJA
  //ini ga isa dipake(error animeApi not defined)
  // const response = await animeApi.post("/anime", data);

  // kalau mau pakai x-www-form-encoded
  const response = await animeApi.post("/anime", qs.stringify(data), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response;
};

export const updateAnime = async(id, data) => {
    const response = await animeApi.put("/anime/"+id, qs.stringify(data), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    return response;
}

export const updateLikeAnime = async(id, like) => {
    const response = await animeApi.put("/anime/" + id + "/" + like);
    console.log(response);
    return response;
}

export const deleteAnime = async (data) => {
//   const response = await axiosPrivate.delete("/anime/" + data);
  const response = await animeApi.delete("/anime/" + data);
  return response;
};
