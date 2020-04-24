<template>
    <footer class="footer">
        <p>Максимальная сумма возврата — {{ company.maxCashback }} ₽</p>
        <p>
            Если у вас есть вопросы, пишите на&nbsp;<a
                :href="`mailto:${contacts.email}`"
                >{{ contacts.email }}</a
            >
        </p>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'CMainHeader',
    props: {
        msg: String,
    },
    computed: {
        ...mapGetters(['company', 'contacts']),
    },
};
</script>

<style lang="scss">
@import '@/components/bootstrap/vars';
.footer {
    margin-top: auto;
    position: relative;
    color: $secondary;
    margin-bottom: 0.5rem;
}
</style>
