<template>
    <div class="fixed-footer">
        <b-container>
            <slot />
        </b-container>
    </div>
</template>

<style lang="scss">
.fixed-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    .container {
        padding: 1rem;
        background-color: #fff;
    }
}
</style>