import { set } from 'nuxt/dist/app/compat/capi';

export function useCount() {
    const count = useState('count', () => Math.round(Math.random() * 20))

    function inc() {
        count.value += 1
    }
    function dec() {
        count.value -= 1
    }
    function countDown() {
        setTimeout(() => {
            count.value -= 1
        }, 1000);
    }
    return {
        count,
        inc,
        dec,
        countDown,
    }
}

