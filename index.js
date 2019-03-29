module.exports = function (_global, _process) {

    if (!!_global.__LIB__) return; //skrra

    var Obj = {

        __LIB__: true,

        _fs: require('fs'),

        argv: _process.argv,
        argl: _process.argv.length,
        
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

            _ca_, _cb_, _cc_, _cd_, _ce_;
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