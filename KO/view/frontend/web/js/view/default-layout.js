define([
    'jquery',
    'ko',
    'uiComponent',
],function($, ko, uiComponent){
    'use strict';

    return uiComponent.extend({
        defaults: {
            template: 'Study_KO/view/textPresentation'
        },

        initialize: function() {
            this._super();
        },
    });
});