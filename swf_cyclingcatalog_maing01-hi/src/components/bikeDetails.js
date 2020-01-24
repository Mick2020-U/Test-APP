//@@viewOn:imports
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5tilesg01";
import Config from "../routes/config/config.js";
import Lsi from "../config/lsi.js";
import Plus4U5 from "uu_plus4u5g01";
// import {Bikes} from "./bikes";
//@@viewOff:imports


export const BikeDetails = UU5.Common.VisualComponent.create({
//@@viewOn:standardComponentLifeCycle
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.LsiMixin,
    UU5.Common.RouteMixin,
    UU5.Common.CcrReaderMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  // statics: {
  //   tagName: Config.TAG + "Bike",
  //   classNames: {
  //     main: Config.CSS + "bike",
  //     logos: Config.CSS + "bike-logos",
  //     termsOfUse: Config.CSS + "bike-terms"
  //   },
  //   lsi: Lsi.bike
  // },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    identity: UU5.PropTypes.shape()
  },
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
  _goToHome() {
    UU5.Environment.setRoute("bikes", {info: "redirect"});
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div style={{
        display: "block",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#f5f5f5"
      }}>
        <Plus4U5.Bricks.Image style={{display: "block", margin: "auto", width: "50%", background: "#f5f5f5"}}
                              src={this.props.data.src} alt={this.props.data.src}/>

        <UU5.Bricks.Div>
          <UU5.Bricks.Button content="Back" onClick={this._goToHome} style={{
            position: "absolute",
            right: "2%",
            top: "2%"
          }}/>

          <UU5.Bricks.P>{this.props.data.name}</UU5.Bricks.P>
          <UU5.Bricks.Lsi lsi={this.props.data.role}/>
        </UU5.Bricks.Div>
        <UU5.Bricks.Lsi style={{position: "absolute"}} lsi={this.props.data.role}/>
      </UU5.Bricks.Div>


    );
  }
  //@@viewOff:render
});

// export default BikeDetails;
