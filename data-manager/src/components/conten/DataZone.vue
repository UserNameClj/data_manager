<template>
    <div class="data-zone">
        {{test}}
    </div>
</template>
<script>
export default {
    name:'DataZone',
    data(){
        return {
            test:'数据展示区'
        }
    }
}
</script>
<style scoped>
.data-zone{
    height: calc(100% - 50px);
    width: 100%;
    background: black;
    color: #ffffff
}
</style>