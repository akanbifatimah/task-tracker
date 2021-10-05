import PropTypes from "prop-types";
const Button = ({ color, text, clickHandler }) => {
	return (
		<button
			onClick={clickHandler}
			style={{ backgroundColor: color }}
			className="btn"
		>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: "steelblue",
};
Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onCLick: PropTypes.func,
};

export default Button;
