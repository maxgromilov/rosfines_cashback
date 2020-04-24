<template>
    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
        <b-form-radio-group
            :id="`group-${name}`"
            :options="options"
            :name="name"
            v-model="max"
            :state="errors[0] ? false : null"
            @input="handleInput($event)"
            :value="inputValue"
        >
        </b-form-radio-group>
    </ValidationProvider>
</template>

<script>
export default {
    name: 'CRadiobuttons',
    props: {
        name: {},
        options: {
            default: [],
        },
        rules: {},
        value: {},
    },
    data() {
        return {
            max: '',
        };
    },
    methods: {
        getValue(event) {
            const value = event.target.value;
            return value;
        },
        handleInput(event) {
            const value = event;
            this.inputValue = value;
            if (typeof this.value !== 'undefined') {
                this.$emit('input', value);
            }
        },
    },
    computed: {
        inputValue: {
            get() {
                return this.value;
            },
            set() {},
        },
    },
};
</script>

<style lang="scss">
@import '@/components/bootstrap/vars';
</style>
