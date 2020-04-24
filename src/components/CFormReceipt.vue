<template>
    <ValidationObserver
        v-slot="{ valid }"
        @submit.prevent="onSubmit"
        ref="form"
        tag="form"
        class="form-receipt"
    >
        <c-cash-receipt v-model="form.receipt" :error="error" />
        <div class="form-receipt__title">Данные для перевода</div>
        <div class="form-receipt__subtitle">Укажите реквизиты для возврата денег</div>
        <c-input v-model="form.name" rules="required" name="name" label="ФИО" />

        <c-input
            v-model="form.phone"
            rules="required|phone"
            :mask="mask"
            name="phone"
            label="Телефон для перевода денег"
        />

        <div class="form-receipt__status">
            <div class="form-receipt__status__title">Остались ли вы довольны обслуживанием?</div>
            <div class="form-receipt__status__inputs">
                <c-radiobuttons
                    v-model="form.status"
                    rules="required"
                    :options="options"
                    name="status"
                    class="ml-auto"
                />
            </div>
        </div>
        <c-fixed-footer>
            <div class="form-receipt__footer">
                <b-button
                    size="lg"
                    type="submit"
                    :variant="valid && form.receipt ? 'primary' : 'light'"
                >Получить деньги</b-button>
            </div>
        </c-fixed-footer>
    </ValidationObserver>
</template>

<script>
import { mapActions } from "vuex";
import CCashReceipt from "@/components/CCashReceipt";
import CInput from "@/components/CInput";
import CRadiobuttons from "@/components/CRadiobuttons";
import CFixedFooter from "@/components/CFixedFooter";
export default {
    name: "receipt",
    components: {
        CRadiobuttons,
        CCashReceipt,
        CInput,
        CFixedFooter
    },
    data() {
        return {
            value: null,
            disabled: false,
            mask: { mask: "+7 (999) 999-99-99", greedy: true },
            form: {
                name: "",
                phone: "",
                receipt: "",
                status: ""
            },
            error: "",
            options: [
                { text: "Да", value: true },
                { text: "Нет", value: false }
            ]
        };
    },
    methods: {
        async onSubmit() {
            if (!this.form.receipt) {
                this.error = "Error";
            }
            const success = await this.$refs.form.validate();

            if (!success || !this.form.receipt) {
                return;
            }

            const submit = await this.receiptSubmit(this.form);
            if (!submit) {
                return;
            }
            this.$router.push("success");
        },
        ...mapActions(["receiptSubmit"])
    },
    computed: {
        state() {
            return Boolean(this.value);
        }
    }
};
</script>

<style lang="scss">
@import "@/components/bootstrap/vars";
.form-receipt {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 7rem;

    &__validation {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    &__footer {
        .btn {
            width: 100%;
            text-transform: uppercase;
        }
        .btn-light {
            color: $gray-600;
        }
    }

    &__title {
        font-weight: 600;
        margin-top: 1.5rem;
        margin-bottom: 0.25rem;
    }

    &__subtitle {
        font-size: $font-size-sm;
        margin-bottom: 0.75rem;
        font-weight: 300;
    }
    &__status {
        padding-top: 1rem;
        display: flex;

        &__title {
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.25rem;
        }
        &__inputs {
            padding-top: 1.5rem;
            display: flex;
            min-width: 33.3333%;
        }
    }
}
</style>
