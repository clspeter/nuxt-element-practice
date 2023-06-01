import { ref } from 'vue';

export function useCount() {
    const count = ref(5);

    function inc() {
        count.value += 1
    }
    function dec() {
        count.value -= 1
    }
    function setCount(item: number) {
        console.log('setCount', item)
        count.value = item
    }
    return {
        count,
        inc,
        dec,
        setCount,
    }
}

