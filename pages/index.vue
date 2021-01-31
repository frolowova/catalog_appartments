<template>
  <div>
    <div class="header">
      <div class="header__title">
        <h1>Каталог схем недвижемости</h1>
      </div>
    </div>

    <!-- FILTERS -->
    <div class="filters">
      <div class="filter-room filter-el">
        <div class="filter-el-name">Комнаты</div>
        <div class="rooms">
          <button
            class="btn-count-room"
            @click="numberRoom = 0"
            :class="{ 'btn-count-room__active': numberRoom == 0 }"
          >
            S
          </button>
          <button
            class="btn-count-room"
            @click="numberRoom = 1"
            :class="{ 'btn-count-room__active': numberRoom == 1 }"
          >
            1к
          </button>
          <button
            class="btn-count-room"
            @click="numberRoom = 2"
            :class="{ 'btn-count-room__active': numberRoom == 2 }"
          >
            2к
          </button>
          <button
            class="btn-count-room"
            @click="numberRoom = 3"
            :class="{ 'btn-count-room__active': numberRoom == 3 }"
          >
            3к
          </button>
        </div>
      </div>

      <div class="floor filter-el">
        <div class="filter-el-name">Этаж</div>
        <div class="show-vals">
          <div class="show-vals_val">{{ floor[0] }}</div>
          <div
            style="margin-right: 12px; margin-left: 12px; line-height: 2.5rem"
          >
            -
          </div>
          <div class="show-vals_val">{{ floor[1] }}</div>
        </div>
        <div class="set-vals">
          <v-range-slider
            v-model="floor"
            color="#70D24E"
            track-color="#D8D8D8"
            :max="maxFloor"
            min="1"
          ></v-range-slider>
        </div>
      </div>

      <div class="square filter-el">
        <div class="filter-el-name">
          Площадь,
          <span style="text-transform: lowercase"
            >м<sup><small>2</small></sup></span
          >
        </div>
        <div class="show-vals">
          <div class="show-vals_val">{{ square[0] }}</div>
          <div
            style="margin-right: 12px; margin-left: 12px; line-height: 2.5rem"
          >
            -
          </div>
          <div class="show-vals_val">{{ square[1] }}</div>
        </div>
        <div class="set-vals">
          <v-range-slider
            v-model="square"
            color="#70D24E"
            track-color="#D8D8D8"
            :max="maxSquare"
            min="1"
          ></v-range-slider>
        </div>
      </div>

      <div class="cost filter-el">
        <div class="filter-el-name">
          Стоимость, <span style="text-transform: lowercase">млн. р.</span>
        </div>
        <div class="show-vals">
          <div class="show-vals_val">{{ cost[0] }}</div>
          <div
            style="margin-right: 12px; margin-left: 12px; line-height: 2.5rem"
          >
            -
          </div>
          <div class="show-vals_val">{{ cost[1] }}</div>
        </div>
        <div class="set-vals">
          <v-range-slider
            v-model="cost"
            color="#70D24E"
            track-color="#D8D8D8"
            :max="maxPrice"
            min="1"
          ></v-range-slider>
        </div>
      </div>

      <div class="filter-btns filter-el">
        <div class="filter-el-name"></div>
        <div class="filter-btns_applay">
          <v-btn dark color="#70D24E" block @click="setFilter">ПРИМЕНИТЬ</v-btn>
        </div>
        <div class="filter-btns_reset" @click="filtersReset">
          Сбросить фильтры
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="lists">
      <card-appartment
        :appartment="card"
        v-for="card in appartments"
        :key="card.id"
      ></card-appartment>
    </div>
  </div>
</template>



<script>
import cardAppartment from "@@/components/CatalogApartment/CardAppartment";
export default {
  components: { cardAppartment },

  data() {
    return {
      numberRoom: null,
      floor: [1, 99],
      square: [1, 999],
      cost: [1, 100],
      filteredAppartments: [],
    };
  },

  methods: {
    filtersReset() {
      this.numberRoom = null;
      this.floor = [1, 99];
      this.square = [1, 999];
      this.cost = [1, 100];

      this.filteredAppartments = this.filtered();
    },

    setFilter() {
      this.filteredAppartments = this.filtered();
    },

    filtered() {
      return this.$store.getters.appartments
        .filter((appartment) => {
          // Фильтруем по количеству комнат
          if (this.numberRoom) return appartment.rooms == this.numberRoom; // Если указан фильтр, то возвращаем совпадение
          return appartment.rooms; // иначе возвращаем всё
        })
        .filter((appartment) => {
          // Фильтруем по этажности
          return (
            appartment.floor >= this.floor[0] &&
            appartment.floor <= this.floor[1]
          );
        })
        .filter((appartment) => {
          // Фильтруем по размеру квартиры
          return (
            appartment.square >= this.square[0] &&
            appartment.square <= this.square[1]
          );
        })
        .filter((appartment) => {
          // Фильтруем по цене
          return (
            appartment.price / 1000000 >= this.cost[0] &&
            appartment.price / 1000000 <= this.cost[1]
          );
        });
    },
  },

  mounted() {
    this.filteredAppartments = this.$store.getters.appartments;
  },

  computed: {
    appartments() {
      return this.filteredAppartments;
    },
    maxFloor() {
      return this.$store.getters.maxFloor;
    },
    maxPrice() {
      return this.$store.getters.maxPrice;
    },
    maxSquare() {
      return this.$store.getters.maxSquare;
    },
  },
};
</script>




<style lang="scss" scoped>
.header__title {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.header__title h1 {
  font-size: 34px;
  text-transform: uppercase;
}

// FILTERS
.filters {
  display: flex;
  flex-wrap: wrap;
  margin: 0 25px;
  min-width: min-content;
  justify-content: center;
  margin-bottom: 30px;
}
.filter-el {
  margin-right: 60px;
  min-width: 204px;
  max-width: 250px;
}
.btns-room {
  display: flex;
  flex-direction: column;
}
.filter-el-name {
  font-weight: bold;
  font-size: 12px;
  line-height: 28px;
  height: 28px;
  text-transform: uppercase;
}
.rooms {
  display: flex;
}
.btn-count-room {
  font-family: "Gotham Pro" !important;
  padding: 10px;
  width: 47px;
  height: 40px;
  background-color: white;
  font-size: 18px;
  font-weight: 700;
  margin-right: 4px;
  line-height: 1rem;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
}
.btn-count-room:hover {
  border: 1px solid #70d24e;
}
.btn-count-room:focus {
  outline: #70d24e;
  border: 1px solid #70d24e;
}
.btn-count-room__active {
  background-color: #70d24e;
  color: white;
}
.show-vals {
  display: flex;
  justify-content: space-between;
}
.show-vals_val {
  background-color: white;
  padding: 6px;
  width: 80px;
  height: 40px;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  text-align: center;
}
.filter-btns_reset {
  font-size: 10px;
  line-height: 28px;
  margin-top: 5px;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
}

// CONTENT
.lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
