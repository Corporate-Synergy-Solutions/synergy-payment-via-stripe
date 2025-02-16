<template>
    <form v-if="stripeLoaded" @submit.prevent="handleSubmit" class="stripe-checkout">
        <div class="inner-stripe-checkout">
            <StripeElements
                :stripe-key="stripeKey"
                :instance-options="stripeOptions"
                :elements-options="elementsOptions"
                ref="elementsComponent"
            >
                <StripeElement type="payment" :options="paymentElementOptions" ref="paymentComponent" />
            </StripeElements>
        </div>
        <button class="button-submit" type="submit">Submit</button>
    </form>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import { StripeElements, StripeElement } from 'vue-stripe-js';

const props = defineProps({
    stripeKey: String,
    clientSecret: String,
    returnUrl: String,
    stripeAccount: String,
    mode: String,
    amount: Number,
    theme: String,
    layout: String,
});

const stripeKey = ref(props.stripeKey);
const clientSecret = ref(props.clientSecret);
const stripeOptions = ref({
    // https://stripe.com/docs/js/initializing#init_stripe_js-options
    stripeAccount: props.stripeAccount || undefined,
});
const elementsOptions = ref({
    // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
    mode: props.mode,
    amount: props.amount,
    currency: 'usd',
    appearance: {
        theme: props.theme,
    },
});
const paymentElementOptions = ref({
    // https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options
    layout: props.layout,
});
const stripeLoaded = ref(false);

// Define component refs
const elementsComponent = ref();
const paymentComponent = ref();

onBeforeMount(() => {
    loadStripe(stripeKey.value).then(() => {
        stripeLoaded.value = true;

        // Good place to call your backend to create PaymentIntent
        // Skipping to the point when you got client_secret
    });
});

async function handleSubmit() {
    // Confirm the PaymentIntent using the details collected by the Payment Element
    const stripeInstance = elementsComponent.value?.instance;
    const elements = elementsComponent.value?.elements;

    if (stripeInstance) {
        const { error } = await stripeInstance.confirmPayment({
            elements,
            clientSecret: clientSecret.value,
            confirmParams: {
                return_url: props.returnUrl,
            },
        });

        if (error) {
            // This point is only reached if there's an immediate error when
            // confirming the payment. Show the error to your customer (for example, payment details incomplete)
            console.log(error);
        } else {
            // Your customer is redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer is redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    }
}
</script>

<style lang="scss">
.stripe-checkout {
    .inner-stripe-checkout {
        margin-bottom: 12px;
    }
}
.button-submit {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #4338ca;

    &:hover {
        background-color: #3730a3;
    }
}
</style>
