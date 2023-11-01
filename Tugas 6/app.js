const app = Vue.createApp({
    data() {
      return {
        num1: 0,
        num2: 0,
        hasil: 0,
      };
    },
    methods: {
      tambah() {
        this.hasil = parseFloat(this.num1) + parseFloat(this.num2);
      },
      kurang() {
        this.hasil = parseFloat(this.num1) - parseFloat(this.num2);
      },
      kali() {
        this.hasil = parseFloat(this.num1) * parseFloat(this.num2);
      },
      bagi() {
        this.hasil = parseFloat(this.num1) / parseFloat(this.num2);
      },
    },
  });
  
  app.mount('#app');
  