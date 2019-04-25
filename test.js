require('./index')(global, process);

//filesystem is preloaded in library as _fs
def('fd', _fs.readFileSync('./test.js', 'utf-8'));

print("test.js file length %s", sizeof(fd));

//console.log
print("Hello World");

//console.dir
printo({foo: 1, bar: 2});

//console.table
printt([1,2,3,4], [1,2,3,4]);

//console.error
perror("Oops... :/");

//define global var equ. global[var_name] = value

def('MaxConnections', 1000);
def('_OBJ', {}).foo = sizeof(fd);

//define global var with require equ. global[var_name] = require(module_name)
defr('_HTTP', 'http');

//delay
setTimeout(function(){

    clear(); //clear console

}, 10000);