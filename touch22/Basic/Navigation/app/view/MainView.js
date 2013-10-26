/*
 * File: app/view/MainView.js
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

Ext.define('MyApp.view.MainView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainview',

    requires: [
        'MyApp.view.HomePanel'
    ],

    config: {
        itemId: 'mainView',
        items: [
            {
                xtype: 'homepanel'
            }
        ],
        navigationBar: {
            centered: false,
            docked: 'top',
            itemId: 'navBar',
            layout: {
                align: 'center',
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    itemId: 'menuButton',
                    iconCls: 'action',
                    text: 'Menu'
                }
            ]
        }
    }

});