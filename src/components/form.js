import React from "react";

class Form extends React.Component {
  render () {
    return  (

        <form onSubmit={this.props.weatherWethod}>
          <input type = "text" name = "city" placeholder = "Введите название города "/>
          <button>Узнать погоду</button>
        </form>

    );
  }
}

export default Form;
