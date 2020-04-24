<template>
    <c-form-receipt />
</template>

<script>
import CFormReceipt from '@/components/CFormReceipt';
import CNavbar from '@/components/CNavbar';

export default {
    name: 'receipt',
    components: {
        CFormReceipt,
        CNavbar,
    },
};
</script>

<style lang="scss">
@import '@/components/bootstrap/vars';
.receipt {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
