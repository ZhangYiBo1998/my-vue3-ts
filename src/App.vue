<template>
    <div>
        <h1>{{ msg }}</h1>
        <Person :msg="obj.msg" :list="list" />
        <Person :msg="obj.msg" />
        <button @click="changeMsg">修改信息</button>
    </div>
    <RouterView></RouterView>
</template>

<script lang="ts" setup name="App">
import { reactive, ref } from "vue";
import { RouterView } from 'vue-router';
import Person from "@/components/Person.vue";


type obj = {
    msg: string;
};

let msg = ref("我是App组件");
let obj = reactive<obj>({
    msg: "hello world!",
});
let list: Array<string> = ["1", "2"];

const changeMsg = () => {
    msg.value = "111111111111111111";
    obj.msg += "!";
};
</script>

<style></style>
