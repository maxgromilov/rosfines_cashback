<template>
    <b-aspect
        aspect="4:2"
        class="header"
        :style="`background-image: url(${company.image || ''})`"
    >
        <div class="header__content">
            <h1 class="header__title">
                {{ company.title }}
            </h1>
            <img :src="company.logo" :alt="company.name" class="header__logo" />
        </div>
    </b-aspect>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    computed: {
        ...mapGetters(['company']),
    },
};
</script>

<style lang="scss">
@import '@/components/bootstrap/vars';
.header {
    position: relative;
    margin-left: -1rem;
    margin-right: -1rem;
    margin-top: -1rem;
    padding: 1.5rem 1rem;
    background-color: $primary;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: $white;
    z-index: 1;
    min-height: 225px;

    &__content {
        display: flex;
        margin-top: auto;
        width: 100%;
    }
    &__title {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.3;
        max-width: 290px;
    }
    &__logo {
        min-width: 4.5rem;
        width: 4.5rem;
        height: 4.5rem;
        margin-left: auto;
        margin-top: auto;
    }
    .b-aspect-content {
        display: flex;
    }
}
</style>
