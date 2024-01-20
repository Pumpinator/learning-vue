const app = Vue.createApp({
  data() {
    return {
      showingBookTitle: true,
      bookTitle: "The Final Empire",
      author: "Alejandro Delgado",
      age: 20,
    };
  },
  methods: {
    changeBookTitle(bookTitle) {
      // this.title = 'Something else';
      this.bookTitle = bookTitle;
    },
    toggleBookTitle() {
      this.showingBookTitle = !this.showingBookTitle;
    },
  },
});

app.mount("#app");
