<template>
    <div class="Person">
        <div>Person组件</div>
        <h2>{{ msg }}</h2>
        <h2 v-for="p in personArr" :key="p.id">{{ p.name }}</h2>
    </div>
    <h2>{{ list }}</h2>
</template>

<script setup lang="ts" name="Person">
import { reactive } from "vue";

interface PersonInter {
    id: string;
    name: string;
    age: number;
}
// 定义数组的两种写法
type Persons = PersonInter[];
type Persons2 = Array<PersonInter>;

type PropsType = {
    msg: string;
    list?: Array<string>;
};
// 接收+限制类型
const props = defineProps<PropsType>();
// 接收+限制类型+默认值
// withDefaults(defineProps<PropsType>(), {
//     list: () => ["默认值1", "默认值2"],
// });

let personArr: Persons = reactive<Persons>([
    {
        id: "001",
        name: "张三",
        age: 25,
    },
    {
        id: "002",
        name: "李四",
        age: 25,
    },
]);
</script>

<style scoped>
.Person {
    padding: 20px;
    background-color: #fff;
}
</style>
