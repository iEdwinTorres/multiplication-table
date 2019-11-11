document.write('<span class= "cell header">&times;</span>')
for (let i = 1; i <= 10; i++) {
    document.write('<span class= "cell header">' + i +'</span>')
}
document.write('<br>')

for (let x = 1; x <= 10; x++) {
    document.write('<span class= "cell header">' + x +'</span>')
    for (let y = 1 ; y <= 10; y++) {
        document.write('<span class= "cell">' + x * y +'</span>')
    }
    document.write('<br>')
}