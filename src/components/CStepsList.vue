<template>
    <div class="steps-list">
        <div class="step__item">
            <div class="step__icon">
                <icon-service />
            </div>
            <div class="step__content">
                <a
                    class="step__phone"
                    :href="`tel:${company.phone}`"
                    variant="light"
                    >{{ company.phone }}</a
                >
                <div class="step__buttons">
                    <b-button :href="`tel:${company.phone}`" variant="light"
                        ><icon-phone />Записаться</b-button
                    >
                </div>
            </div>
        </div>
        <div class="step__item">
            <div class="step__icon">
                <icon-receiptBig />
            </div>
            <div class="step__content">
                <div class="step__text">{{ company.description }}</div>
                <div class="step__buttons">
                    <b-button to="/receipt" variant="primary"
                        ><icon-receipt />Загрузить чек</b-button
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IconReceiptBig from '@/components/icons/IconReceiptBig';
import IconReceipt from '@/components/icons/IconReceipt';
import IconPhone from '@/components/icons/IconPhone';
import IconService from '@/components/icons/IconService';

export default {
    name: 'CStepsList',
    components: {
        IconReceiptBig,
        IconReceipt,
        IconService,
        IconPhone,
    },
    computed: {
        ...mapGetters(['company']),
    },
};
</script>

<style lang="scss">
@import '@/components/bootstrap/vars';
.steps-list {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}
.step {
    &__item {
        display: flex;
        margin-bottom: 1rem;
    }
    &__icon {
        position: relative;
        margin-right: 1rem;
        &:before {
            position: absolute;
            content: '';
            height: 1.5rem;
            width: 2px;
            background-color: $gray-300;
            top: -2.25rem;
            left: calc(50% - 1px);
        }
    }
    &__content {
        padding-top: 0.25rem;
    }
    &__text {
        line-height: 1.25;
        margin-bottom: 0.75rem;
    }
    &__phone {
        line-height: 1.25;
        margin-bottom: 0.75rem;
        display: inline-block;
        color: $body-color;
        font-weight: bold;
    }
}
</style>
