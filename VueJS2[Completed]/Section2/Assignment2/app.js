new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            buttonAlert: function () {
                alert('Button is clicked!');
            }/*,
            keyDownValue: function (event) {
                this.value = event.target.value;
            }*/
        }
    });