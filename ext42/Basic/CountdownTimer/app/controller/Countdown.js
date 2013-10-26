/*
 * File: app/controller/Countdown.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Countdown', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'timerDisplay',
            selector: 'mainviewport #timerDisplay'
        },
        {
            ref: 'startButton',
            selector: 'mainviewport #startButton'
        },
        {
            ref: 'resetButton',
            selector: 'mainviewport #resetButton'
        },
        {
            ref: 'dateField',
            selector: 'mainviewport  #dateField'
        },
        {
            ref: 'timeField',
            selector: 'mainviewport #timeField'
        }
    ],

    start: function(button, e, eOpts) {
        
        var DISPLAY_FORMAT = "{0} Days, {1} Hours, {2} Minutes, {3} Seconds";
        
        var me = this,
            dateField = me.getDateField(),
            timeField = me.getTimeField(),
            date = dateField.getValue(),
            time = timeField.getValue(),
            resetButton = me.getResetButton(),
            startButton = me.getStartButton(),
            timerDisplay = me.getTimerDisplay();
        
        // Ensure date and time have been entered
        if (date && time) {
        
            // Add time to date
            date.setHours(time.getHours());
            date.setMinutes(time.getMinutes());
        
            // Ensure date is greater than present
            if (date.getTime() > new Date().getTime()) {
        
                // Set UI state
                startButton.disable();
                dateField.disable();
                timeField.disable();
                resetButton.enable();
        
                // Variables for time units
                var days, hours, minutes, seconds;
        
                // Start timer
                me.interval = setInterval(function() {
        
                    // Calculate seconds left
                    var currentDate = new Date().getTime(),
                        secondsLeft = (date - currentDate) / 1000;
        
                    if (secondsLeft <= 0) {
                        clearInterval(me.interval);
                        me.reset();
                        me.complete();
                    }
        
                    // Update state
                    days = parseInt(secondsLeft / 86400);
                    secondsLeft = secondsLeft % 86400;
                    hours = parseInt(secondsLeft / 3600);
                    secondsLeft = secondsLeft % 3600;
                    minutes = parseInt(secondsLeft / 60);
                    seconds = parseInt(secondsLeft % 60);
        
                    // Update display
                    timerDisplay.update(Ext.String.format(DISPLAY_FORMAT, days, hours, minutes, seconds));
        
        
                }, 1000);
        
            }
        
            else {
                Ext.Msg.alert('Alert', 'Date must be in the future.');
            }
        
        }
        
        else {
            Ext.Msg.alert('Alert', 'Please enter a valid start date and time.');
        }
        
        
        
    },

    reset: function(button, e, eOpts) {
        
        var dateField = this.getDateField(),
            timeField = this.getTimeField(),
            resetButton = this.getResetButton(),
            startButton = this.getStartButton(),
            timerDisplay = this.getTimerDisplay();
        
        // Set UI state
        startButton.enable();
        dateField.enable();
        timeField.enable();
        resetButton.disable();
        dateField.setValue('');
        timeField.setValue('');
        
        // Clear interval counter
        clearInterval(this.interval);
        
        // Clear display
        timerDisplay.update('');
    },

    complete: function() {
        Ext.Msg.alert('Time is up!', 'The countdown has completed');
    },

    init: function(application) {
        this.control({
            "mainviewport #startButton": {
                click: this.start
            },
            "mainviewport #resetButton": {
                click: this.reset
            }
        });
    }

});
