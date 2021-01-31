<template>
  <div class="card-container">
    <div class="card">
      <div class="card-header">
        <div class="card-header_floor">{{ appartment.floor }} этаж</div>
        <div class="card-header_square" v-if="appartment.rooms == 1">
          {{ appartment.rooms }} комната - {{ appartment.square }}м<sup
            ><small>2</small></sup
          >
        </div>
        <div
          class="card-header_square"
          v-if="appartment.rooms >= 2 && appartment.rooms < 5"
        >
          {{ appartment.rooms }} комнаты - {{ appartment.square }}м<sup
            ><small>2</small></sup
          >
        </div>
        <div class="card-header_square" v-if="appartment.rooms > 5">
          {{ appartment.rooms }} комнат - {{ appartment.square }}м<sup
            ><small>2</small></sup
          >
        </div>
      </div>

      <div class="card-content">
        <div class="card-content_number">{{ appartment.number }}</div>
        <div class="card-content_img">
          <img :src="`../_nuxt/${appartment.plan}`" alt="plan appartment" />
        </div>
      </div>

      <div class="card-footer">
        <div class="card-footer_price">{{ price }} р.</div>
        <div class="card-footer_price-by-metr">
          {{ priceByMetr }} р. за м<sup><small>2</small></sup>
        </div>
        <div class="card-btn">
          <v-btn dark color="#70D24E" block>Подробнее</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appartment: Object,
  },

  computed: {
    price() {
      let price = this.appartment.price;
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    priceByMetr() {
      return Math.round(this.appartment.price / this.appartment.square)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
};
</script>

<style>
.card-container {
  margin-bottom: 30px;
  margin-right: 15px;
}
.card {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 365px;
  background-color: white;
  padding: 8px;
  border-radius: 10px;
  overflow: hidden;
}
.card:hover .card-content {
  min-height: 210px;
  margin-bottom: 10px;
  transition: 0.3s;
}

.card-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  line-height: 28px;
  font-size: 12px;
  margin-bottom: 5px;
}
.card-header_floor {
  color: rgba(0, 0, 0, 0.5);
}

.card-content {
  display: flex;
  flex-direction: column;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  margin-bottom: 20px;
  min-height: 250px;
  transition: 0.15s ease;
}
.card-content_number {
  align-self: flex-end;
  width: fit-content;
  line-height: 28px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 0 1px 1px #ebebeb;
  border-radius: 0 10px 0 10px;
  margin-bottom: 4px;
}
.card-content_img {
  height: 100%;
  text-align: center;
  padding-bottom: 5px;
}
.card-content_img img {
  object-fit: contain;
  height: 90%;
  width: auto;
}

.card-footer {
  display: flex;
  flex-direction: column;
}
.card-footer_price {
  align-self: flex-end;
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
}
.card-footer_price-by-metr {
  align-self: flex-end;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  font-weight: bold;
  line-height: 28px;
}
.card-btn {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>