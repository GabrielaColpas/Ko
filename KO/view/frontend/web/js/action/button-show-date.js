define([
    'jquery',
    'ko',
    'uiComponent',
], function ($, ko, uiComponent) {
    'use strict';

    return uiComponent.extend({
        defaults: {
            template: 'Study_KO/action/buttonShowDate',
            currentDate: ko.observable('')
        },

        showDate: function() {
            let data = new Date;
            let today = data.getDate();
            let month = data.getMonth() + 1;
            let year = data.getFullYear();
            this.currentDate(today +'/'+ month +'/'+ year);

            return today;
        }
    });
});