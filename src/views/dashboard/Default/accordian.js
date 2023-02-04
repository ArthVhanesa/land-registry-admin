import * as React from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	Box,
	Grid,
	Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AlignHorizontalCenter } from "@mui/icons-material";
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";

export default function ControlledAccordions() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<>
			<MainCard title='Land details'>
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}>
					<AccordionSummary
						sx={{ "&:hover": { bgcolor: "#EDE7F6" }, borderRadius: "12px" }}
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'>
						<Box sx={{ width: "60%", flexShrink: 0 }}>
							<Typography sx={{ fontSize: "18px", color: "black" }}>
								Ld college of engineering
							</Typography>
							<Typography sx={{ color: "text.secondary" }}>
								LDCE, navrangpura, ahmedabad
							</Typography>
						</Box>
						{/* <Box sx={{
              width: '20%', flexShrink: 0, alignItems: "center",
              justifyContent: "center", display: "flex"
            }}>
              <Typography>For sell/Not for sell</Typography>
            </Box> */}
						<Box
							sx={{
								width: "20%",
								flexShrink: 0,
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
							}}>
							<Typography>10,000 sq. ft.</Typography>
						</Box>
						<Box
							sx={{
								width: "20%",
								flexShrink: 0,
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
							}}>
							<Typography>$20,000/-</Typography>
						</Box>
					</AccordionSummary>
					<AccordionDetails sx={{ borderRadius: "20px" }}>
						<Grid container spacing={gridSpacing}>
							<Grid item xs={6}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-evenly",
										alignItems: "left",
										width: "100%",
										height: "250px",
										borderRadius: "20px",
										bgcolor: "white",
										padding: "20px",
									}}>
									<Typography>Total area: 1000 sq. ft.</Typography>
									<Typography>Total price: $20,000/-</Typography>
									<Typography>Taluka: Sabarmati</Typography>
									<Typography>District: Ahmedabad</Typography>
									<Typography>State: Gujarat</Typography>
									<Button variant='' sx={{ width: "120px", border: 1 }}>
										View land
									</Button>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box
									sx={{
										width: "100%",
										height: "100%",
										borderRadius: "20px",
										bgcolor: "white",
										border: 1,
									}}></Box>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel4"}
					onChange={handleChange("panel4")}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel4bh-content'
						id='panel4bh-header'>
						<Typography sx={{ width: "33%", flexShrink: 0 }}>
							Personal data
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
							sit amet egestas eros, vitae egestas augue. Duis vel est augue.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</MainCard>
		</>
	);
}
