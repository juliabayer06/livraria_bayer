import axios from 'axios';
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get('https://livraria-bayer.herokuapp.com/autors');
    return response.data;
  }

  async buscarAutor(id) {
    const response = await axios.get(`https://livraria-bayer.herokuapp.com/autors/${id}`);
    return response.data;
  }

  async adicionarAutor(autor) {
    const response = await axios.post('https://livraria-bayer.herokuapp.com/autors', autor);
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(`https://livraria-bayer.herokuapp.com/autors/${id}`);
    return response.data;
  }

  async atualizarAutor(autor) {
    const response = await axios.put(
      `https://livraria-bayer.herokuapp.com/autors/${autor.id}`,
      autor,
    );
    return response.data;
  }
}  