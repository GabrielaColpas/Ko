define([
    'jquery',
    'ko',
    'Study_KO/js/view/default-layout'
], function ($, ko, layoutBase) {
    'use strict';

    return layoutBase.extend({
        defaults: {
            template: 'Study_KO/action/changeDateColor',
            selectedColor: ko.observable('red')
        },

        initialize: function () {
            this._super();
        },

        selectColor: function(){
            let color = $('#input-color-date').val();
            return this.changeColor(color);
        },

        changeColor: function(selectedColorInput) {
            return $('#current-date').css('color', selectedColorInput);
        }
    });
});