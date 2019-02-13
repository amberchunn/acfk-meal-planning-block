<?php
//  Exit if accessed directly.
defined('ABSPATH') || exit;

add_action( 'init', 'custom_post_type_recipe', 0 );
function custom_post_type_recipe() {
	$labels = array(
		'name'                => __( 'Recipes', 'acfk'),
		'singular_name'       => __( 'Recipe', 'acfk'),
		'menu_name'           => __( 'Recipes', 'acfk'),
		'parent_item_colon'   => __( 'Parent Recipe', 'acfk'),
		'all_items'           => __( 'ALl Recipes', 'acfk'),
		'view_item'           => __( 'View Recipe', 'acfk'),
		'add_new_item'        => __( 'Add new Recipe', 'acfk'),
		'add_new'             => __( 'Add new', 'acfk'),
		'edit_item'           => __( 'Edit Recipe', 'acfk'),
		'update_item'         => __( 'Update Recipe', 'acfk'),
		'search_items'        => __( 'Search Recipe', 'acfk'),
		'not_found'           => __( 'Not found', 'acfk'),
		'not_found_in_trash'  => __( 'Not found in trash', 'acfk')
	);
    
	$args = array(
		'labels'              => $labels,
		'description'         => __( 'Recipes', 'acfk'),
		'menu_icon'           => 'dashicons-carrot',
		'supports'            => array( 'title', 'editor', 'thumbnail', 'meta'),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 20,
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest'        => true,
		'rest_base' => 'acfk_recipes',
    	'rest_controller_class' => 'WP_REST_Posts_Controller',
    	'template' => array(
            array( 'acfk/recipe-block', array( ) ),
        ),
        'template_lock' => 'insert', // or 'insert' to allow moving
	);
	register_post_type( 'acfk_recipes', $args );

}



$args = array(
    'type' => 'number',
    'single' => true,
    'show_in_rest' => true,
);
register_post_meta( 'acfk_recipes', 'acfk_prep_time', $args );

$args = array(
    'type' => 'number',
    'single' => true,
    'show_in_rest' => true,
);
register_post_meta( 'acfk_recipes', 'acfk_cooking_time', $args );

$args = array(
    'type' => 'string',
    'single' => true,
    'show_in_rest' => true,
);
register_post_meta( 'acfk_recipes', 'acfk_ingredients', $args );

$args = array(
    'type' => 'number',
    'single' => true,
    'show_in_rest' => true,
);
register_post_meta( 'acfk_recipes', 'acfk_servings', $args );

$args = array(
    'type' => 'number',
    'single' => true,
    'show_in_rest' => true,
);
register_post_meta( 'acfk_recipes', 'acfk_prep_time', $args );