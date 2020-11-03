const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log("Removing note")
    }
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function() {
        console.log("Listing notes")
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log("Reading note")
    }
});

// add, remove, read, list

yargs.parse()