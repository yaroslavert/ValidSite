export function integer() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
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
}