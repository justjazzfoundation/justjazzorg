<?php
/**
 * WP_Style_Engine_CSS_Rules_Store_Gutenberg
 *
 * A store for WP_Style_Engine_CSS_Rule_Gutenberg objects.
 *
 * @package Gutenberg
 */

if ( class_exists( 'WP_Style_Engine_CSS_Rules_Store_Gutenberg' ) ) {
	return;
}

/**
 * Holds, sanitizes, processes and prints CSS declarations for the style engine.
 *
 * @access private
 */
class WP_Style_Engine_CSS_Rules_Store_Gutenberg {

	/**
	 * An array of named WP_Style_Engine_CSS_Rules_Store_Gutenberg objects.
	 *
	 * @static
	 *
	 * @var WP_Style_Engine_CSS_Rules_Store_Gutenberg[]
	 */
	protected static $stores = array();

	/**
	 * The store name.
	 *
	 * @var string
	 */
	protected $name = '';

	/**
	 * An array of CSS Rules objects assigned to the store.
	 *
	 * @var WP_Style_Engine_CSS_Rule_Gutenberg[]
	 */
	protected $rules = array();

	/**
	 * Get an instance of the store.
	 *
	 * @param string $store_name The name of the store.
	 *
	 * @return WP_Style_Engine_CSS_Rules_Store_Gutenberg|void
	 */
	public static function get_store( $store_name = 'default' ) {
		if ( ! is_string( $store_name ) || empty( $store_name ) ) {
			return;
		}
		if ( ! isset( static::$stores[ $store_name ] ) ) {
			static::$stores[ $store_name ] = new static();
			// Set the store name.
			static::$stores[ $store_name ]->set_name( $store_name );
		}
		return static::$stores[ $store_name ];
	}

	/**
	 * Get an array of all available stores.
	 *
	 * @return WP_Style_Engine_CSS_Rules_Store_Gutenberg[]
	 */
	public static function get_stores() {
		return static::$stores;
	}

	/**
	 * Clears all stores from static::$stores.
	 *
	 * @return void
	 */
	public static function remove_all_stores() {
		static::$stores = array();
	}

	/**
	 * Set the store name.
	 *
	 * @param string $name The store name.
	 *
	 * @return void
	 */
	public function set_name( $name ) {
		$this->name = $name;
	}

	/**
	 * Get the store name.
	 *
	 * @return string
	 */
	public function get_name() {
		return $this->name;
	}

	/**
	 * Get an array of all rules.
	 *
	 * @return WP_Style_Engine_CSS_Rule_Gutenberg[]
	 */
	public function get_all_rules() {
		return $this->rules;
	}

	/**
	 * Get a WP_Style_Engine_CSS_Rule_Gutenberg object by its selector.
	 * If the rule does not exist, it will be created.
	 *
	 * @param string $selector The CSS selector.
	 *
	 * @return WP_Style_Engine_CSS_Rule_Gutenberg|void Returns a WP_Style_Engine_CSS_Rule_Gutenberg object, or null if the selector is empty.
	 */
	public function add_rule( $selector ) {
		$selector = trim( $selector );

		// Bail early if there is no selector.
		if ( empty( $selector ) ) {
			return;
		}

		// Create the rule if it doesn't exist.
		if ( empty( $this->rules[ $selector ] ) ) {
			$this->rules[ $selector ] = new WP_Style_Engine_CSS_Rule_Gutenberg( $selector );
		}

		return $this->rules[ $selector ];
	}

	/**
	 * Remove a selector from the store.
	 *
	 * @param string $selector The CSS selector.
	 *
	 * @return void
	 */
	public function remove_rule( $selector ) {
		unset( $this->rules[ $selector ] );
	}
}
