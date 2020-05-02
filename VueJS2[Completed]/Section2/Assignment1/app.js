new Vue({
    el: '#exercise',
    data: {
        name: 'Jelle Ceulemans',
        age: 22,
        imageLink: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    methods: {
        random : function () {
            return Math.random(1);
        }
    }
});