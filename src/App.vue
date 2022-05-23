<template>
    <div id="app">
        <VueSSRPagination :current-page.sync="currentPage" :total="1" />
    </div>
</template>

<script>
// import YoPagination from '@/packages/Pagination.vue'
export default {
    name: 'App',
    data() {
        return {
            currentPage: 1,
        }
    },
}
</script>

<style></style>
