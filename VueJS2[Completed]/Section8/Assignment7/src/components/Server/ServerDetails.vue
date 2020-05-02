<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server number #{{server.id}} Selected, Status: {{server.status}}</p>
        <hr>
        <button @click="changeNormal">Change to normal</button>
    </div>

</template>

<script>
    import {eventBus} from '../../main'
    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
            changeNormal() {
                this.server.status = 'Normal';
               // eventBus.$emit('changeNormal', {id: this.serverObject.id, status: 'Normal'});
            }
        },
        created() {
            // eventBus.$on('showDetails',  (serObject) => {
            //     this.serverObject = serObject;
            // });
            eventBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
    }
</script>

<style>

</style>
