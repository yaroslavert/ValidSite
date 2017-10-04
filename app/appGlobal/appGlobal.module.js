import {AppGlobal} from './appGlobal.component';

import {integer} from './directives/integer';
import {confirmPassword} from './directives/confirmPassword';
import {string} from './directives/string';

angular.module('appGlobal',[])
    .component('appGlobal', AppGlobal)
    .directive('integer', integer)
    .directive('confirmPassword', confirmPassword)
    .directive('string', string)
