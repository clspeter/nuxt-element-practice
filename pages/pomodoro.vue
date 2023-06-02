<template>
    <div class="grow bg-base-100 text-netural md:p-0 p-4">
        <div class="mx-auto mt-10 flex md:w-screen flex-col gap-2 rounded bg-secondary md:max-w-xl py-4 md:p-4">
            <div class="text-center text-3xl">Pomodoro Technique</div>
            <div class="flex flex-row justify-center text-2xl">
                <div class="basis-32">
                    <div class="text-center" id="break-label">Break</div>
                    <div class="flex flex-row items-center justify-center">
                        <button :disabled="isStarted" @click="decrementBreakLength" id="break-decrement"
                            class="opacity-80 h-[24px] rounded active:bg-primary disabled:pointer-events-none disabled:opacity-30">
                            <el-icon>
                                <Minus />
                            </el-icon>
                        </button>
                        <div id="break-length" class="mx-2">{{ breakLength }}</div>
                        <button :disabled="isStarted" @click="incrementBreakLength" id="break-increment"
                            class="opacity-80 h-[24px] rounded  active:bg-primary disabled:pointer-events-none disabled:opacity-30">
                            <el-icon>
                                <Plus />
                            </el-icon>
                        </button>
                    </div>
                </div>
                <div class="basis-32">
                    <div class="text-center" id="session-label">Session</div>
                    <div class="flex flex-row items-center justify-center">
                        <button :disabled="isStarted" @click="decrementSessionLength" id="session-decrement"
                            class="opacity-80 h-[24px] rounded active:bg-primary disabled:pointer-events-none disabled:opacity-30">
                            <el-icon>
                                <Minus />
                            </el-icon>
                        </button>
                        <div id="session-length" class="mx-2">{{ sessionLength }}</div>
                        <button :disabled="isStarted" @click="incrementSessionLength" id="session-increment"
                            class="opacity-80 h-[24px] rounded active:bg-primary disabled:pointer-events-none disabled:opacity-30">
                            <el-icon>
                                <Plus />
                            </el-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="mx-auto flex w-36 flex-col rounded border-2 border-primary py-2">
                <div class="text-center" id="timer-label">{{ isBreak ? 'Break' : 'Session' }}</div>
                <div class="text-center text-5xl" id="time-left">{{ timerString }}</div>
                <audio src="/time-up-ringtone.mp3" id="beep" ref="audioRef"></audio>
            </div>
            <div class="mb-2 flex flex-row justify-center gap-4">
                <button @click="toggleTimer" class="opacity-80 rounded active:bg-primary h-[40px]" id="start_stop">
                    <el-icon v-show="!isRunning" size="40">
                        <VideoPlay />
                    </el-icon>
                    <el-icon v-show="isRunning" size="40">
                        <VideoPause />
                    </el-icon>
                </button>
                <button @click="resetTimer" class="opacity-80 rounded  active:bg-primary h-[40px]" id="reset">
                    <el-icon size="40">
                        <Refresh />
                    </el-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {

    setup() {

        const breakLength = ref(5);
        const sessionLength = ref(25);
        const timerString = ref('25:00');
        const isBreak = ref(false);
        const isRunning = ref(false);
        const isStarted = ref(false);
        const audioRef = ref(null);
        let timer;

        const decrementBreakLength = () => {
            if (breakLength.value > 1 && !isRunning.value) {
                breakLength.value--;
            }
        };

        const incrementBreakLength = () => {
            if (breakLength.value < 60 && !isRunning.value) {
                breakLength.value++;

            }
        };

        const decrementSessionLength = () => {
            if (sessionLength.value > 1 && !isRunning.value) {
                sessionLength.value--;
            }
        };

        const incrementSessionLength = () => {
            if (sessionLength.value < 60 && !isRunning.value) {
                sessionLength.value++;
            }
        };

        const toggleTimer = () => {
            isStarted.value = true;
            isRunning.value = !isRunning.value;
            if (isRunning.value) {
                startTimer();
            } else {
                stopTimer();
            }
        };

        const startTimer = () => {
            const totalSeconds = isBreak.value ? breakLength.value * 60 : sessionLength.value * 60;
            let secondsLeft = totalSeconds;

            timer = setInterval(() => {
                secondsLeft--;

                const minutes = Math.floor(secondsLeft / 60);
                const seconds = secondsLeft % 60;
                timerString.value = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

                if (secondsLeft === 0) {
                    clearInterval(timer);
                    isBreak.value = !isBreak.value;
                    audioRef.value.play();
                    if (isBreak.value) {
                        timerString.value = `${breakLength.value}:00`;
                    } else {
                        timerString.value = `${sessionLength.value}:00`;
                    }
                    startTimer();
                }
            }, 1000);
        };

        const stopTimer = () => {
            clearInterval(timer);
        };

        const resetTimer = () => {
            clearInterval(timer);
            isRunning.value = false;
            isBreak.value = false;
            isStarted.value = false;
            breakLength.value = 5;
            sessionLength.value = 25;
            timerString.value = '25:00';
            audioRef.value.pause();
            audioRef.value.currentTime = 0;
        };

        watch([sessionLength], () => {
            if (!isBreak.value) {
                timerString.value = `${sessionLength.value}:00`;
            } else {
                timerString.value = `${breakLength.value}:00`;
            }
        });

        return {
            breakLength,
            sessionLength,
            timerString,
            isBreak,
            isStarted,
            isRunning,
            audioRef,
            decrementBreakLength,
            incrementBreakLength,
            decrementSessionLength,
            incrementSessionLength,
            toggleTimer,
            resetTimer,
        };
    },
};
</script>