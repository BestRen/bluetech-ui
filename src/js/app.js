define(['bluetech'], function () {
    'use strict';

    var app = angular.module("bluetechUI", ['bluetech']),
        //directive
        btDatepicker = require('directive/btDatepicker.js'),
        btDatepickerRange = require('directive/btDatepickerRange.js'),
        btPagination = require('directive/btPagination.js'),
        // btConfirmModal = require('directive/btConfirmModal.js'),  

        //service
        paginationService = require('service/btpaginationService.js'),
        pnotifyService = require('service/pnotifyService.js');
  
    return app;
});