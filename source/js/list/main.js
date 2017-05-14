requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        vue: 'lib/vue.min'
    }
});


requirejs(['vue'], function   (vue) {
    var buttonComponent = {
        template: '#my_button_template',
        data: function () {
            return {
                counter: 0
            }
        }
    }

    var vm = new vue({
        el: '#vue_wrapper',
        components: {
            'my-button': buttonComponent
        }
    })
});