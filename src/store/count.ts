import { defineStore } from "pinia";

// 选项式写法
// export const useCountStore = defineStore("count", {
//     actions: {
//         increment(value: number) {
//             this.sum += value;
//         },
//     },
//     state() {
//         return {
//             sum: 0,
//             school: "浙江科技学院",
//         };
//     },
//     getters: {
//         bigSum(state): number {
//             return state.sum * 10;
//         },
//         schoolStr(): string {
//             return (this.school += "!!!!");
//         },
//     },
// });

// 组合式写法
import { computed, ref } from "vue";
export const useCountStore = defineStore("count", () => {
    let sum = ref<number>(0);
    let school = ref<string>("浙江科技学院");

    function increment(value: number): void {
        sum.value += value;
    }

    let bigSum = computed(() => {
        return sum.value * 10;
    });

    let schoolStr = computed(() => {
        return (school.value += "!!!!");
    });

    return {
        sum,
        school,
        bigSum,
        schoolStr,
        increment,
    };
});

/**
 * 下面代码是在具体组件中使用的例子
 */
// import {useCountStore} from '引入store/count.ts文件';
// import {storeToRefs} from 'pinia';
// const countStore = useCountStore()
// 获取state中的数据
// console.log(countStore.sum);
// console.log(countStore.$state.sum);
// storeToRefs只会关注store中的数据，而不会处理其他属性
// const {sum, school, bigSum, schoolStr} = storeToRefs(countStore);

// 修改数据方式一
// countStore.sum++

// 修改数据方式二
// countStore.$patch({
//     sum: 0,
//     school: "浙江科技大学",
// })

// 修改数据方式三————通过action
// countStore.increment(1);

// 监听countStore的值变化
// countStore.$subscribe((mutate, state) => {
//     // 当countStore里面保存的数据发生变化时
//     console.log(state.sum);
// });
