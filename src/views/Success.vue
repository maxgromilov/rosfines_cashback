<template>
    <div class="success">
        <c-navbar />
        <div class="success__message">
            <div class="success__message__icon">
                <icon-success />
            </div>
            <div class="success__message__title">Готово</div>
            <div class="success__message__text">
                Нам нужно немного времени на проверку данных. После этого мы
                переведем деньги.
            </div>
        </div>
        <c-fixed-footer>
            <div class="success__footer">
                <b-button to="/" size="lg" variant="light">Понятно</b-button>
            </div>
        </c-fixed-footer>
    </div>
</template>

<script>
import CNavbar from "@/components/CNavbar";
import CFixedFooter from "@/components/CFixedFooter";
import IconSuccess from "@/components/icons/IconSuccess";
export default {
    name: "success",
    components: {
        CNavbar,
        IconSuccess,
        CFixedFooter
    }
};
</script>

<style lang="scss">
@import "@/components/bootstrap/vars";
.success {
    height: calc(100vh - 2rem);
    display: flex;
    flex-direction: column;
    padding-bottom: 4.5rem;

    &__message {
        text-align: center;
        margin: auto;
        &__icon {
        }
        &__title {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
        &__text {
            display: inline-block;
            line-height: 1.38;
            max-width: 240px;
        }
    }
    &__footer {
        .btn {
            width: 100%;
            text-transform: uppercase;
            color: $gray-600;
        }
    }
}
</style>
