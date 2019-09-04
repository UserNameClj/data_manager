<template>
    <div class="opera-zone">
        {{test}}
    </div>
</template>
<script>
export default {
    name:'OperaZone',
    data(){
        return {
            test:'操作区'
        }
    }
}
</script>
<style scoped>
.opera-zone{
    height: 50px;
    width: 100%;
    background-color: #fff;
}
</style>