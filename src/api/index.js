import axios from "axios";
import qs from "qs";


const app = axios.create({
    baseURL: "http://localhost:3000/api/v1",
  });

export const queryBarang = async () => {
  const response = await app.get("/barang");
  return response;
};


export const queryKategori = async () => {
    const response = await app.get("/kategori");
    return response;
};

export const getAllAnime  = async() => {
  const response = await app.get("/anime")
  return response
}