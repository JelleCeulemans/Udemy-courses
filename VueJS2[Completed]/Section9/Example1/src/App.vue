<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectComponent = 'appQuote'">Quote</button>
                <button @click="selectComponent = 'appAuthor'">Author</button>
                <button @click="selectComponent = 'appNew'">New</button>
                <hr>
                <p>{{selectComponent}}</p>
<!--               <app-quote>-->
<!--                   <h2 slot="title">{{quoteTitle}}</h2>-->
<!--                   <p>A wonderful Quote</p>-->
<!--               </app-quote>-->
                <keep-alive>
                    <component :is="selectComponent">
                        <p>Default Content </p>
                    </component>
                </keep-alive>

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
