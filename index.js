module.exports = function (_global) {

    if (!!_global.__LIB__) return; //skrra

    var Obj = {

        __LIB__: true,

        _fs: require('fs'),

        argv: process.argv,
        argl: process.argv.length,
        parg: process.argv.splice(-1, 2),
        
        _BUF_: Buffer,
        _INF_: Infinity,

        _ca_: 0,
        _cb_: 0,
        _cc_: 0,
        _cd_: 0,
        _ce_: 0,
        _cf_: 0,

        print: console.log,
        printo: console.dir,
        printt: console.table,
        perror: console.error,
        clear: console.clear,

        exit: process.exit,

        clc: function () {

            _ca_, _cb_, _cc_, _cd_, _ce_ = 0;
        },

        sizeof: function () {

            return arguments[0].length;
        },

        test: function(){

            return this;
        }
    };

    Object.assign(_global, Obj);
};