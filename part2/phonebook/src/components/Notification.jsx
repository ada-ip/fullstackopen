const Notification = ({ message, type }) => {
	if (!message) return null;
	const style = {
		color: type === "error" ? "red" : "green",
		borderColor: type === "error" ? "red" : "green"
	};
	return (
		<div className="notification" style={style}>
			{message}
		</div>
	);
};

export default Notification;
