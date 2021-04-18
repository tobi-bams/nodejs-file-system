const https = require('https');
const fs = require('fs');

https.get('https://jsonplaceholder.typicode.com/posts', (response) => {
    let data = '';

    //A Chunk part of the data has been Received
    response.on('data', (chunk) => {
        data += chunk;
    });

    //The whole data has been Received;
    response.on('end', () => {

        // Writing the data Recieved to a file;
        fs.writeFile('./result/posts.json', data, (err) => {
            if (err) throw err;
            console.log("Data Copied Successfully!")
        })
    })
}).on("error", (err) => {
    console.log("Error: " + err.message);
})