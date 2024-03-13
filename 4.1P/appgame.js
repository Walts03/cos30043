const app = Vue.createApp({
  data() {
    return {
      msg: "Start Guessing",
      err: false,
      inputNumber: 0,
      resultNumber: `${Math.floor(Math.random() * 100) + 1}`,
    };
  },
  methods: {
    checkGuess() {
      if (this.inputNumber == 0) {
        this.err = true;
        return (this.msg = "Number must be between 1 and 100");
      } else {
        if (this.inputNumber == this.resultNumber) {
          this.err = false;
          return (this.msg = "Correct Number!");
        } else {
          if (this.inputNumber < this.resultNumber) {
            this.err = true;
            return (this.msg = "Guess Higher!");
          } else {
            this.err = true;
            return (this.msg = "Guess Lower!");
          }
        }
      }
    },
    giveUp() {
      return (this.msg = this.resultNumber);
    },
    startOver() {
      window.location.reload();
    },
  },
});
app.mount("#app");
