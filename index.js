module.exports = function (_global, _process) {

    if (!!_global.__LIB__) return; //skrra

    var Obj = {

        __LIB__: true,

        //Default requires

        _fs: require('fs'),

        //Bind process.argv & argv.length to _argv & argl

        argv: _process.argv,
        argl: _process.argv.length,
        
        _BUF_: Buffer,
        _INF_: Infinity,

        //Loop counters

        _ca_: 0,
        _cb_: 0,
        _cc_: 0,
        _cd_: 0,
        _ce_: 0,
        _cf_: 0,

        //

        print: console.log,
        printo: console.dir,
        printt: console.table,
        perror: console.error,
        clear: console.clear,

        exit: process.exit,

        //Clear loop counters

        clc: function () {

           _ca_, _cb_, _cc_, _cd_, _ce_ = 0;
        },

        //Return first argument length

        sizeof: function () {

            return arguments[0].length;
        },

        def: function(){

            this[arguments[0]] = arguments[1];
        }
    };

    Object.assign(_global, Obj);
};