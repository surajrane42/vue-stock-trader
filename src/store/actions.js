import Vue from "vue";

export const loadData = (context) => {
  Vue.http
    .get("data.json")
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        context.commit("SET_STOCKS", data.stocks);
        context.commit("SET_PORTFOLIO", {
          funds: data.funds,
          stockPortfolio: data.stockPortfolio
        });
      }
    });
};
