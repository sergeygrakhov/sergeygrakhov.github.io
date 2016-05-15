requirejs.config({
    baseUrl: "js",
    paths: {
        'jquery': ['https://code.jquery.com/jquery-1.12.3'],
        'lodash': ['lodash']

    },
    shim: {
        'jquery' :{
            exports: 'jQuery'},
        'lodash' :{
            exports: 'lodash'}
        }


});
require(['model','view','controller','jquery','lodash'], function() {



});