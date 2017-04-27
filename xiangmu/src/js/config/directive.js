/**
 * Created by user on 2017/4/27.
 */
angular.module('myApp')
    .directive('inputFile',function(){
        return {
            restrict:'E',
            template:'<div class="input-file">'+
                        '<input type="file" id="{{addFile}}" style="display: none;">'+
                        '<label for="{{addFile}}" class="addFile"></label>'+
                    '</div>',
            controller:function($scope){
                $scope.addFile = 'addFile' + $scope.$id;
            },
            scope:{},
            link:function(scope,ele){
                var inputFile = ele.find('div'),
                    input = $(inputFile).find('input');
                input.on('change',function(){
                    var reader = new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload = function(){
                        $(inputFile).find('label')[0].style.background = 'url(' + this.result + ') no-repeat center center';
                    }
                })
            }
        }
    })