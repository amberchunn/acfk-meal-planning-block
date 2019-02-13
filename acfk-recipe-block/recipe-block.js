/**
 * Register our Block Attributes
 */

wp.blocks.registerBlockType( 'acfk/recipe-block', {
    
    title: 'Recipe',
    icon: 'list-view',
    description: 'Recipe Card',
    category: 'common',
    attributes: {
        prepTime: {
            type: 'integer',
            source: 'meta',
            meta: 'acfk_prep_time'
        },
        cookingTime: {
            type: 'integer',
            source: 'meta',
            meta: 'acfk_cooking_time'
        },
        ingredients: {
            type: 'string',
            source: 'meta',
            meta: 'acfk_ingredients'
        },
        servings: {
            type: 'integer',
            source: 'meta',
            meta: 'acfk_servings'
        },
    },

    edit: function (props) {
        function updateMeta( prepTime, cookingTime, servings, ingredients ) {
            setAttributes({ prepTime, cookingTime, servings, ingredients });
        }
        
        return wp.element.createElement(
            wp.element.Fragment, 
            null,
            wp.element.createElement(
                wp.components.TextControl, {
                    label: 'Prep Time (min)',
                    className: props.className,
                    value: props.attributes.prepTime,
                    onChange: updateMeta
                    },
            ),
            wp.element.createElement(
                wp.components.TextControl, {
                    label: 'Cooking Time (min)',
                    className: props.className,
                    value: props.attributes.cookingTime,
                    onChange: updateMeta
                    },
            ),
            wp.element.createElement(
                wp.components.TextControl, {
                    label: 'Servings',
                    className: props.className,
                    value: props.attributes.servings,
                    onChange: updateMeta
                    },
            ),
            wp.element.createElement(
                wp.components.TextControl, {
                    label: 'Ingredients',
                    className: props.className,
                    value: props.attributes.ingredients,
                    onChange: updateMeta
                    },
            ),
         );
    }, // end edit

    save() {
            // Rendering in PHP
            return null;
    },
} );