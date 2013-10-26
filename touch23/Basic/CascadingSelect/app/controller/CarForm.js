/*
 * File: app/controller/CarForm.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CascadingSelect.controller.CarForm', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            makerField: 'formpanel #makerField',
            seriesField: 'formpanel #seriesField',
            modelField: 'formpanel #modelField',
            doneButton: 'formpanel #doneButton'
        },

        control: {
            "formpanel": {
                show: 'onCarFormShow'
            },
            "formpanel #makerField": {
                change: 'onMakerFieldChange'
            },
            "formpanel #seriesField": {
                change: 'onSeriesFieldChange'
            },
            "formpanel #modelField": {
                change: 'onModelFieldChange'
            },
            "formpanel #doneButton": {
                tap: 'onDoneButtonTap'
            }
        }
    },

    onCarFormShow: function(component, eOpts) {
        // Variables, I do declare
        var makerField = this.getMakerField(),
            makerNames,
            makerOptions;
        
        // Populate the maker field
        makerNames = Ext.getStore('Cars').getMakerNames();
        makerOptions = makerNames.map(function(makerName) {
            return { text: makerName, value: makerName };
        });
        makerOptions.unshift({ text: 'Choose a maker', value: null });
        makerField.setOptions(makerOptions);
        
        // Hide later parts of the form
        this.getSeriesField().hide();
        this.getModelField().hide();
        this.getDoneButton().hide();
    },

    onMakerFieldChange: function(selectfield, newValue, oldValue, eOpts) {
        // Variables, I do declare
        var seriesField = this.getSeriesField();
        
        // Special case: we chose the "choose a maker" option
        if (!newValue) {
        
            seriesField.hide();
        
        } else {
        
            // More variables to declare
            var store = Ext.getStore('Cars'),
                seriesNames = store.getSeriesNames(newValue),
                seriesOptions;
        
            // Update the series dropdown
            seriesOptions = seriesNames.map(function(seriesName) {
                return { text: seriesName, value: seriesName };
            });
            seriesOptions.unshift({ text: 'Choose a series', value: null });
            seriesField.setOptions(seriesOptions);
        
            // Show the series field
            seriesField.show();
        
        }
        
        // Hide later parts of the form
        this.getModelField().hide();
        this.getDoneButton().hide();
    },

    onSeriesFieldChange: function(selectfield, newValue, oldValue, eOpts) {
        // Variables, I do declare
        var modelField = this.getModelField();
        
        // Special case: we chose the "choose a series" option
        if (!newValue) {
        
            modelField.hide();
        
        } else {
        
            // More variables to declare
            var store = Ext.getStore('Cars'),
                makerName = this.getMakerField().getValue(),
                modelNames = store.getModelNames(makerName, newValue),
                modelOptions;
        
            // Update the series dropdown
            modelOptions = modelNames.map(function(modelName) {
                return { text: modelName, value: modelName };
            });
            modelOptions.unshift({ text: 'Choose a model', value: null });
            modelField.setOptions(modelOptions);
        
            // Show the series field
            modelField.show();
        
        }
        
        // Hide later parts of the form
        this.getDoneButton().hide();
    },

    onModelFieldChange: function(selectfield, newValue, oldValue, eOpts) {
        if (newValue) {
            this.getDoneButton().show();
        } else {
            this.getDoneButton().hide();
        }
    },

    onDoneButtonTap: function(button, e, eOpts) {
        var title = "That's a great car.",
            message = 'You chose a great car. Truly.';
        
        Ext.Msg.alert(title, message, Ext.emptyFn);
    }

});