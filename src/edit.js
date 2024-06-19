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

export default function Edit({ attributes, setAttributes }) {
	const { showStartingYear, startingYear } = attributes;
	const currYear = new Date().getFullYear().toString();
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Setting")}>
					<ToggleControl
						label={__("Show Starting Year")}
						checked = {!! showStartingYear}
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
				{currYear}
			</p>
		</>
	);
}
