define([
    'jquery',
    'ko',
    'Study_KO/js/view/default-layout'
], function ($, ko, layoutBase) {
    'use strict';

    return layoutBase.extend({
        defaults: {
            template: 'Study_KO/action/buttonShowDate',
            currentDate: ko.observable('')
        },

        initialize: function () {
            this._super();
        },

        showDate: function() {
            let data = new Date;
            let today = data.getDate();
            let month = data.getMonth();
            let year = data.getFullYear();
            this.currentDate(today +'/'+ month +'/'+ year);
            return today;
        }
    });
});