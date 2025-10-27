#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.includes('--help')) {
	console.log('Usage: myApp [options]');
	process.exit(0);
};

