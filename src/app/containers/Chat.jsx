import React from "react";
import { connect } from "react-redux";

import { Chatinput } from "../components/chatInput";
import { Chattext } from "../components/chatText";

// Actions
import { addMessage } from "../actions/conversationActions";


export class Chat extends React.Component {

  render() {
    return (
    <div>
      <div>
      

      {this.props.messages.map((_,index) =>
        <Chattext key={index} message={this.props.messages[index]}/>
      )}

      </div>
      
      <Chatinput addMessage={this.props.addMessage}/>
     </div> 
    );
  }
} 

const mapStateToProps = (state) => {
  return {
      messages: state.conversationReducer.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addMessage: (user,text) => {
          dispatch(addMessage(user,text));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
