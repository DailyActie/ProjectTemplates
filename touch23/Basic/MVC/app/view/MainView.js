/*
 * File: app/view/MainView.js
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

Ext.define('MyApp.view.MainView', {
    extend: 'Ext.Panel',
    alias: 'widget.mainview',

    config: {
        itemId: 'mainView',
        padding: 10,
        items: [
            {
                xtype: 'button',
                itemId: 'runButton',
                text: 'Run Action'
            },
            {
                xtype: 'panel',
                itemId: 'detailPanel',
                padding: 10,
                tpl: [
                    '',
                    '<div>ID: {id}</div>',
                    '<div>Text: {text}</div>'
                ]
            }
        ]
    }

});