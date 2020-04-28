<template>
  <div id="app">
    <img src="./assets/Test.jpg" id="foto" />

    <div>
      <button @click="read_image">Baca Gambar</button>

      <input
        type="file"
        accept="image/*;capture=camera"
        @change="update"
        id="input"
      />
    </div>

    <div>
      <h1>Hasil Pembacaan:</h1>
      <div v-if="loading">Loading {{ Math.floor(progress * 100) }}%</div>
      <div v-show="!loading" id="hasil"></div>
    </div>
  </div>
</template>

<script>
  import { createWorker } from 'tesseract.js';

  export default {
    name: 'App',

    data() {
      return { loading: false, progress: 0 };
    },

    methods: {
      update() {
        const input = document.getElementById('input');

        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = (e) => {
            document
              .getElementById('foto')
              .setAttribute('src', e.target.result);
          };

          reader.readAsDataURL(input.files[0]);
        }
      },

      read_image() {
        if (this.loading) return alert('Pembacaan dalam proses.');
        this.loading = true;

        const img = document.getElementById('foto');

        const worker = createWorker({
          logger: (m) => {
            this.progress = m.progress;
          },
        });

        (async () => {
          await worker.load();
          await worker.loadLanguage('ind');
          await worker.initialize('ind');

          const {
            data: { text },
          } = await worker.recognize(img);

          document.getElementById('hasil').innerHTML = text;
          await worker.terminate();
          this.loading = false;
        })();
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #foto {
    width: 100%;
    height: 100%;
    max-width: 1080px;
    margin-bottom: 10px;
  }
</style>
