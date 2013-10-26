/*
 * File: app/store/MenuStore.js
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

Ext.define('MyApp.store.MenuStore', {
    extend: 'Ext.data.TreeStore',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyTreeStore',
            root: {
                expanded: true,
                text: 'My Tree ',
                children: [
                    {
                        text: 'Group 1',
                        expanded: true,
                        children: [
                            {
                                text: 'Menu Item 1',
                                leaf: true
                            },
                            {
                                text: 'Menu Item 2',
                                leaf: true
                            },
                            {
                                text: 'Menu Item 3',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Group 2',
                        expanded: true,
                        children: [
                            {
                                text: 'Menu Item 1',
                                leaf: true
                            },
                            {
                                text: 'Menu Item 2',
                                leaf: true
                            },
                            {
                                text: 'Menu Item 3',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Group 3',
                        expanded: true,
                        children: [
                            {
                                text: 'Menu Item 1',
                                leaf: true
                            },
                            {
                                text: 'Menu Item 2',
                                leaf: true
                            },
                            {
                                text: 'Menu Item 3',
                                leaf: true
                            }
                        ]
                    }
                ]
            },
            fields: [
                {
                    name: 'text'
                }
            ]
        }, cfg)]);
    }
});