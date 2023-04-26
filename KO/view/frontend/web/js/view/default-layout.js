define([
    'jquery',
    'ko',
    'uiComponent'
],function($, ko, Component){
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Study_KO/view/textPresentation'
        },

        loremIpsum: function() {
            return "i18n:'the end'"
        }
    });
});