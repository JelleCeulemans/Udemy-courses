<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers" :server="server"></app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';
    import {eventBus} from '../../main';
    export default {
        components: {
            'app-server': Server
        },
        data: function () {
            return {
                servers: [
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Normal'}
                ]
            }
        },
        created() {
            eventBus.$on('changeNormal',  (serObject) => {
                var index = this.servers.indexOf(this.servers.find(result => {
                    return result.id === serObject.id;
                }));
                this.servers[index] = serObject;
            });
        }
    }
</script>

<style>

</style>
