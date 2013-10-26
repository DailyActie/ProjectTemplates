/*
 * File: app/controller/Account.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Account', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: 'mainview',
            loginPanel: 'mainview #loginPanel',
            welcomePanel: 'mainview #welcomePanel'
        },

        control: {
            "mainview #showLoginButton": {
                tap: 'showLogin'
            },
            "mainview #showRegisterButton": {
                tap: 'showRegister'
            },
            "loginform #loginButton": {
                tap: 'login'
            },
            "registerform #registerButton": {
                tap: 'register'
            }
        }
    },

    showLogin: function(button, e, eOpts) {
        
        var loginForm = Ext.create('MyApp.view.LoginForm'),	// Login form
            mainView = this.getMainView();					// Main view
        
        // Navigate to login
        mainView.push({
            xtype: "loginform",
            title: "Login"
        });
        
    },

    showRegister: function(button, e, eOpts) {
        
        var registerForm = Ext.create('MyApp.view.RegisterForm'),	// Registration form
            mainView = this.getMainView();							// Main view
        
        // Navigate to register
        mainView.push({
            xtype: "registerform",
            title: "Register"
        });
        
    },

    login: function(button, e, eOpts) {
        
        var form = button.up('formpanel'),			// Login form
        	values = form.getValues(),				// Form values
        	mainView = this.getMainView(),			// Main view
        	loginPanel = this.getLoginPanel(),		// Login and register buttons
        	welcomePanel = this.getWelcomePanel();	// Welcome panel
        
        // Success
        var successCallback = function(resp, ops) {
        
            // Go back
            mainView.pop();
        
            // Hide login panel
            loginPanel.hide();
        
            // Show welcome panel
            welcomePanel.show();
        
        };
        
        // Failure
        var failureCallback = function(resp, ops) {
        
            // Show login failure error
            Ext.Msg.alert("Login Failure", resp);
        
        };
        
        
        // TODO: Login using server-side authentication service
        // Ext.Ajax.request({
        //		url: "/api/login",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });
        
        // Just run success for now
        successCallback();
    },

    register: function(button, e, eOpts) {
        
        var form = button.up('formpanel'),			// Login form
            values = form.getValues(),				// Form values
            mainView = this.getMainView(),			// Main view
            loginPanel = this.getLoginPanel(),		// Login and register buttons
            welcomePanel = this.getWelcomePanel();	// Welcome panel
        
        // Success
        var successCallback = function(resp, ops) {
        
            // Go back
            mainView.pop();
        
            // Hide login panel
            loginPanel.hide();
        
            // Show welcome panel
            welcomePanel.show();
        
        };
        
        // Failure
        var failureCallback = function(resp, ops) {
        
            // Show login failure error
            Ext.Msg.alert("Registration Failure", resp);
        
        };
        
        
        // TODO: Register using server-side authentication service
        // Ext.Ajax.request({
        //		url: "/api/register",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });
        
        // Just run success for now
        successCallback();
    }

});