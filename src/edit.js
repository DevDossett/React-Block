/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

/* == Import wordpress files == */
// well more.. anyway
import { InspectorControls } from "@wordpress/block-editor";
/* == Block Ui == */
import { PanelBody, ToggleControl, TextControl } from "@wordpress/components";
/* == React == */
import { useEffect } from "react";

export default function Edit({ attributes, setAttributes }) {
	const { fallbackCurrYear, showStartingYear, startingYear } = attributes;
	const currYear = new Date().getFullYear().toString();
	// set the display date to the current year
	let displayDate = currYear;
	// if we're showing the currrent year
	if (showStartingYear && startingYear)
		// set display date to starting year - current year
		displayDate = startingYear + " - " + currYear;
	// if the fallback year is not set, set it to the current yeat
	useEffect(() => {
		if (currYear != fallbackCurrYear) {
			setAttributes({ fallbackCurrYear: currYear });
		}
	}, [currYear, fallbackCurrYear, setAttributes]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Setting")}>
					<ToggleControl
						label={__("Show Starting Year")}
						checked={!!showStartingYear}
						onChange={(val) => {
							setAttributes({ showStartingYear: val });
						}}
					/>

					{showStartingYear && (
						<TextControl
							label={__("Starting Year")}
							value={startingYear || ""}
							onChange={(value) => {
								setAttributes({ startingYear: value });
							}}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<p {...useBlockProps()}>
				&copy;&nbsp;
				{displayDate}
			</p>
		</>
	);
}
