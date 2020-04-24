<template>
    <div id="app">
        <b-container class="layout">
            <router-view />
        </b-container>
    </div>
</template>

<style lang="scss">
#app {
    //background-color: #f0f0f0;
}
.layout {
    background-color: #fff;
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
