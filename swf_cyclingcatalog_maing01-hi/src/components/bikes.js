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
  componentWillMount() {
    this.setCalls(Calls);
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
          >
            {({ errorState, data, handleCreate, handleDelete }) => {
              if (errorState) {
                // error
                return "Error";
              } else if (data) {
                // ready
                return (
                  <UU5.Bricks.Div
                    style={{
                      display: "flex"
                    }}
                  >
                    <UU5.Tiles.List
                      tile={<ExampleTile delete={handleDelete} />}
                      data={data}
                      tileHeight={200}
                      tileMinWidth={200}
                      tileMaxWidth={4000}
                      tileSpacing={2}
                      tileElevationHover={1}
                      tileBorder
                      tileStyle={{ borderRadius: 4 }}
                      rowSpacing={8}
                      tileJustify="space-around"
                      scrollElement={window}
                    />
                    <UU5.Bricks.Section style={{ display: "flex", margin: "auto" }}>
                      <CustomForm addBike={handleCreate} />
                    </UU5.Bricks.Section>
                  </UU5.Bricks.Div>
                );
              } else {
                // loading
                return <UU5.Bricks.Loading />;
              }
            }}
          </UU5.Common.ListDataManager>
        </UU5.Bricks.Div>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});
