#!/usr/bin/env node


/* list of task and its characteristics :
 
 * tasks status [done, in progress]
 
 * tasks description [normal description of the task]
 
 * list all task and by category [tasks done, tasks in progress]
 
 */

const args = process.args.slice(2);

if (args.inlcudes('--help')) {
	console.log("Usage: TaskTracker [options]");
	process.exit(0);
};


function checkForJSON() {

};
// it's going to check for a json file for the month, 
// if there's no one it will create it.





function addTask() { };


function deleteTask() { };


function updateTask() { };
