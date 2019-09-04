<template>
    <div class="conten">
        <OperaZone/>
        <DataZone/>
    </div>
</template>
<script>
import OperaZone from './conten/OperaZone';
import DataZone from './conten/DataZone'
export default {
    name:'Conten',
    data(){
        return {
            test:'这是内容面'
        }  
    },
    components: {
        OperaZone,
        DataZone
    }
}
</script>
<style lang="css" scoped>
.conten{
    height: calc(100vh - 100px);
    width: 100%;
    background: green;
}
</style>