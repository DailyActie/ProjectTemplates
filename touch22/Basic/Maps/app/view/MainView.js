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

    config: {
        items: [
            {
                xtype: 'panel',
                title: 'Map',
                itemId: 'mapPanel',
                items: [
                    {
                        xtype: 'map',
                        height: '100%',
                        itemId: 'map'
                    }
                ]
            }
        ],
        navigationBar: {
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'dropPinButton',
                    text: 'Drop'
                },
                {
                    xtype: 'button',
                    align: 'right',
                    itemId: 'listPinsButton',
                    text: 'Pins'
                }
            ]
        }
    }

});