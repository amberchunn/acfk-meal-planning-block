/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { 
	TextControl,
	TextareaControl,
} = wp.components;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { } = wp.editor;

/**
 * Register our Block Attributes
 */

export default registerBlockType( 'acfk/recipe-block', {
    
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

    edit: props => {
            const { attributes: { prepTime, cookingTime, ingredients, servings }, className, setAttributes } = props;
        return (
            <Fragment>
                <div className={ className }>
                    <TextControl 
                        label={ 'Prep Time' }
                        value={ prepTime }
                        onChange={ prepTime => setAttributes( { prepTime } ) }
                    />
                    <TextControl 
                        label={ 'Cooking Time' }
                        value={ cookingTime }
                        onChange={ cookingTime => setAttributes( { cookingTime } ) }
                    />
                    <TextControl 
                        label={ 'Servings' }
                        value={ servings }
                        onChange={ servings => setAttributes( { servings } ) }
                    />
                    <TextareaControl
                        label={ 'Ingredients' }
                        value={ ingredients }
                        onChange={ ingredients => setAttributes( { ingredients } ) }
                    />
                </div>
            </Fragment>
        );
    }, // end edit

    save() {
            // Rendering in PHP
            return null;
    },
} );