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
        <div class>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFUElEQVRYR61XS28bVRT+7owfUZU2bt4lduySKLQpiES0KAsWqcQSgdggdi38ge54qJF4LFiDxJpkw4YisUE0UitN2zzapm2cNo9GoqLm1VQKMY4T1x479qBzZ+74zHhMWsRI1szce+ec737fd86MBZxjPJ2OlVpbzwnLGgdAP3kIADU6C7qyD8sZp7O8Z3NqPugMy1qqWdZXi0NDUzw+xu7fT0HTDACpeho7qUpC4zIxG+NJXGDOvAuOgaUxOS5Eploun146fjwj842trz+UyX07sSkQkgUV0KXBx4g77jzD1/NrYtNhLVPN50fF2MrKWej6JCVSlDsoZWJ/4AYw+wDxS+EBZlmfiVfX1tJCiBFXExaQkg22tOBIOISZ3YK9xMeSAkQ+UICVR5Q/GthzGLWAK+LU2polH3QCa3Uk8uqbVBKD0SgeVyr4enMTs7sFpWOjNAES+pNzw0qgp1ZXLU4/9wEB+25gAL3hkKvEdD6Pyb+28Hhvzwawj0f8FaNyueY+ubpqM8AMZ1/aoxcGnkdvOOx3Ay7m85hygPifdYOzivFXk5JHvLKyYs8JAU6/AnVhcABHAgDQIyTLdH4Hk1tbdYBNKonvgMsiRpeXHdPbJqKdDx84gNdjMWyUy3j7cBvioTBCQYGdqARkcisLkocb0W9Y/72UZ2R5uS4BAE0IvNHRgdcOHfLQHtM09IR0xHQdLU3AEJDzjzbwwDRtUh1m/62HiJfv3fMwQM90hMP4MJFo0F0NtAqBNl1HZ0hDTNMb1nGjupNNQIuX7t51y1BJQOd3urpw8uDBpiDUBEnTqWto0zR06rpHqqmtLC5ub8uKqfu83t4lQSeWlizSXSZn7icWPu7v3xeAfwFJ1SGl0tAqNGlU7g9XDtV5h9NpCYAO0l9pR2Pvdnc/FQvNUJJXCAh5p1StSSBUvp4X3jEC4ERwmXAYaQ+HMZFMPjMLQQ+QVMTOhWwWxs5OXZKhxUXJCu1eAVFM9EWj+PHYC/8LgIplIbdXwbfZv/FDbtt9tYuBO3ckA7R7akTcD5/3J/Bme/t/BvCkVsWfZhkbponfzDJ+2tnBH2RI1r7F0du3GwBQxng0gunh4WdOvlkp45FJPxNPqjWULAs3ikWki0XbX8xnEkjy1i0XAGfii1QSbz3F7olaSrZZqcjElZr9yUGJKelisSivObPqy0oCSiwseDxA+sejUVx+8UTT3XNqN8uVhnU/myaM3V3kHTBq56ozekz/3M2blkd7ITCRiONMT48bWBmIUxuE7tdyGXOFAn4vl12d1c45CMWAZLz3+nW7ETETvt/TgzM93bic20YyEsFOtepSG5Q4V63iUj4P2nlQP/EwYN9Iw0sgXfPzEoBiQZWjQv5RXx8Oh+ofJBxAqVbDjUIBC4UCTNLZmXQbmuqwrMQbGGmfm7MBOIv8AM7H44EA5nd3cTWftw3GytftKQFJeat3Tdk2O+thgBZxMBOJBNoZA7+USvg+m8V2tepJ7O+iqtx0X3vnpShZb52Z8UqgADg7+CAeR18kggelEi7lcnhomjKxCqz0DALAmfGwpL6+KEfLtWuGBoxTQBWEy9AZDiMeiWClWJQ+4XPyE84nndKf+4Cv87x5gSURMYxPhaZ9Qg+45ehce5I5idTO/XNSe8aexMbfMT5DSiC12nsChhELC5GGECkVgO+C71om9b8z2Bh/oUmg7DvDnasDyayNjBy1K8cwUjpgCALhSyDvA2hWQHhgXspBtDOGMwBOr4+O2n9O3cMwzmpCnNOAERWYe8NPv2KEU03AuPM9a4ArsKyre6HQl5nR0Rzl/QfPYOG5pQlWjQAAAABJRU5ErkJggg=="
                alt
            />
        </div>

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
