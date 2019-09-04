<template>
    <div class="foot">
        {{test}}
    </div>
</template>
<script>
export default {
    name:'Foot',
    data(){
        return {
            test:'这是一份脚底内容'
        }
    }
}
</script>
<style scoped>
.foot{
    height: 50px;
    width: 100%;
    background: yellow
}
</style>