<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/about1">About1</router-link>
        </div>
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
    </div>
</template>

<style lang="scss">
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.4s ease-out, opacity 0.4s ease-out;
    }
    .slide-enter {
        transform: translateX(-100px);
        opacity: 0;
    }
    .slide-leave-to {
        transform: translateX(100px);
        opacity: 0;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
