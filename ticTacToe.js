// console.log('_|_|_' + '\n' +
//             '_|_|_' + '\n' + 
//             ' | |'
// );

// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });



function ask(question, format, callback) {
 var stdin = process.stdin, stdout = process.stdout;
 
 stdin.resume();
 stdout.write(question + '_|_|_' + '\n' + '_|_|_' + '\n' + ' | |');
 
 stdin.once('data', function(data) {
   data = data.toString().trim();
 
   if (format.test(data)) {
     callback(data);
   } else {
     stdout.write("It should match: "+ format +"\n");
     ask(question, format, callback);
   }
 });
}

ask("Player 1 \n", /.+/, function(name) {
  ask("Player 2 \n", /^.+@.+$/, function(email) {
    console.log("Your name is: ", name);
    console.log("Your email is:", email);
 
    process.exit();
  });
});