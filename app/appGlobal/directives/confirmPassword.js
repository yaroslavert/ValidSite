export function confirmPassword(){
    return {
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
}