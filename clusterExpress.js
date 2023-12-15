const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const express = require('express');

if (cluster.isMaster) {
    // If the current process is the master process, create worker processes
    cluster.fork();
    

    // Listen for when a worker exits, create a new one to replace it
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });
} else {


    const app = express();

    app.get('/', (req, res) => {
        res.send('Home Page');
    });

    app.get('/slowpage', (req, res) => {
        // Simulating a delay
        for (let i = 0; i < 500000000; i++) {} // Intentional CPU-heavy task for demonstration
        res.send('Slow page');
    });

    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Worker ${process.pid} is listening on port ${PORT}`);
    });
}

