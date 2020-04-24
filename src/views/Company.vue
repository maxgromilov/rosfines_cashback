<template>
    <div class="home">
        <c-main-header />
        <c-steps-list />
        <c-main-footer />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CMainHeader from '@/components/CMainHeader';
import CMainFooter from '@/components/CMainFooter';
import CStepsList from '@/components/CStepsList';
import CNavbar from '@/components/CNavbar';

export default {
    name: 'Company',
    components: {
        CMainHeader,
        CMainFooter,
        CStepsList,
        CNavbar,
    },
    computed: {
        ...mapGetters(['company']),
    },
    methods: {
        ...mapActions(['getCompany']),
    },
    created() {
        if (!this.company || this.$route.params.id) {
            this.getCompany(this.$route.params.id || 1);
        }
    },
};
</script>

<style lang="scss">
@import '@/components/bootstrap/vars';
.home {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
