/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtJSMVCSampleApp.Application',

    name: 'ExtJSMVCSampleApp',

    requires: [
        // This will automatically load all classes in the ExtJSMVCSampleApp namespace
        // so that application classes do not need to require each other.
        'ExtJSMVCSampleApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtJSMVCSampleApp.view.main.Main'
});
