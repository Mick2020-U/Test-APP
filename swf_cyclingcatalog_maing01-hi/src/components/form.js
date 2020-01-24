//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import ReactDOM from "react-dom";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";

//@@viewOff:imports

const CustomForm = createReactClass({
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Forms.FormMixin
  ],
  statics: {
    tagName: "UU5.Example.CustomForm",
    classNames: {
      main: "uu5-example-customform"
    }
  },

  render() {
    // console.log(Props, 'props');
    // getFormChildren is method from FormMixin
    return this.getFormChildren(() => {
      return (
        // parent will be repaired in 1.8.1
        <UU5.Bricks.Div parent={this}>
          <UU5.Forms.Text name="name" label="Bike Name" placeholder="Bike Name" required/>
          <UU5.Forms.Text name="role" label="Bike Description" placeholder="Bike Description" required/>
          <UU5.Forms.Text name="src" label="Bike Image" placeholder="Bike Image"/>

          <UU5.Bricks.Div className="center" style="marginTop:24px">
            <UU5.Bricks.Button
              content="Add Bike"
              onClick={() => {
                // methods from FormMixin
                const isValid = this.isValid();
                const alertBus = this.getAlertBus();
                const res = this.getValues();
                this.props.addBike({
                  name: res.name,
                  id: (+new Date).toString(16),
                  uuIdentity: "4-4-1",
                  src: res.src ? res.src : 'https://www.genesisglobalschool.edu.in/wp-content/uploads/2016/09/noimage.jpg',
                  role: {
                    en: res.role,
                  }
                });

                this.reset();
                alertBus.setAlert({
                  content: isValid ? "Form is valid." : "Form is not valid.",
                  colorSchema: isValid ? "success" : "danger"
                })
              }}
            />
            <UU5.Bricks.Button
              content="Clear Alerts"
              onClick={() => {
                // method from FormMixin
                const alertBus = this.getAlertBus();
                alertBus.clearAlerts();
              }}
            />
          </UU5.Bricks.Div>
        </UU5.Bricks.Div>
      );
    });
  }
});

export default CustomForm;
