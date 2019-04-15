require('./index')(global, process);

var cnt = 0;

do {

    print();

    cnt++;
}while(cnt < argv[0]);