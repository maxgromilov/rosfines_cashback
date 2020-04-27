<template>
    <div class="receipt">
        <c-navbar />
        <c-form-receipt />
    </div>
</template>

<script>
import CFormReceipt from "@/components/CFormReceipt";
import CNavbar from "@/components/CNavbar";

export default {
    name: "receipt",
    components: {
        CFormReceipt,
        CNavbar
    }
};
</script>

<style lang="scss">
@import "@/components/bootstrap/vars";
.receipt {
    padding-top: 4rem;
}
</style>
