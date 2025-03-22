<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
// getting the current year
$curr_year = date( 'Y' );
// if the fallback year attribute exists and it's the same as the current yers
if(isset($attributes['fallbackCurrentYear']) && $attributes['fallbackCurrentYear'] == $curr_year){
	// set block content to the existing content of the block
	$block_content = $content;
} else {
	// if the starting year attribute is not empty and were showing the starting year
	if(!empty($attributes['startingYear']) && !empty($attributes['showStartingYear'])){
		// display the starting year through the current year
		$display_date = $attributes['startingYear'] . ' -- ' . $curr_year;
	// else
	} else {
		// display the current year
		$display_date = $curr_year;
	}
	// setting the block content to the copyright symbol and the display date
	$block_content = '<p '. get_block_wrapper_attributes() . '> &copy; &nbsp;'. $display_date . '</p>';
}

echo wp_kses_post( $block_content );