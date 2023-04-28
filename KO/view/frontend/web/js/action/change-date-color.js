define([
    'jquery',
    'ko',
    'uiComponent'
], function ($, ko, uiComponent) {
    'use strict';

    return uiComponent.extend({
        defaults: {
            template: 'Study_KO/action/changeDateColor',
            changeColorDate: ko.observable(false),
            textColor: ko.observable('')
        },
        
        selectColor: function(){
            let color = $('#input-color-date').val();
            this.changeColorDate(true);
            this.textColor(color)
            return this.changeColor(color);
        },

        changeColor: function(selectedColorInput) {
            return $('#current-date').css('color', selectedColorInput);
        }
    });
});