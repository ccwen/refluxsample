var React=require('react');
var Reflux=require("reflux");
var store=require("./store_name");

var Childcomponent=React.createClass({
	getInitialState:function(){
		return {name:"unknown"}
	}
    ,onStoreName:function(name) {
      this.setState({name:name});
    }
    ,mixins: [Reflux.listenTo(store,"onStoreName")],
	render:function(){
		return <div>i am {this.state.name}</div>
	}
})
module.exports=Childcomponent;