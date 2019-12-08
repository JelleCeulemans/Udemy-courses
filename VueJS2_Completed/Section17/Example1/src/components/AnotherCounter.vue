<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import * as types from '../store/types';
    export default {
        methods: {
            ...mapActions({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
            })
        }
    }
</script>