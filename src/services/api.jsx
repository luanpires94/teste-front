import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getProjects = async () => {
  const response = await api.get("/projetos");
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/projetos/${id}`);
  return response.data;
};

export default api;
