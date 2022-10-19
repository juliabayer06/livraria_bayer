<script>
  import EditorasApi from "@/api/editoras.js";
  const editorasApi = new EditorasApi();
  export default {
    data() {
    return {
      editora: {},
      editoras: [],
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editorasApi.atualizarEditora(this.editora);
      } else {
        await editorasApi.adicionarEditora(this.editora);
      }
      this.editoras = await editorasApi.buscarTodasAsEditoras();
      this.editora = {};
    },
    async excluir(editora) {
      await editorasApi.excluirEditora(editora.id);
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
  },
};
</script> 

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de editoras</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="editora.name" @keyup.enter="salvar" />
      <input type="text" v-model="editora.site" @keyup.enter="salvar" />
      <button @click="salvar">Salvar</button>
    </div>
  </div>
  <div class="list-items">
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Nome</td>
          <td>Sites</td>
          <td>Ações</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="editora in editoras" :key="editora.id">
          <td>{{ editora.id }}</td>
          <td>{{ editora.name }}</td>
          <td>{{ editora.site }}</td>
          <td>
            <button @click="editar(editora)">editar</button>
            <button @click="excluir(editora)">excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>

</style>
