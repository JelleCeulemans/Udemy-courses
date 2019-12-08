<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="selectedComponent = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>

                <!--<app-blue>
                    <h1>Blue component!</h1>
                    <p>Is this blue component you like the most ?</p>
                </app-blue>
                <app-green>
                    <h1>Green component!</h1>
                    <p>Is this green component you like the most ?</p>
                </app-green>
                <app-red>
                    <h1>Red component!</h1>
                    <p>Is this red component you like the most ?</p>
                </app-red>-->

                <component :is="selectedComponent">
                    <h2>This is the Selected Component Content</h2>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function () {
            return {
                selectedComponent: ''
            }
        }
    }
</script>

<style>
</style>
