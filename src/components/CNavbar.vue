<template>
    <nav class="c-navbar">
        <b-container class="c-navbar__container">
            <div class="c-navbar__bg" :class="variant">
                <router-link :to="to" class="c-navbar__link"
                    ><icon-arrow-left />
                </router-link>
                {{ title }}
            </div>
        </b-container>
    </nav>
</template>

<script>
import IconArrowLeft from '@/components/icons/IconArrowLeft';
export default {
    props: {
        title: {
            default: 'Получение денег',
        },
        to: {
            default: '/',
        },
        variant: {
            default: 'white',
        },
    },
    name: 'CMainHeader',
    components: {
        IconArrowLeft,
    },

    // computed: {
    //     ...mapGetters(['company', 'contacts']),
    // },
};
</script>

<style lang="scss">
@import '@/components/bootstrap/vars';
.c-navbar {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0;

    // margin-left: -1rem;
    // margin-right: -1rem;

    z-index: 100;
    &__bg {
        padding: 1rem 0;
        font-size: 20px;
        font-weight: 500;
        &.white {
            background-color: #ffffff;
        }

        &.opacity a {
            color: $white;
        }
    }
    &__container {
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.21);
    }
    &__link {
        height: 24px;

        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #20273d;
        &:hover {
            color: #20273d;
            text-decoration: underline;
        }
        svg {
            height: 20px;
            margin-right: 1.75rem;
            margin-top: -4px;
        }
    }
}
</style>
