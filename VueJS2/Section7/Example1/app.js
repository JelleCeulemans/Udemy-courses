//var data = { status: 'Critical'};

var component = {
    data: function () {
        return {
            status: 'Critical'
        };
    },
    template: '<p>Server Status: {{status}} (<button @Click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function () {
            this.status = 'Normal';
            console.log(this.status);
        }
    }
};

new Vue({
    el: '#app',
    components: {
        'my-cmp': component
    }
});