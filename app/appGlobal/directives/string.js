export function string(){
    return {
        require: 'ngModel',
        link : function test(scope, elm, attrs, ctrl){
            ctrl.$validators.string = function(modelValue, viewValue) {
                var isNumberInText = /[0-9]/g;
                return !isNumberInText.test(viewValue);
            }
        }
    }
}