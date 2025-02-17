<template>
    <StripeCheckout :key="updateComponent" v-bind="content" />
</template>

<script setup>
import StripeCheckout from './stripe-checkout/StripeCheckout.vue';
import { watch, ref } from 'vue';
const props = defineProps({
    content: { type: Object, required: true },
});

const updateComponent = ref(0);
watch(
    () => props.content,
    () => (updateComponent.value += 1),
    { deep: true }
);
</script>
