import { PersonPin } from "@mui/icons-material";
import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { dateConverter } from "../../utils/helper";

const MarkerComponent = ({ type, time }) => (
	<Tooltip
		sx={{ zIndex: 1111111111111111111111111111111111111111111111111 }}
		title={
			<>
				{type != "normal" && <Typography variant='h6'>{type}</Typography>}
				<Typography variant='h6'>
					{dateConverter({ value: parseInt(time), type: "DDMMYYYYHHII" })}
				</Typography>
			</>
		}>
		<Box
			sx={{
				height: "10px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "10px",
				fontSize: "10px",
				transform: "translate(-50%,-50%)",
			}}>
			<PersonPin
				color={type == "BreakIn" || type == "BreakOut" ? "primary" : "dark"}
			/>
		</Box>
	</Tooltip>
);
export default MarkerComponent;
