<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>{{ obj.msg }}</p>
    </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";

export default {
    name: "App",
    components: {},
    props:[],
    setup() {
        let msg = ref("我是App组件");
        let obj = reactive({
            msg: "hello world!"
        })
        return {
            msg,
            obj
        }
    },
};

</script>

<style>

</style>