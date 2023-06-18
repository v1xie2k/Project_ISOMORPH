import axios from "axios";
import qs from "qs";

const app = axios.create({
	baseURL: "http://localhost:3000/api/v1",
});

// auth
export const register = async (data) => {
	const response = await app.post("/auth/register", qs.stringify(data));
	return response;
};

export const login = async (data) => {
	const response = await app.post("/auth/login", qs.stringify(data));
	return response;
};

export const queryBarang = async () => {
	const response = await app.get("/barang");
	return response;
};

export const queryKategori = async () => {
	const response = await app.get("/kategori");
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