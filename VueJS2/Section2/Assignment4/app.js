new Vue({
  el: '#exercise',
  data: {
    myStyle: {
      highlight: false,
      shrink: true
    },
    textSizeStyle:  'textSizeStyle',
    colorStyle: 'colorStyle',
    fontweightStyle: 'fontweightStyle',
    attachClass: '',
    widthProgress: 0
  },
  computed: {
    progress: function() {
      return {
        backgroundColor: '#0FF',
        height: '25px',
        width: this.widthProgress + 'px'
      }
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function () {
        vm.myStyle.highlight = !vm.myStyle.highlight;
        vm.myStyle.shrink = !vm.myStyle.shrink;
      }, 500);
    },
    startProgress: function () {
      var wp = this;
      setInterval(function () {
        if (wp.widthProgress < 200) {
          wp.widthProgress++;
        } else {
          wp.widthProgress = 0;
        }
      },30);
    }
  }
});
