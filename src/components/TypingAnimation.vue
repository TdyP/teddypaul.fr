<script lang="ts" setup>
import {PropType,ref} from 'vue';
import {onMounted} from 'vue';

const typingDelay = 100;
const typeToEraseDelay = 500;
const eraseDelay = 50;
const betweenWordsDelay = 50;
const lastWordDelay = 2000;

const props = defineProps({
    prefix: {
        type: String,
        default: ''
    },
    texts: {
        type: Array as PropType<string[]>,
        required: true
    }
});

const currentText = ref('');
const textIndex = ref(0);
const charIndex = ref(0);
const endReached = ref(false);
const typeText = () => {
    const currentTextLength = props.texts[textIndex.value]?.length;

    if (textIndex.value >= props.texts.length) {
        // Loop is over, restart
        setTimeout(() => {
            textIndex.value = 0;
            endReached.value = false;
            typeText();
        },betweenWordsDelay);
        return;
    }

    if (endReached.value) {
        // Erase text
        if (currentText.value.length > 0) {
            currentText.value = currentText.value.slice(0,-1);
            setTimeout(typeText,eraseDelay);
        } else {
            // Erasing is over, go to next word
            endReached.value = false;
            textIndex.value++;
            charIndex.value = 0;
            setTimeout(typeText,betweenWordsDelay);
        }
        return;
    }

    if (charIndex.value < currentTextLength) {
        // Still typing
        const nextChar = props.texts?.[textIndex.value]?.[charIndex.value];
        currentText.value += nextChar;
        charIndex.value++;
        setTimeout(typeText,typingDelay);
    } else {
        // Typing is over, start erasing
        const hasReachedLastWord = textIndex.value === props.texts.length - 1;
        setTimeout(() => {
            endReached.value = true;
            typeText();
        },hasReachedLastWord ? lastWordDelay : typeToEraseDelay);
    }
};

onMounted(() => {
    typeText();
});
</script>

<template>
    <span class="typing-container">
        <span class="typing-text">{{ prefix }} {{ currentText }}</span>
        <span class="blinking-cursor">|</span>
    </span>
</template>

<style>
.typing-container {
    font-size: 24px;
    font-family: monospace;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.blinking-cursor {
    font-weight: bold;
    font-size: 24px;
    margin-left: 2px;
    animation: blink 1s step-start infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>
