import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5tilesg01";
import Plus4U5 from "uu_plus4u5g01";

export const BikeDetails = UU5.Common.VisualComponent.create({
  mixins: [UU5.Common.BaseMixin, UU5.Common.LsiMixin, UU5.Common.RouteMixin],
  render() {
    return (
      <UU5.Bricks.Div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#f5f5f5"
        }}
      >
        <UU5.Bricks.P>{this.props.data.name}</UU5.Bricks.P>
        <UU5.Bricks.Lsi style={{ position: "absolute" }} lsi={this.props.data.role} />
        <Plus4U5.Bricks.Image
          style={{ display: "block", margin: "auto", width: "50%", background: "#f5f5f5" }}
          src={this.props.data.src}
          alt={this.props.data.src}
        />
      </UU5.Bricks.Div>
    );
  }
});
