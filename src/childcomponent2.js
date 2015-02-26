var React=require('react');
var actions=require("./action_name");
var Childcomponent=React.createClass({
	namechanged:function(e) {
		actions.setName(e.target.value);
	}
	,render:function(){
		return <div>please input your name<input onInput={this.namechanged}/></div>
	}
})
module.exports=Childcomponent;