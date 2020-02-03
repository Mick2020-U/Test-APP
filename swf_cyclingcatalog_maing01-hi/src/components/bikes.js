import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5tilesg01";
import PropTypes from "prop-types";
import Config from "../routes/config/config.js";
import Lsi from "../config/lsi.js";
import "../styles/bikes.less";
import CustomForm from "./form";
import Calls from "../calls";
import ExampleTile from "./example";

export const Bikes = UU5.Common.VisualComponent.create({
  getInitialState() {
    return {
      show: false,
      makeUpdate: false,
      currentBike: {}
    }
  },
  componentWillMount() {
    this.setCalls(Calls);
  },

  // setForm(state, setStateCallback) {
  //   this.setState({ show: !state }, setStateCallback);
  // },

  updateForm(state, setStateCallback) {
    this.setState({ makeUpdate: !state }, setStateCallback);
  },

  handleBike(state, setStateCallback) {
    this.setState({
      makeUpdate: true,
      currentBike: state
    }, setStateCallback);
  },

  mixins: [UU5.Common.BaseMixin, UU5.Common.LsiMixin, UU5.Common.RouteMixin, UU5.Common.LoadMixin],
  statics: {
    tagName: Config.TAG + "Bikes",
    classNames: {
      main: Config.CSS + "bikes",
      logos: Config.CSS + "bikes-logos",
      termsOfUse: Config.CSS + "bikes-terms"
    },
    lsi: Lsi.bikes,
    calls: {
      onLoad: "bikeList"
    }
  },

  propTypes: {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.shape({
        en: PropTypes.string
      })
    })),
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func
  },
  render() {

    return (
      <UU5.Bricks.Div>
        <UU5.Bricks.Div
          style={{
            display: "block",
            position: "relative",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            background: "#f5f5f5"
          }}
        >
          <UU5.Common.ListDataManager
            style={{ width: "100%", margin: "auto" }}
            onLoad={Calls.bikeList}
            onCreate={Calls.postBike}
            onDelete={Calls.deleteBike}
            onUpdate={Calls.updateBike}
            onReload={Calls.bikeList}
          >
            {({ errorState, data, handleCreate, handleDelete, handleUpdate, handleLoad, handleReload }) => {
              if (errorState) {
                // error
                return "Error";
              } else if (data) {
                // ready
                return (
                  <UU5.Bricks.Resize>
                    <UU5.Tiles.List
                      tile={<ExampleTile
                        delete={handleDelete}
                        update={handleUpdate}
                        handleBike={this.handleBike}
                        handleReload={handleReload}
                      />}
                      data={data}
                      tileHeight={300}
                      tileMinWidth={220}
                      tileMaxWidth={400}
                      tileSpacing={8}
                      tileElevationHover={1}
                      tileBorder
                      tileStyle={{ borderRadius: 4 }}
                      rowSpacing={8}
                      tileJustify="space-between"
                      scrollElement={window}
                    />
                    {/*{this.state.makeUpdate ? null : <UU5.Bricks.Button*/}
                    {/*  disabled={!data}*/}
                    {/*  colorSchema="success"*/}
                    {/*  onClick={() => this.setForm(this.state.show)}*/}
                    {/*>{this.state.show ? "Close Modal" : "Open Modal"}*/}
                    {/*</UU5.Bricks.Button>}*/}

                    {this.state.makeUpdate ?
                      <UU5.Bricks.Section
                        style={{ display: "flex", justifyContent: "center" }}>
                        <CustomForm
                          makeUpdate = {this.state.makeUpdate}
                          updateForm = {this.updateForm}
                          update={handleUpdate}
                          reload={handleReload}
                          currentBike={this.state.currentBike}
                          // handleBike ={this.handleBike}
                        />
                      </UU5.Bricks.Section> : null}
                  {/**/}
                  </UU5.Bricks.Resize>
                );
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
