<template>
    <div class="grow bg-gray-800 text-white">
        <div class="mx-auto mt-10 flex w-screen flex-col gap-2 rounded bg-emerald-700 md:max-w-xl p-4">
            <div class="text-center text-3xl">Pomodoro Technique</div>
            <div class="flex flex-row justify-center text-2xl">
                <div class="basis-32">
                    <div class="text-center" id="break-label">Break</div>
                    <div class="flex flex-row items-center justify-center">
                        <button id="break-decrement" class="h-[24px] rounded bg-emerald-800 active:bg-emerald-500">
                            <el-icon>
                                <Minus />
                            </el-icon>
                        </button>
                        <div id="break-length" class="mx-2">{{ breakLength }}</div>
                        <button id="break-increment" class="h-[24px] rounded bg-emerald-800 active:bg-emerald-500">
                            <el-icon>
                                <Plus />
                            </el-icon>
                        </button>
                    </div>
                </div>
                <div class="basis-32">
                    <div class="text-center" id="session-label">Session</div>
                    <div class="flex flex-row items-center justify-center">
                        <button id="session-decrement" class="h-[24px] rounded bg-emerald-800 active:bg-emerald-500">
                            <el-icon>
                                <Minus />
                            </el-icon>
                        </button>
                        <div id="session-length" class="mx-2">{{ sessionLength }}</div>
                        <button id="session-increment" class="h-[24px] rounded bg-emerald-800 active:bg-emerald-500">
                            <el-icon>
                                <Plus />
                            </el-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="mx-auto flex w-36 flex-col rounded border-2 border-emerald-800 py-2">
                <div class="text-center" id="timer-label">{{ isBreak ? 'Break' : 'Session' }}</div>
                <div class="text-center text-5xl" id="time-left">{{ timerString }}</div>
                <audio src="/time-up-ringtone.mp3" id="beep" ref="audioRef"></audio>
            </div>
            <div class="mb-2 flex flex-row justify-center gap-4">
                <button class="rounded bg-emerald-800 active:bg-emerald-500 h-[24px]" id="start_stop">
                    <el-icon size="24">
                        <VideoPlay />
                    </el-icon>
                    <el-icon size="24">
                        <VideoPause />
                    </el-icon>
                </button>
                <button class="rounded bg-emerald-800 active:bg-emerald-500 h-[24px]" id="reset">
                    <el-icon size="24">
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
        const audioRef = ref(null);
        let timer;


        return {
            breakLength,
            sessionLength,
            timerString,
            isBreak,
            isRunning,
            audioRef,
        };
    },
};
</script>