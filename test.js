require('./index')(global, process);

//Create new Buffer

var buf = new _BUF_.from("abcde");

//print buffer

print(buf);

//get size of buffer

var bsize = sizeof(buf);

//buffer and buffer size in object

printo({buffer: buf, bufsize: bsize});