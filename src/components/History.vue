<template>
    <div class="history typewriter">
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

export default Vue.extend({
    name: 'History',
    data() {
       return {
           statements: this.initialStatements,
       };
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
    font-family: 'VT323', monospace;
}

.list {
    list-style-type: none;
}

.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  animation: 
    typing 2s steps(40, end),
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

</style>