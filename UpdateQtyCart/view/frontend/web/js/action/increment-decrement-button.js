define([
    'ko',
    'uiComponent'
], function (ko, uiComponent) {
    'use strict';

    return uiComponent.extend({
        defaults: {
            qtyProductCart: ko.observable()
        },

        decrementQty: function() {
            var qtyValue = Number(this.qtyProductCart)
            return qtyValue - 1
        },

        incrementQty: function() {
            return this.qtyProductCart + 1
        }
    });
});