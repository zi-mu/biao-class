function a(arg) {
    arg();
}
a(b);

function b() {
    console.log('i am b.');
}