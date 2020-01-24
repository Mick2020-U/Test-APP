import {Client} from "uu_appg01";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import "uu5tilesg01";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import "uu_plus4u5g01-app";
import "uu5g04-forms";
import {BikeDetails} from "./bikeDetails";

const BINARY_URL = "https://uuos9.plus4u.net/uu-bookkitg01-main/78462435-5c73a1fdb9a14b4aaff232962752c9b6/getBinaryData";


const ExampleTile = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU5.Tiles.ExampleTile",
    classNames: {
      main: "uu5-tiles-exampletile"
    }
  },
  //@@viewOff: statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _goRoute(id) {
    UU5.Environment.setRoute(this.props.route, {bike: id});
  },
  //@@viewOff:private


  //@@viewOn:render
  render() {
    let mainProps = this.getMainPropsToPass();
    mainProps.style = {...mainProps.style, ...{height: "100%", width: "100%"}};

    return (
      <UU5.Bricks.Div  {...mainProps}>
        <UU5.Bricks.Button content="More" onClick={() => {
          UU5.Environment.setRoute({
            component: <BikeDetails data={this.props}/>,
            url: {useCase: "bike", parameters: {id: this.props.data.id}}
          })
        }} style={{
          position: "absolute",
          right: "2%",
          top: "2%"
        }}/>
        <UU5.Bricks.P>{this.props.data.name}</UU5.Bricks.P>
        <UU5.Bricks.Lsi style={{position: "absolute"}} lsi={this.props.data.role}/>
        <Plus4U5.Bricks.Image style={{display: "block", margin: "auto", width: "50%", background: "#f5f5f5"}}
                              src={this.props.data.src} alt={this.props.data.src}/>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default ExampleTile;
