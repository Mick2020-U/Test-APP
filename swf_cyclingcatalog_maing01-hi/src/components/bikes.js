//@@viewOn:imports
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5tilesg01";
import Config from "../routes/config/config.js";
import Lsi from "../config/lsi.js";
import "../styles/bikes.less";
import CustomForm from "./form";
import Calls from "../calls";
import {BikeDetails} from "./bikeDetails";
import ExampleTile from "./example";

//@@viewOff:imports


// const Calls = {
//   load(dtoInData) {
//     return Client.get(
//       "https://uuappg01-eu-w-1.plus4u.net/uu-jokes-maing01/4ef6a7b01b5942ecbfb925b249af987f/joke/list",
//       dtoInData
//     );
//   }
// };


export const Bikes = UU5.Common.VisualComponent.create({
//@@viewOn:standardComponentLifeCycle
//   async getInitialState() {
//     let selectedOption = JSON.parse(localStorage.getItem('Bikes')) || [];
//     let res = await Calls.getBikes();
//     return {
//       bikesArr: res.data.itemList
//     }
//
//   },

  // async componentDidMount() {
  //   let res = await Calls.getBikes();
  //   this.setState({bikesArr: res.data.itemList});
  // },

  componentWillMount() {
    this.setCalls(Calls);
  },
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.LsiMixin,
    UU5.Common.RouteMixin,
    UU5.Common.LoadMixin
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
    lsi: Lsi.bikes,
    calls: {
      onLoad: "getBikes"
    }
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
  // getOnLoadData_(props) {
  //   return {
  //     code: "Hello"
  //   }
  // },
  //@@viewOff:overriding

  //@@viewOn:private

  // addBike(obj, setStateCallback) {
  //   let newArr = [...this.state.bikesArr, obj];
  //   this.setState({bikesArr: newArr, setStateCallback});
  // },

  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div>
        <UU5.Bricks.Div style={{
          display: "block",
          position: "relative",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#f5f5f5"
        }}>
          <UU5.Common.ListDataManager style={{width: "100%", margin: "auto"}}
                                      onLoad={Calls.getBikes}
                                      onCreate={Calls.postBike}
                                      onDelete={Calls.deleteBike}
          >
            {({viewState, errorState, errorData, data, handleLoad,handleCreate, handleDelete}) => {
              if (errorState) {
                // error
                return "Error";
              } else if (data) {
                // ready
                return (
                  <UU5.Bricks.Div style={{
                    "display": "flex",
                  }}>
                    <UU5.Tiles.List
                      tile={<ExampleTile delete={handleDelete}/>}
                      data={data}
                      tileHeight={200}
                      tileMinWidth={220}
                      tileMaxWidth={40000}
                      tileSpacing={8}
                      tileElevationHover={1}
                      tileBorder
                      tileStyle={{borderRadius: 4}}
                      rowSpacing={8}
                      tileJustify="space-between"
                      scrollElement={window}
                    />
                    <UU5.Bricks.Section style={{display: "flex", margin: "auto"}}>
                      <CustomForm addBike={handleCreate}/>
                    </UU5.Bricks.Section>

                  </UU5.Bricks.Div>
                )
              } else {
                // loading
                return <UU5.Bricks.Loading/>;
              }
            }}

          </UU5.Common.ListDataManager>

        </UU5.Bricks.Div>

      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

// export default Bikes;
