import { ref } from 'vue';

export function useCount() {
    const count = ref(5);

    function setCount(item: number) {
        console.log('setCount', item)
        count.value = item
    }
    return {
        count,
        setCount,
    }
}

