var Reflux=require("reflux");
var actions=require("./action_name");

var store=Reflux.createStore({
	listenables: actions,
	onSetName:function(name){
		//name=name.toUpperCase();
		//fetch database 
		//
		this.trigger(name);
	}
});

module.exports=store;