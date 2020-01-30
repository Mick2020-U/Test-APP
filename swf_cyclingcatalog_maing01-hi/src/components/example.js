import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import "uu5tilesg01";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import "uu_plus4u5g01-app";
import {BikeDetails} from "./bikeDetails";
import Lsi from "../config/lsi";


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
    },
    lsi: Lsi.bikes,
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
        <UU5.Bricks.Button content="Delete" onClick={() => {
          this.props.delete(this.props.data.id)
        }
        } style={{
          position: "absolute",
          right: "20%",
          top: "2%"
        }}> Delete</UU5.Bricks.Button>
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
