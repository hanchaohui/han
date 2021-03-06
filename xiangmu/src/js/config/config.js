/**
 * Created by user on 2017/4/27.
 */
angular.module('myApp')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('community');
        $stateProvider
            .state({
                name:'home',
                url:'/home',
                template:'<p>This is home page</p>'
            })
            .state({
                name:'community',
                url:'/community',
                templateUrl:'birthParty.html',
                controller:function($state){
                    $state.go('community.info');
                }
            })
            .state({
                name:'dang',
                url:'/dang',
                template:'<p>This is dang page</p>'
            })
            .state({
                name:'resident',
                url:'/resident',
                template:'<p>This is resident page</p>'
            })
            .state({
                name:'community.info',
                url:'/info',
                templateUrl:'birth-party-info.html',
                controller:function($state){
                    $state.go('community.info');
                }
            })
            .state({
                name:'community.activity',
                url:'/activity',
                templateUrl:'birth-party-activity.html'
            })
            .state({
                name:'community.summarize',
                url:'/summarize',
                templateUrl:'birth-party-summarize.html'
            })
    })