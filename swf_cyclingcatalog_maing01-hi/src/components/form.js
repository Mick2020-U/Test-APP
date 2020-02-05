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
  // componentWillReceiveProps(prevProps, nextProps) {
  //   console.log(prevProps, 'prevProps');
  //   console.log(nextProps, 'nextProps');
  // },
  render() {
    let update = this.props.makeUpdate;
    // let update = true;
    // getFormChildren is method from FormMixin
    return this.getFormChildren(() => {
      return (

        // parent will be repaired in 1.8.1
        <UU5.Bricks.Div parent={this}>
          <UU5.Forms.Text name="name" label={<UU5.Bricks.Lsi lsi={Lsi.buttons.name} /> } placeholder="Bike Name"
                          value={update ? this.props.currentBike.name : null} required/>
          <UU5.Forms.Text name="role" label={<UU5.Bricks.Lsi lsi={Lsi.buttons.description} /> } placeholder="Bike Description"
                          value={update ? this.props.currentBike.role.en : null} required/>
          <UU5.Forms.Text name="src" label={<UU5.Bricks.Lsi lsi={Lsi.buttons.image} /> } placeholder="Bike Image"
                          value={update ? this.props.currentBike.src : null}/>

          <UU5.Bricks.Div className="center" style="marginTop:24px">
            {update ?
              <UU5.Bricks.Button
                content={<UU5.Bricks.Lsi lsi={Lsi.buttons.update} /> }
                onClick={() => {
                  // methods from FormMixin
                  const isValid = this.isValid();
                  const alertBus = this.getAlertBus();
                  const res = this.getValues();

                  isValid && this.props.handle({
                    name: res.name,
                    id: this.props.currentBike.id,
                    src: res.src
                      ? res.src
                      : "https://ardis-bike.com.ua/content/images/26/ardis-elite-2-bike-mtv-28-87172324086228.jpg",
                    role: {
                      en: res.role
                    }
                  }).then(this.props.reload()).then(
                    () => console.log("reload success"),
                    () => console.log("reload fail")
                  ).then(
                    this.props.updateForm("makeUpdate", this.props.makeUpdate),
                    this.forceUpdate()
                  ).catch((err) => {
                    return err;
                  });
                  this.reset();
                  alertBus.setAlert({
                    content: isValid ? null : "Form is not valid.",
                    colorSchema: isValid ? "success" : "danger"
                  });
                }}
              />
              : <UU5.Bricks.Button
                content={<UU5.Bricks.Lsi lsi={Lsi.buttons.addItem} /> }
                onClick={() => {
                  const isValid = this.isValid();
                  const alertBus = this.getAlertBus();
                  const res = this.getValues();
                  isValid && this.props.handle({
                    name: res.name,
                    id: (+new Date()).toString(16),
                    uuIdentity: "4-4-1",
                    src: res.src
                      ? res.src
                      : "https://ardis-bike.com.ua/content/images/26/ardis-elite-2-bike-mtv-28-87172324086228.jpg",
                    role: {
                      en: res.role
                    }
                  }).then(
                    this.props.setForm("show", this.props.show)
                  ).catch((err) => {
                    return err;
                  });
                  this.reset();
                  alertBus.setAlert({
                    content: isValid ? null : "Form is not valid.",
                    colorSchema: isValid ? "success" : "danger"
                  });
                }}
              />
            }
            <UU5.Bricks.Button
              content={<UU5.Bricks.Lsi lsi={Lsi.buttons.closeModal} /> }
              onClick={() => {
                this.props.show ?
                  this.props.setForm("show", this.props.show)
                  : this.props.updateForm("makeUpdate", this.props.makeUpdate);
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
