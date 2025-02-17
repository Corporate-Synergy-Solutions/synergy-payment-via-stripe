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
            bindable: true,
        },
        clientSecret: {
            label: {
                en: 'Client secret key',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        stripeAccount: {
            label: {
                en: 'Stripe account ID',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
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
            bindable: true,
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
            bindable: true,
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
            bindable: true,
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
            bindable: true,
        },
        returnUrl: {
            label: {
                en: 'Return url',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
    },
};
