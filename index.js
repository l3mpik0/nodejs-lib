module.exports = function (_global, _process) {

    //if __LIB__ is defined return
    if (!!_global.__LIB__) return;

    var Obj = {

        __LIB__: true,

        //Default requires

        _fs: require('fs'),
        _sleep: require('thread-sleep'),
        //Bind process.argv & argv.length to _argv & argl

        argv: _process.argv,
        argl: _process.argv.length,

        _BUF_: Buffer,
        _INF_: Infinity,
        
        //Loop counters

        _cav_: 1,

        _ca_: 0,
        _cb_: 0,
        _cc_: 0,
        _cd_: 0,
        _ce_: 0,
        _cf_: 0,

        _TMP_A: "",
        _TMP_B: [],
        _TMP_C: {},
        _TMP_D: class {constructor(){}},

        //psleep: _sleep,

        print: console.log,
        printo: console.dir,
        printt: console.table,
        perror: console.error,
        pclear: console.clear,
        pexit: process.exit,

        //Clear loop counters

        clc: function () {

            _ca_,
            _cb_,
            _cc_,
            _cd_,
            _ce_ = 0;

            _cav_ = 1;
        },

        //Return first argument length Array/String/Object.length ? :)

        sizeof: function () {

            return arguments[0].length;
        },

        def: function () {

            if (_global[arguments[0]]) throw new Error(arguments[0] + " is already defined!");

            _global[arguments[0]] = arguments[1];

            return _global[arguments[0]];
        },

        defr: function () {

            if (_global[arguments[0]]) throw new Error(arguments[0] + " is already defined!");

            _global[arguments[0]] = require(arguments[1]);

            return _global[arguments[0]];
        }
    };

    Object.assign(_global, Obj);

    return Obj;
};