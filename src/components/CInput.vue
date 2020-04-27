<template>
    <ValidationProvider :mode="mode" :name="name" :rules="rules" v-slot="{ errors, classes }">
        <div class="c-input__control">
            <div class="c-input__group" :class="classes">
                <input
                    v-mask="mask"
                    :id="name"
                    :name="name"
                    :type="type"
                    :placeholder="label"
                    :value="inputValue"
                    @change="handleChange($event)"
                    @input="handleInput($event)"
                    ref="input"
                    class="c-input"
                    autocomplete="off"
                />

                <label :for="name">{{ label }}</label>
            </div>
            <span class="c-input__error" v-if="errors">{{ errors[0] }}</span>
        </div>
    </ValidationProvider>
</template>

<script>
export default {
    name: "CInput",
    props: {
        mode: {
            type: String,
            default: "eager"
        },
        rules: {
            default: null
        },
        name: {
            type: String
        },
        label: {
            type: String
        },
        type: {
            type: String,
            default: "text"
        },
        mask: {},
        value: {}
    },
    methods: {
        getValue(event) {
            const value = event.target.value;
            return value;
        },
        handleInput(event) {
            const value = this.getValue(event);
            this.inputValue = value;
            if (typeof this.value !== "undefined") {
                this.$emit("input", value);
            }
        },
        handleChange(event) {
            this.$emit("change", this.getValue(event));
        }
    },

    computed: {
        inputValue: {
            get() {
                return this.value;
            },
            set() {}
        }
    }
};
</script>

<style lang="scss">
@import "@/components/bootstrap/vars";
.c-input {
    background-color: transparent;
    border: none;
    display: block;
    width: 100%;
    padding: 1px;
    &__group {
        position: relative;
        height: 56px;
        border-radius: 4px 4px 0 0;
        background-color: $gray-100;
        border-bottom: 1px solid $gray-600;

        line-height: 1.5;
        letter-spacing: 0.15px;
        padding: 1rem;
        input:not(:placeholder-shown) ~ label {
            padding-top: 0;
            padding-bottom: 0;
            font-size: 12px;
            top: 0.3rem;
        }
        input:not(:placeholder-shown) {
            position: relative;
            top: 0.333rem;
        }

        label {
            position: absolute;
            top: 0.4rem;
            font-size: 1rem;
            font-weight: normal;
            display: block;
            width: calc(100%);
            margin-bottom: 0;
            line-height: 1.5;
            color: $gray-600;
            border: 0 solid transparent;
            border-radius: 0.25rem;
            transition: all 0.1s ease-in-out;
            padding-top: 0.75rem;
            font-weight: 300;
        }
    }
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: $gray-600;
        font-weight: 300;
        line-height: 1.5;
        letter-spacing: 0.15px;
        opacity: 0;
    }
    &__error {
        font-size: 12px;
        color: $red;
    }
    &__control {
        margin-bottom: 0.75rem;
    }
}

.is-invalid--vue {
    border-color: $red;
}
</style>
