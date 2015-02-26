var React=require("react");

var Childcomponent=require("./childcomponent");
var Childcomponent2=require("./childcomponent2");
var Component3=require("./component3");

var maincomponent = React.createClass({
  render: function() {
    return <div>hello
      <Childcomponent2/>
      <Childcomponent />
      <Component3 />
    </div>;
  }
});
module.exports=maincomponent;