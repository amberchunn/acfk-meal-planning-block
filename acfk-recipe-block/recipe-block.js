/**
 * Register our Block Attributes
 */

wp.blocks.registerBlockType( 'acfk/recipe-block', {
    
    title: 'Recipe',
    icon: 'list-view',
    description: 'Recipe Card',
    category: 'widgets',
    attributes: {
        prepTime: {
            type: 'integer',
            source: 'meta',
            meta: 'prepTime'
        },
        cookingTime: {
            type: 'integer',
            source: 'meta',
            meta: 'cookingTime'
        },
        ingredients: {
            type: 'string',
            source: 'meta',
            meta: 'ingredients'
        },
        servings: {
            type: 'integer',
            source: 'meta',
            meta: 'servings'
        },
    },

    edit: function (props) {
        return wp.element.createElement(
            wp.element.Fragment, 
            null,
         );
    }, // end edit

    save() {
            // Rendering in PHP
            return null;
    },
} );