const app = Vue.createApp({
  data() {
    return {
      url: "https://www.utleon.edu.mx",
      showingAuthor: true,
      showingBooks: true,
      title: "Learning Vue.js",
      author: "Alejandro Delgado",
      age: 20,
      img: "assets/alejandro.jpeg",
      books: [
        {
          title: "The Seven Habits of Highly Effective People",
          author: "Stephen Covey",
          age: 79,
          img: "assets/thesevenhabitsofhighlyeffectivepeople.jpeg",
          isFavorite: true,
        },
        {
          title: "Nothing",
          author: "Jane Teller",
          age: 59,
          img: "assets/nothing.jpeg",
          isFavorite: false,
        },
        {
          title: "La Malinche",
          author: "Laura Esquivel",
          age: 74,
          img: "assets/lamalinche.jpeg",
          isFavorite: false,
        },
      ],
      event: 1,
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleAuthor() {
      this.showingAuthor = !this.showingAuthor;
    },

    handleMouseEvent(event, data) {
      console.log(`Event ${event.type} ${this.event++}`);
      console.log(event);
      if (data) {
        console.log(data);
      }
    },

    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    toggleBooks() {
      this.showingBooks = !this.showingBooks;
    },

    toggleFavorite(book) {
      book.isFavorite = !book.isFavorite;
    },
  },
  computed: {
    favoriteBooks() {
      return this.books.filter(book => book.isFavorite);
    },
    nonFavoriteBooks() {
      return this.books.filter(book => !book.isFavorite);
    },
  },
});

app.mount("#app");
