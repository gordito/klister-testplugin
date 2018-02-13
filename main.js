/*
	A testcommand, exports Init and Run
*/

var Controller = null;
var Session = null;

var ret = {};
ret.com = 'testplugin';
ret.data = {};
ret.data.test = 'hej hej 😁';

function Init(c, s)
{
	Controller = c;
	Session = s;
}

function Run(com)
{
	console.log('== TESTCOMMAND RUN ==');
	console.log(com);
	// console.log(req);
	// console.log(resp);

	Session.Send(ret);
	console.log('== TESTCOMMAND END ==');
}

module.exports = {
	Init,
	Run
};