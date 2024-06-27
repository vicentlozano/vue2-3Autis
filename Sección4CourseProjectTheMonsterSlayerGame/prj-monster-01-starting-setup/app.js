const getRandomValue = (min, max) =>
  (damage = Math.floor(Math.random() * (max - min)) + min);

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      winnerMonster: false,
      winnerPlayer: false,
      isDraw: false,
      countRounds: 0,
    };
  },
  methods: {
    attackMonster() {
      // Esta formula calcula un numero aleatorio entre 5 y 12 redondeado con floor.
      let damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.attackPlayer();
      this.countRounds++;
    },
    attackPlayer() {
      let damage = getRandomValue(8, 15);
      this.playerHealth -= damage;
    },
    specialAtackMonster() {
      let damage = getRandomValue(10, 25);
      this.monsterHealth -= damage;
      this.attackPlayer();
      this.countRounds = 0;
    },
    healPlayer() {
      let heal = getRandomValue(8, 25);
      if (this.playerHealth + heal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.attackPlayer();
      this.countRounds++;
    },
    surrender() {
      this.winnerMonster = true;
    },
    newPlay() {
      this.winnerMonster = false;
      this.winnerPlayer = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.countRounds = 0;
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%", textAlign: "center" };
    },
    playerBarStyles() {
      return {
        width: this.playerHealth + "%",
      };
    },
    isCountRounds() {
      return this.countRounds < 3;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //draw
        this.isDraw = true;
      } else if (value <= 0) {
        // El jugador pierde, el monstruo gana
        this.winnerMonster = true;
        this.playerHealth = 0;
      }
    },
  },
  monsterHealth(value) {
    if (value <= 0 && this.monsterHealth <= 0) {
      //draw
      this.isDraw = true;
    } else if (value <= 0) {
      this.winnerPlayer = true;
      this.monsterHealth = 0;
    }
  },
});
app.mount("#game");
