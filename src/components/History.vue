<template>
    <div class="history">
        <li class="list" v-for="statement in statements" :key="statement">
            C:\>{{ statement }}
        </li>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'History',
    data() {
       return {
           statements: this.initialStatements,
       };
    },
    methods: {
        add(statement: string): void {
            this.statements.push(statement);
        },
    },
    props: ['initialStatements'],
});
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=VT323');

.history {
    color: rgb(192, 192, 192);
    font-size: 1.5em;
    text-align: left;
    text-transform: uppercase;
    font-family: 'VT323', monospace;
}

.list {
    list-style-type: none;
}
</style>