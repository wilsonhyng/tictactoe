// console.log('_|_|_' + '\n' +
//             '_|_|_' + '\n' + 
//             ' | |'
// );

function ask(board, format, callback) {
 var stdin = process.stdin, stdout = process.stdout;
 
 stdin.resume();
 stdout.write(board + '_|_|_' + '\n' + '_|_|_' + '\n' + ' | | \n');
 
 stdin.once('data', function(data) {
   data = data.toString().trim();
 
   if (format.test(data)) {
     callback(data);
   } else {
     stdout.write("It should match: "+ format +"\n");
     ask(board, format, callback);
   }
 });
}

// input 1 - 9 for location
// recursive call till base case is satisfied / someone won / 3 in a row


ask("\n Player 1 \n", /.+/, function(turn1) {
  console.log("\n Turn 1: \n", turn1);
  ask("\n Player 2 \n", /.+/, function(turn2) {
    console.log("\n Turn 2: \n", turn2);
 
    process.exit();
  });
});