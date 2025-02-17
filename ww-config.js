export default {
    editor: {
        label: {
            en: 'Synergy Payment via Stripe',
        },
    },
    properties: {
        stripeKey: {
            label: {
                en: 'Stripe key',
            },
            type: 'Text',
            defaultValue: '',
        },
        clientSecret: {
            label: {
                en: 'Client secret key',
            },
            type: 'Text',
            defaultValue: '',
        },
        stripeAccount: {
            label: {
                en: 'Stripe account ID',
            },
            type: 'Text',
            defaultValue: '',
        },
        mode: {
            label: { en: 'Mode' },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'payment', label: { en: 'Payment' } },
                    { value: 'setup', label: { en: 'Setup' } },
                    { value: 'subscription', label: { en: 'Subscription' } },
                ],
            },
            defaultValue: 'payment',
        },
        amount: {
            label: {
                en: 'Amount',
            },
            type: 'Number',
            options: {
                min: 1,
                max: 1000000,
                step: 10,
            },
            defaultValue: 100,
            hidden: content => !content.mode === 'setup',
        },
        layout: {
            label: { en: 'Layout' },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'accordion', label: { en: 'Accordion' } },
                    { value: 'tabs', label: { en: 'Tabs' } },
                ],
            },
            defaultValue: 'accordion',
        },
        theme: {
            label: { en: 'Theme' },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'stripe', label: { en: 'Stripe' } },
                    { value: 'night', label: { en: 'Night' } },
                    { value: 'flat', label: { en: 'Flat' } },
                ],
            },
            defaultValue: 'stripe',
        },
        returnUrl: {
            label: {
                en: 'Return url',
            },
            type: 'Text',
            defaultValue: '',
        },
    },
};
