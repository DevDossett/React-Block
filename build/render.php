<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
// getting the current year
$curr_year = date( 'Y' );
// setting the display date to the current year
$display_date = $curr_year;
// if starting year and show starting year are set
if(!empty($attributes['startingYear']) && !empty($attributes['showStartingYear']))
	// set the display date to starting year - cur year
	$display_date = $attributes['startingYear'] . ' - ' . $curr_year;
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php echo "&copy; &nbsp;" . $display_date; ?>
</p>
