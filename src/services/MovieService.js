import HttpService from "./HttpService";

class MovieService extends HttpService {
  getAll = async () => {
    const { data } = await this.client.get("movies");
    return data;
  };

  get = async (id) => {
    const { data } = await this.client.get(`movies/${id}`);
    return data;
  };

  async add(newMovie) {
    const { data } = await this.client.post("movies", newMovie);
    return data;
  }

  async edit(id, movie) {
    const { data } = await this.client.put(`movies/${id}`, movie);
    return data;
  }

  async delete(id) {
    const { data } = await this.client.delete(`movies/${id}`);
    return data;
  }
}
export default new MovieService();
