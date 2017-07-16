angular.module('appGlobal')
       .directive('integer',function(){
           return{
                require: 'ngModel',
                link : function test(scope, elm, attrs, ctrl){
                    ctrl.$validators.integer = function(modelValue, viewValue) {
                        var INTEGER_REGEXP = /^-?\d+$/;
                        if (ctrl.$isEmpty(modelValue)) {
                            return true;
                        }

                        if (INTEGER_REGEXP.test(viewValue)) {
                            return true;
                        }
                        return false;
                    }
                    
                }
           }  
       })
       .directive('string',function(){
           return{
                require: 'ngModel',
                link : function test(scope, elm, attrs, ctrl){
                    ctrl.$validators.string = function(modelValue, viewValue) {
                        var isNumberInText = /[0-9]/g;
                        return !isNumberInText.test(viewValue);
                    }
                    
                }
           }  
       })
       .directive('confirmPassword',function(){
           return{
                scope:{
                    password:'='
                },
                require: 'ngModel',
                link : function test(scope, elm, attrs, ctrl){
                    
                     ctrl.$validators.confirmPassword = function(modelValue, viewValue) {
                        if(ctrl.$isEmpty(ctrl.$viewValue)){
                            return true;
                        }
                        return scope.password===ctrl.$viewValue;
                    }

                    scope.$watch('password', function(newValue, oldValue) {
                        scope.password = newValue;
                        ctrl.$setValidity('confirmPassword', scope.password===ctrl.$viewValue);  
                    }, true);
                    
                }
           }  
       })
       

       