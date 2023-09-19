import PropTypes from "prop-types";

const Loader = ({number}) => {
  return (
    <div
      style={{ zIndex: 9999, width: `${number}%` }}
      className="fixed z-50 top-0 left-0    h-1 bg-blue-500"
    ></div>
  );
};
Loader.propTypes = {
    number: PropTypes.number
  };
export default Loader;
