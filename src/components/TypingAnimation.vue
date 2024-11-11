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
    <span class="inline-block">
        <span class="block md:inline">{{ prefix }}</span> <span
            class="border-r-4 sm:border-r-6 md:border-r-8 border-black animate-caret">{{ currentText }}</span>
    </span>
</template>
