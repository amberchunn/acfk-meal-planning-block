<?php

add_action('init', 'acfk_register_block_assets');

function acfk_register_block_assets() {

	$block_path = '/recipe-block.js';
	wp_register_script(
		'acfk-recipe-block',
		plugins_url( $block_path , __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( plugin_dir_path( $block_path , __FILE__ ) )
	);

	$style_path = '/recipe-block.css';
	wp_register_style(
		'acfk-recipe-block-styles',
		plugins_url( $style_path , __FILE__ ),
		[],
		filemtime( plugin_dir_path( $style_path , __FILE__ ) )
    );
    
    register_block_type( 'acfk/recipe-block', array(
		'editor_script' => 'acfk-recipe-block',
		'style' => 'acfk-recipe-block-styles',
	) );
    
}
