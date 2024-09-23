import { connect } from "react-redux";
import { selectedOptionsSelector } from "../options/options.selectors";
import Options from "./Options.jsx";
import { toggleOption } from "./options.actions.js";

const mapState = (state) => {
  return {
    options: selectedOptionsSelector(state)
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);