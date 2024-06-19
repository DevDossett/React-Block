/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	// define show starting year and starting year
	const {fallbackCurrYear, showStartingYear, startingYear} = attributes;
	// if fallback year is not set
	if(!fallbackCurrYear) return null;
	// set the display date
	let displayDate = fallbackCurrYear;
	// if we're showing the year add it it to the display date
	if(showStartingYear && startingYear){
		displayDate = startingYear + ' - ' + fallbackCurrYear;
	}

	return (
		<p { ...useBlockProps.save() }>
			&copy; &nbsp;
			{ displayDate }
		</p>
	);
}
