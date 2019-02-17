/**
 * Register our Block Attributes
 */

wp.blocks.registerBlockType("acfk/recipe-block", {
  title: "Recipe",
  icon: "list-view",
  description: "Recipe Card",
  category: "common",
  attributes: {
    prepTime: {
      type: "string",
      source: "meta",
      meta: "acfk_prep_time"
    },
    cookingTime: {
      type: "string",
      source: "meta",
      meta: "acfk_cooking_time"
    },
    ingredients: {
      type: "string",
      source: "meta",
      meta: "acfk_ingredients"
    },
    servings: {
      type: "string",
      source: "meta",
      meta: "acfk_servings"
    }
  },
  supports: {
    inserter: false,
    multiple: false,
    reusable: false
  },

  edit: function(props) {
    return wp.element.createElement(
      wp.element.Fragment,
      null,
      wp.element.createElement(wp.components.TextControl, {
        label: "Prep Time (min)",
        className: props.className,
        value: props.attributes.prepTime,
        onChange: function(newPrepTime) {
          props.setAttributes({ prepTime: newPrepTime });
        }
      }),
      wp.element.createElement(wp.components.TextControl, {
        label: "Cooking Time (min)",
        className: props.className,
        value: props.attributes.cookingTime,
        onChange: function(newCookingTime) {
          props.setAttributes({ cookingTime: newCookingTime });
        }
      }),
      wp.element.createElement(wp.components.TextControl, {
        label: "Servings",
        className: props.className,
        value: props.attributes.servings,
        onChange: function(newServings) {
          props.setAttributes({ servings: newServings });
        }
      }),
      wp.element.createElement(wp.components.TextControl, {
        label: "Ingredients",
        className: props.className,
        value: props.attributes.ingredients,
        onChange: function(newIngredients) {
          props.setAttributes({ ingredients: newIngredients });
        }
      })
    );
  }, // end edit

  save() {
    // Rendering in PHP
    return null;
  }
});
