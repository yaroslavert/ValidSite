'use strict';

import angular from 'angular';

import './test/test.module';
import './appGlobal/appGlobal.module';
import './../css/main.css';

angular.module('app', [
    'appGlobal',
    'testGlobal'
]);