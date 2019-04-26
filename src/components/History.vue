<template>
    <div class="history">
        <li 
            class="list " 
            :key="index"
            v-for="(statement, index) in statements">
            {{ statement }}
        </li>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Models from '@/models';

export default Vue.extend({
    name: 'History',
    data() {
       return {
           statements: Models.state.statements,
       };
    },
});
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=VT323');

.history {
    color: rgb(192, 192, 192);
    font-size: 1.5em;
    text-align: left;
    font-family: 'VT323', monospace;
}

.list {
    list-style-type: none;
}

</style>