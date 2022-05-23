import Pagination from "./Pagination.vue";
export const VueSSRPagination = Pagination;

export default {
  install(app) {
    app.component(Pagination.name, Pagination);
  },
};
