// React
import { ReactElement, ChangeEvent } from "react";

// Material UI
import { Card, CardActions } from "@mui/material";
import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from "@mui/material";

// Custom Styling
import "./Filter.css";

interface Props {
	radio: string;
	updateRadio: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FilterLarge = (props: Props): ReactElement => {
	const { radio, updateRadio } = props;

	return (
		<Card id="filter-section-large">
			<CardActions>
				<FormControl component="fieldset">
					<FormLabel component="legend">Measures</FormLabel>
					<RadioGroup
						aria-label="measures"
						name="measures1"
						value={radio}
						onChange={updateRadio}
					>
						<FormControlLabel
							value="GDP (Thousands of dollars)"
							control={<Radio color="primary" />}
							label="GDP"
						/>
						<FormControlLabel
							value="Labor Force"
							control={<Radio color="primary" />}
							label="Labor Force"
						/>
						<FormControlLabel
							value="Unemployment Rate"
							control={<Radio color="primary" />}
							label="Unemployment"
						/>
						<FormControlLabel
							value="Median Income Essential Workers"
							control={<Radio color="primary" />}
							label="Median Income"
						/>
						<FormControlLabel
							value="Frontline Industry Rate"
							control={<Radio color="primary" />}
							label="Frontline Rate"
						/>
					</RadioGroup>
				</FormControl>
			</CardActions>
		</Card>
	);
};

export const FilterSmall = (props: Props) => {
	const { radio, updateRadio } = props;

	return (
		<section id="filter-section-small">
			<FormControl component="fieldset">
				<FormLabel component="legend">Measures</FormLabel>
				<RadioGroup
					aria-label="measures"
					name="measures1"
					value={radio}
					onChange={updateRadio}
					row
				>
					<FormControlLabel
						value="GDP (Thousands of dollars)"
						control={<Radio color="primary" />}
						label="GDP"
					/>
					<FormControlLabel
						value="Labor Force"
						control={<Radio color="primary" />}
						label="Labor Force"
					/>
					<FormControlLabel
						value="Unemployment Rate"
						control={<Radio color="primary" />}
						label="Unemployment"
					/>
					<FormControlLabel
						value="Median Income Essential Workers"
						control={<Radio color="primary" />}
						label="Median Income"
					/>
					<FormControlLabel
						value="Frontline Industry Rate"
						control={<Radio color="primary" />}
						label="Frontline Rate"
					/>
				</RadioGroup>
			</FormControl>
		</section>
	);
};
