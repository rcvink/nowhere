<template>
    <div class="history">
        <li class="list" v-for="statement in statements" :key="statement">
            {{ statement }}
        </li>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class History extends Vue {
    @Prop() private statements!: string[];

    public add(statement: string) {
        this.statements.push(statement);
    }
}
</script>

<style scoped lang="scss">
.history {
    color: rgb(192, 192, 192);
    text-align: left;
    text-transform: uppercase;
}

.list {
    list-style-type: none;
}
</style>