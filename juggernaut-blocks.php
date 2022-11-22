<?php
/**
 * Plugin Name:       Juggernaut Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Juggernaut Marketing & Consulting
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       juggernaut-blocks
 *
 * @package           create-block
 */


add_filter('block_categories_all', function($categories) {

	$categories[] = array(
		'slug'  => 'juggernaut',
		'title' => 'Juggernaut'
	);

	return $categories;

});


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

add_action('init', function() {

	$blocks = __DIR__ . '/build/blocks';

	if(is_dir($blocks)) {

		$files = opendir($blocks);

		while(($subfolder = readdir($files)) !== false) {

			if($subfolder !== '.' && $subfolder !== '..') {

				$path = $blocks . '/' . $subfolder;

				if(is_dir($path)) {

					register_block_type($path);

				}

			}

		}

	}

});
