/*
	A testcommand, exports Init and Run
*/

var Controller = null;

var ret = {};
ret.com = 'testplugin';
ret.data = {};
ret.data.test = 'hej hej 😁';


function Init(controller)
{
	Controller = controller;

	setInterval(function()
	{
		console.log('Gordito Testplugin worker thread ', new Date().toUTCString());
	},1000);
}

function Run(controller, session, command)
{
	console.log('== TESTCOMMAND RUN ==');
	console.log(command);
	session.Send(ret);
	console.log('== TESTCOMMAND END ==');
}

module.exports = {
	Init,
	Run
};

