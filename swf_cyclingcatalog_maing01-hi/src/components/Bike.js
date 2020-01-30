import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5tilesg01";
import React from "react";
import createReactClass from "create-react-class";
import "uu5g04-bricks";
import "uu5g04-forms";


const Bike = createReactClass({
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin],

  getDefaultProps() {
    return {
      data: {},
      onUpdate: undefined,
      onDelete: undefined
    };
  },

  render() {
    const actions = [];

    if (typeof this.props.onUpdate === "function") {
      actions.push([
        {
          content: "Update",
          icon: "mdi-update",
          active: true,
          colorSchema: "primary",
          onClick: () => this.props.onUpdate(this.props.data)
        }
      ]);
    }

    if (typeof this.props.onDelete === "function") {
      actions.push([
        {
          content: "Delete",
          icon: "mdi-delete",
          active: true,
          colorSchema: "danger",
          onClick: () => this.props.onDelete(this.props.data)
        }
      ]);
    }

    return (
      <UU5.BlockLayout.Tile {...this.getMainPropsToPass()}>
        <UU5.BlockLayout.Block actions={actions}>
          <UU5.BlockLayout.Row weight="primary" ellipses>
            {this.props.data.name}
          </UU5.BlockLayout.Row>
        </UU5.BlockLayout.Block>
      </UU5.BlockLayout.Tile>
    );
  }
});

export default Bike;
