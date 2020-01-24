//@@viewOn:imports
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5tilesg01";
import Config from "../routes/config/config.js";
import Lsi from "../config/lsi.js";
import ExampleTile from './example';
import "../routes/bikes.less";
import CustomForm from "./form";
//@@viewOff:imports


export const Bikes = UU5.Common.VisualComponent.create({
//@@viewOn:standardComponentLifeCycle

  getInitialState() {
    let selectedOption = JSON.parse(localStorage.getItem('Bikes')) || [];
    return {
      bikesArr: selectedOption
    }
  },
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.LsiMixin,
    UU5.Common.RouteMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Bikes",
    classNames: {
      main: Config.CSS + "bikes",
      logos: Config.CSS + "bikes-logos",
      termsOfUse: Config.CSS + "bikes-terms"
    },
    lsi: Lsi.bikes
  },
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
  addBike(obj,setStateCallback) {
    let newArr = [...this.state.bikesArr, obj];
    this.setState({bikesArr: newArr, setStateCallback});
    localStorage.setItem('Bikes', JSON.stringify(newArr))
  },
  _getBikes(arr) {
    return arr;
  },

  //@@viewOff:private

  //@@viewOn:render
  render() {
    const leadingBikes = this._getBikes(this.state.bikesArr);
    return (
      <UU5.Bricks.Div style={{
        // display: "flex",
        // position: "relative",
        // width: "100%",
        // height: "100%",
        // overflow: "hidden",
        // background: "#f5f5f5"
      }}>
        <UU5.Bricks.Section {...this.getMainPropsToPass()} style={{display: "flex",}}>
          <UU5.Tiles.List

            tile={<ExampleTile/>}
            data={leadingBikes}
            tileHeight={200}
            tileMinWidth={100}
            tileMaxWidth={2500}
            tileSpacing={4}
            tileElevationHover={1}
            tileBorder
            tileStyle={{borderRadius: 4}}
            rowSpacing={4}
            tileJustify="space-between"
            scrollElement={window}
          />
        </UU5.Bricks.Section>
        <UU5.Bricks.Section style={{display: "flex", margin: "auto", width: "100%"}}>
          <CustomForm addBike={this.addBike}/>
        </UU5.Bricks.Section>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

// export default Bikes;
