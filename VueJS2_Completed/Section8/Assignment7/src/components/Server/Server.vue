<template>
    <li class="list-group-item" @click="goToDetail" style="cursor: pointer">
        Server #{{ server.id}}
    </li>
</template>

<script>
    import {eventBus} from '../../main'
    export default {
        props: ['server'],
        methods: {
            goToDetail() {
                // console.log("show details");
                // eventBus.$emit('showDetails', {id: this.id, status: this.status})
                eventBus.$emit('serverSelected', this.server);

            }
        }
    }
</script>