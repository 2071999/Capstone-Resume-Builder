import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

const CheckSelectedId = (props) => {
  const selectedId = props.selectedTemplateId;
  return selectedId ? props.children : <Navigate to={"/"} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckSelectedId);

// selectedId is a variable that holds the value of props.selectedTemplateId.

// The line uses a ternary conditional (ternary operator ? :) to decide what to render based on the truthiness or falsiness of selectedId.

// If selectedId is truthy (meaning it has a value, which in this case implies that there is a selectedTemplateId in the Redux store), then props.children is rendered.

// If selectedId is falsy (meaning it doesn't have a value, which implies there is no selectedTemplateId in the Redux store), <Navigate to={"/"} /> is rendered.
