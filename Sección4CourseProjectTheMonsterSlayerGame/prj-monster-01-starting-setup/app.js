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
      listAttacks: [],
    };
  },
  methods: {
    attackMonster() {
      // Esta formula calcula un numero aleatorio entre 5 y 12 redondeado con floor.
      let damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.countRounds++;
      this.addLogMessage("Player", "Attack", damage);
      //this.listAtacks.push(`Player attacks: ${damage}`);
      this.attackPlayer();
    },
    attackPlayer() {
      let damage = getRandomValue(8, 15);
      this.playerHealth -= damage;
      this.addLogMessage("Monster", "Attack", damage);
      //this.listAtacks.push(`Monster attacks: ${damage}`);
    },
    specialAtackMonster() {
      let damage = getRandomValue(10, 25);
      this.monsterHealth -= damage;
      this.countRounds = 0;
      this.addLogMessage("Player", "Special attack", damage);
      //this.listAtacks.push(` Special Player attacks: ${damage}`);
      this.attackPlayer();
    },
    healPlayer() {
      let heal = getRandomValue(8, 25);
      if (this.playerHealth + heal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.addLogMessage("Player", "Heals", heal);
      //this.listAtacks.push(`Player heals: ${heal}`);

      this.attackPlayer();
      this.countRounds++;
    },
    surrender() {
      this.winnerMonster = true;
    },
    newPlay() {
      this.winnerMonster = false;
      this.winnerPlayer = false;
      this.isDraw = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.countRounds = 0;
      this.listAttacks = [];
    },
    addLogMessage(who, what, value) {
      // unshift es lo mismo que push pero lo situa al principio de la matriz
      this.listAttacks.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        return { width: this.monsterHealth + "%" };
      } else {
        return { width: this.monsterHealth + "%" };
      }
    },
    playerBarStyles() {
      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
        return {
          width: this.playerHealth + "%",
        };
      } else {
        return { width: this.playerHealth + "%" };
      }
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
      }
    },

    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //draw
        this.isDraw = true;
      } else if (value <= 0) {
        this.winnerPlayer = true;
      }
    },
  },
});
app.mount("#game");
