/*
	A testcommand, exports Init and Run
*/

var Controller = null;
var Session = null;

function Init(c, s)
{
	Controller = c;
	Session = s;
	console.log('test plugin');
	console.log(Controller);
	console.log(Session);
}

function Run(com, req, resp)
{
	console.log('== TESTCOMMAND RUN ==');
	console.log(com);
	console.log(req);
	console.log(resp);
}

module.exports = {
	Init,
	Run
};