import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import Lsi from "../config/lsi";

const CustomForm = createReactClass({
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Forms.FormMixin],
  statics: {
    tagName: "UU5.Example.CustomForm",
    classNames: {
      main: "uu5-example-customform"
    },
    lsi: Lsi.bikes
  },

  render() {
    let update = this.props.makeUpdate;
    //  let update = true;
    // getFormChildren is method from FormMixin
    return this.getFormChildren(() => {
      return (
        // parent will be repaired in 1.8.1
        <UU5.Bricks.Div parent={this}>
          <UU5.Forms.Text name="name" label="Bike Name" placeholder="Bike Name"
                          value={update ? this.props.currentBike.name : null} required/>
          <UU5.Forms.Text name="role" label="Bike Description" placeholder="Bike Description"
                          value={update ? this.props.currentBike.role.en : null} required/>
          <UU5.Forms.Text name="src" label="Bike Image" placeholder="Bike Image"
                          value={update ? this.props.currentBike.src : null}/>

          <UU5.Bricks.Div className="center" style="marginTop:24px">
            {update ?
              <UU5.Bricks.Button
                content="Update Bike"
                onClick={() => {
                  // methods from FormMixin
                  const isValid = this.isValid();
                  const alertBus = this.getAlertBus();
                  const res = this.getValues();
                  console.dir(res, 'res');
                  this.props.addBike({
                    id: this.props.currentBike.id,
                    name: res.name,
                    src: res.src
                      ? res.src
                      : "https://www.genesisglobalschool.edu.in/wp-content/uploads/2016/09/noimage.jpg",
                    role: {
                      en: res.role
                    }
                  });
                  isValid && this.props.update({
                    awid: this.props.currentBike.awid,
                    name: res.name,
                    id: this.props.currentBike.id,
                    src: res.src
                      ? res.src
                      : "https://www.genesisglobalschool.edu.in/wp-content/uploads/2016/09/noimage.jpg",
                    role: {
                      en: res.role
                    }
                  }).then((data)=> {
                    this.props.handleBike(data);
                  });

                  this.reset();
                  alertBus.setAlert({
                    content: isValid ? null : "Form is not valid.",
                    colorSchema: isValid ? "success" : "danger"
                  });
                }}
              />
              : <UU5.Bricks.Button
                content="Add Bike"
                onClick={() => {
                  // methods from FormMixin
                  const isValid = this.isValid();
                  const alertBus = this.getAlertBus();
                  const res = this.getValues();
                  isValid && !update && this.props.addBike({
                    name: res.name,
                    id: (+new Date()).toString(16),
                    uuIdentity: "4-4-1",
                    src: res.src
                      ? res.src
                      : "https://www.genesisglobalschool.edu.in/wp-content/uploads/2016/09/noimage.jpg",
                    role: {
                      en: res.role
                    }
                  });
                  this.reset();
                  alertBus.setAlert({
                    content: isValid ? null : "Form is not valid.",
                    colorSchema: isValid ? "success" : "danger"
                  });
                  this.props.setForm(this.props.show)
                }}
              />}


            <UU5.Bricks.Button
              content="Close Button"
              onClick={() => {
                this.props.setForm ?
                this.props.setForm(this.props.show):
                this.props.updateForm(this.props.makeUpdate);
                // this.props.makeUpdate();
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
