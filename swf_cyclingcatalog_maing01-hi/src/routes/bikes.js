//@@viewOn:imports
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5tilesg01";
import Config from "./config/config.js";
import Lsi from "../config/lsi.js";
import ExampleTile from './example';
import "./bikes.less";
import CustomForm from "./form";
//@@viewOff:imports


export const Bikes = UU5.Common.VisualComponent.create({
//@@viewOn:standardComponentLifeCycle
  getInitialState() {
    return {
      bikesArr: [
        {
          name: "Bike-1",
          id: "1",
          uuIdentity: "4-4-1",
          src: "https://velosophy.cc/wp-content/uploads/2019/05/190429-Velosophy-A-048.5-945x630.png",
          role: {
            en: "First"
          },
        },
        {
          name: "Bike-2",
          id: "2",
          uuIdentity: "4-4-1",
          src: "https://ardis-bike.com.ua/content/images/26/ardis-elite-2-bike-mtv-28-87172324086228.jpg",
          role: {
            en: "Second"
          },
        }]
    }
  },
  addBike(obj) {
    this.setState({bikesArr: [...this.state.bikesArr, obj]});
  },
  deleteBike(id) {
    this.setState(prevState => ({
      bikesArr: prevState.bikesArr.filter(el => el.id !== id )
    }));
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

  _getBikes(arr) {
    return arr;
  },

  //@@viewOff:private

  //@@viewOn:render
  render() {
    const leadingBikes = this._getBikes(this.state.bikesArr);
    const func = "check";
    return (
      <UU5.Bricks.Div style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#f5f5f5"
      }}>
        <UU5.Bricks.Section {...this.getMainPropsToPass()}>
          <UU5.Tiles.List
            tile={<ExampleTile/>}
            data={leadingBikes}
            func={this.deleteBike}
            tileHeight={300}
            tileMinWidth={220}
            tileMaxWidth={400}
            tileSpacing={8}
            tileElevationHover={1}
            tileBorder
            tileStyle={{borderRadius: 4}}
            rowSpacing={8}
            tileJustify="space-between"
            scrollElement={window}
          />
        </UU5.Bricks.Section>
        <UU5.Bricks.Section style={{display: "flex", margin: "auto"}}>
          <CustomForm addBike={this.addBike}/>
        </UU5.Bricks.Section>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Bikes;
