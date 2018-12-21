import React, { Component } from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import Button from "../components/common/Button";

import { connect } from "react-redux";
//Actions
import {
  increaseAction,
  decreaseAction,
  multiAction,
  resetAction,
  textAction,
  inputAction
} from "../action";

class CounterContainer extends Component {
  constructor() {
    super();
    this.state = {
      num1: null,
      mun2: null,
      text: " "
    };
  }
  render() {
    const { num1, num2, text } = this.state;
    console.log("text : ",text)
    // console.log("num1", this.state.num1);
    //console.log("num2", this.state.num2);
    //console.log("text", this.state.text);
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          {/* increaseAction */}

          <Button
            onPress={() => {
              this.props.increaseAction(1);
            }}
          >
            Increase(1)
          </Button>

          {/* decreseAction */}
          <Button
            onPress={() => {
              this.props.decreaseAction(1);
            }}
          >
            Decrease(1)
          </Button>

          {/* multiAction */}

          <Button
            onPress={() => {
              this.props.multiAction(2);
            }}
          >
            Multiplication(2)
          </Button>

          {/* resetAction */}
          <Button
            onPress={() => {
              this.props.resetAction(0);
            }}
          >
            Reset
          </Button>

          {/* textAction */}

           <TextInput
            style={{ height: 40 }}
            placeholder="Enter Text "
            onChangeText={text => this.setState({ text })}
          />

          <Button
            onPress={() => {
              this.props.textAction(text);
            }}
          >
            Enter
          </Button> 

        

          <Text
            style={{
              margin: 10,
              fontWeight: "bold",
              color: "darkblue",
              fontSize: 17
            }}
          >
            Result : {this.props.times}
          </Text>

            {/* inputAction */}

           <TextInput
            style={{ height: 40 }}
            placeholder="Enter first number  "
            onChangeText={num1 => this.setState({ num1 })}
          />
            <TextInput
            style={{ height: 40 }}
            placeholder="Enter second number  "
            onChangeText={num2 => this.setState({ num2 })}
          />

          <Button
            onPress={() => {
              this.props.inputAction(num1,num2);
            }}
          >
            MultiToInputs
          </Button> 

        

          <Text
            style={{
              margin: 10,
              fontWeight: "bold",
              color: "darkblue",
              fontSize: 17
            }}
          >
            Result : {this.props.times}
          </Text>


        </View>
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    margin: 20,
    fontWeight: "bold",
    color: "forestgreen",
    fontSize: 20
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column"
  }
};

const mapStateToProps = state => {
  console.log("map", state.value);
  return {
    times: state.value
  };
};

export default connect(
  mapStateToProps,
  {
    increaseAction,
    decreaseAction,
    multiAction,
    resetAction,
    textAction,
    inputAction
  }
)(CounterContainer);
