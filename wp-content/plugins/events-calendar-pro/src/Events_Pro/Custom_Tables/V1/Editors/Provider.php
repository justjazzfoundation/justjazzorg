<?php
/**
 * Handles the registration of modifications done to the Editors.
 *
 * @since   6.0.0
 *
 * @package TEC\Events\Custom_Tables\V1\Editors
 */

namespace TEC\Events_Pro\Custom_Tables\V1\Editors;

use TEC\Events\Custom_Tables\V1\Updates\Requests;
use TEC\Events_Pro\Custom_Tables\V1\Editors\Classic\UI_Lock;
use TEC\Events_Pro\Custom_Tables\V1\Models\Occurrence;
use Tribe__Events__Main as TEC;
use Tribe__Events__Pro__Editor__Template__Admin;
use Tribe__Events__Pro__Main as Plugin;

/**
 * Class Provider
 *
 * @since   6.0.0
 *
 * @package TEC\Events\Custom_Tables\V1\Editors
 */
class Provider extends \tad_DI52_ServiceProvider {

	/**
	 * Key for the series group of assets.
	 *
	 * @since 6.0.0
	 *
	 * @var string
	 */
	public static $series_group_key = 'tec-custom-tables-v1-editor-series';

	/**
	 * Key for the Classic Editor Event group of assets, including dialog and Series metabox assets.
	 *
	 * @since 6.0.0
	 *
	 * @var string
	 */
	public static $classic_event_full_group_key = 'tec-custom-tables-v1-editor-classic-event-full';

	/**
	 * Key for the Classic Editor Event group of assets, NOT including dialog and Series metabox assets.
	 *
	 * @since 6.0.0
	 *
	 * @var string
	 */
	public static $classic_event_min_group_key = 'tec-custom-tables-v1-editor-classic-event-min';

	/**
	 * Key for the block event group of assets.
	 *
	 * @since 6.0.0
	 *
	 * @var string
	 */
	public static $block_event_group_key = 'tec-custom-tables-v1-editor-block-event';

	/**
	 * Registers the implementations, hooks and filters required to alter the Editors.
	 *
	 * @since 6.0.0
	 */
	public function register() {
		$this->container->singleton( static::class, $this );
		$this->container->singleton( 'tec.custom-tables-v1.editors.provider', $this );
		$this->container->singleton( Context::class, Context::class );

		$this->container->singleton( Event::class, Event::class );

		$this->register_assets();

		$this->container->register( Classic\Provider::class );
		$this->container->register( Manager\Provider::class );
		$this->container->register( Block\Provider::class );

		do_action( 'tec_events_pro_custom_tables_v1_editors_provider_registered' );
	}

	/**
	 * Registers the assets required for the editors.
	 *
	 * @since 6.0.0
	 *
	 * @return void
	 */
	public function register_assets() {
		$plugin = Plugin::instance();
		$context = $this->container->make( Context::class );

		/**
		 * Series assets.
		 */
		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-add-event-to-series-css',
			'custom-tables-v1/classic-editor-add-event-to-series.css',
			[ 'tribe-common-admin' ],
			'admin_enqueue_scripts',
			[
				'priority'     => 200,
				'conditionals' => $context->is_series_post_screen(),
				'groups'       => [ static::$series_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-add-event-to-series-js',
			'custom-tables-v1/classic-editor-add-event-to-series.js',
			[ 'jquery' ],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'localize'     => [],
				'priority'     => 200,
				'conditionals' => $context->is_series_post_screen(),
				'groups'       => [ static::$series_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-trash-series-handler',
			'custom-tables-v1/series-trash-handler.js',
			[ 'jquery', 'jquery-ui-dialog' ],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'localize'     => [
					'name' => 'tecEventsProSeriesTrashHandler',
					'data' => [
						'messages' => [
							'trash'  => [
								'singular' =>
									_x(
										'This Series cannot be trashed because it contains one or more recurring events. ' .
										'Trash the associated recurring event(s) or assign them to another Series.',
										'The prompt displayed to the user when trying to trash a Series related to 1 Recurring Event.',
										'tribe-events-calendar-pro'
									),
								'plural'   =>
									_x(
										'The following Series cannot be trashed because they contain one or more recurring events. ' .
										'Trash the associated recurring event(s) or assign them to another Series.',
										'The prompt displayed to the user when trying to trash a Series related to 2 or more Recurring Events.',
										'tribe-events-calendar-pro'
									),
							],
							'delete' => [
								'singular' =>
									_x(
										'This Series cannot be deleted because it contains one or more recurring events. ' .
										'Delete the associated recurring event(s) or assign them to another Series.',
										'The prompt displayed to the user when trying to delete a Series related to 1 Recurring Event.',
										'tribe-events-calendar-pro'
									),
								'plural'   =>
									_x(
										'The following Series cannot be deleted because they contain one or more recurring events. ' .
										'Delete the associated recurring event(s) or assign them to another Series.',
										'The prompt displayed to the user when trying to delete a Series related to 2 or more Recurring Events.',
										'tribe-events-calendar-pro'
									),
							],
						],
						'dialog'   => [
							'okButtonLabel'      => _x( 'Okay', 'The acknowledgment button text.', 'tribe-events-calendar-pro' ),
							'closeButtonTooltip' => _x( 'Close', 'The tooltip shown when hovering the close control.', 'tribe-events-calendar-pro' ),
						],
					],
				],
				'priority'     => 200,
				'conditionals' => [
					'operator' => 'OR',
					$context->is_series_edit_screen(),
					$context->is_series_post_screen(),
				],
				'groups'       => [ static::$series_group_key ],
			]
		);

		/**
		 * Classic & Block Events assets.
		 */
		tribe_asset(
			$plugin,
			'tec-events-pro-editor-dialog-js',
			'custom-tables-v1/editor-dialog.js',
			[ 'jquery-ui-dialog' ],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'localize'     => [
					'name' => 'tecEventsSeriesBlockEditor',
					'data' => static function () {
						$singular_label = tribe_get_event_label_singular();
						$singular_label_lower = tribe_get_event_label_singular_lowercase();
						$plural_label = tribe_get_event_label_plural();
						$plural_label_lower = tribe_get_event_label_plural_lowercase();

						return [
							'editModalTitle' => sprintf( esc_attr__( 'Edit Recurring %1$s', 'tribe-events-calendar-pro' ), $singular_label ),
							'trashRecurringEvent' => sprintf( esc_attr__( 'Trash Recurring %1$s', 'tribe-events-calendar-pro' ), $singular_label ),
							'okButton' => esc_attr__( 'Ok', 'tribe-events-calendar-pro' ),
							'allEvents' => sprintf( esc_attr__( 'All %1$s', 'tribe-events-calendar-pro' ), $plural_label_lower ),
							'upcomingSetting' => sprintf( esc_attr__( 'This and following %1$s', 'tribe-events-calendar-pro' ), $plural_label_lower ),
							'thisEvent' => sprintf( esc_attr__( 'This %1$s', 'tribe-events-calendar-pro' ), $singular_label_lower ),
							'allDay' => esc_attr__( 'all day', 'tribe-events-calendar-pro' ),
							'effectThisAndFollowingEventsWarning' => sprintf( esc_attr__( 'These changes will affect this %1$s and all following %2$s', 'tribe-events-calendar-pro' ), $singular_label_lower, $plural_label_lower ),
						];
					}
				],
				'priority'     => 200,
				'conditionals' => [
					'operator' => 'OR',
					$context->is_classic_event_post_screen(),
					$context->is_blocks_event_post_screen(),
				],
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$block_event_group_key,
				],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-editor-dialog-css',
			'custom-tables-v1/editor-dialog.css',
			[ 'tribe-common-admin', 'wp-jquery-ui-dialog' ],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'priority'     => 200,
				'conditionals' => array(
					'operator' => 'OR',
					$context->is_classic_event_post_screen(),
					$context->is_blocks_event_post_screen(),
				),
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$block_event_group_key,
				],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-editor-events-css',
			'custom-tables-v1/editor-events.css',
			[ 'tribe-common-admin' ],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'priority'     => 200,
				'conditionals' => [
					'operator' => 'OR',
					$context->is_classic_event_post_screen(),
					$context->is_blocks_event_post_screen(),
				],
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$block_event_group_key,
					static::$classic_event_min_group_key,
				],
			]
		);

		/**
		 * Classic Events assets.
		 */
		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-events-state-js',
			'custom-tables-v1/classic-editor-events-state.js',
			[ 'jquery' ],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'localize'     => [],
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$classic_event_min_group_key,
				],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-events-dialog-js',
			'custom-tables-v1/classic-editor-events-dialog.js',
			[ 'tec-events-pro-editor-dialog-js', 'tec-events-pro-classic-editor-events-state-js' ],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'localize'     => [
					'name' => 'tecEventsSeriesClassicEditor',
					'data' => static function () {
						$singular_label = tribe_get_event_label_singular();
						$singular_label_lower = tribe_get_event_label_singular_lowercase();
						$plural_label = tribe_get_event_label_plural();
						$plural_label_lower = tribe_get_event_label_plural_lowercase();

						return [
							'editModalTitle' => sprintf( esc_attr__( 'Edit Recurring %1$s', 'tribe-events-calendar-pro' ), $singular_label ),
							'trashRecurringEvent' => sprintf( esc_attr__( 'Trash Recurring %1$s', 'tribe-events-calendar-pro' ), $singular_label ),
							'okButton' => esc_attr__( 'Ok', 'tribe-events-calendar-pro' ),
							'allEvents' => sprintf( esc_attr__( 'All %1$s', 'tribe-events-calendar-pro' ), $plural_label_lower ),
							'upcomingSetting' => sprintf( esc_attr__( 'This and following %1$s', 'tribe-events-calendar-pro' ), $plural_label_lower ),
							'thisEvent' => sprintf( esc_attr__( 'This %1$s', 'tribe-events-calendar-pro' ), $singular_label_lower ),
							'allDay' => esc_attr__( 'all day', 'tribe-events-calendar-pro' ),
							'effectThisAndFollowingEventsWarning' => sprintf( esc_attr__( 'These changes will affect this %1$s and all following %2$s', 'tribe-events-calendar-pro' ), $singular_label_lower, $plural_label_lower ),
						];
					}
				],
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [ static::$classic_event_full_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-events-event-date-js',
			'custom-tables-v1/classic-editor-events-event-date.js',
			[],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$classic_event_min_group_key,
				],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-events-off-start-js',
			'custom-tables-v1/classic-editor-events-off-start.js',
			[],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$classic_event_min_group_key,
				],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-events-day-of-month-js',
			'custom-tables-v1/classic-editor-events-day-of-month.js',
			[
				'tec-events-pro-classic-editor-events-event-date-js',
				'tec-events-pro-classic-editor-events-off-start-js',
			],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$classic_event_min_group_key,
				],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-events-locked-options-js',
			'custom-tables-v1/classic-editor-events-locked-options.js',
			[
				'tec-events-pro-classic-editor-events-event-date-js',
				'tec-events-pro-classic-editor-events-off-start-js',
				'tec-events-pro-classic-editor-events-day-of-month-js',
			],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$classic_event_min_group_key,
				],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-events-default-js',
			'custom-tables-v1/classic-editor-events-default.js',
			[ 'tec-events-pro-classic-editor-events-off-start-js' ],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$classic_event_min_group_key,
				],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-events-sync-js',
			'custom-tables-v1/classic-editor-events-sync.js',
			[
				'tec-events-pro-classic-editor-events-off-start-js',
				'tec-events-pro-classic-editor-events-locked-options-js',
				'tec-events-pro-classic-editor-events-day-of-month-js',
			],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'localize'     => [
					[
						'name' => 'tecEventSettings',
						'data' => [ $this, 'get_event_settings' ],
					],
				],
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$classic_event_min_group_key,
				],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-classic-editor-events-js',
			'custom-tables-v1/classic-editor-events.js',
			[
				TEC::POSTTYPE . '-premium-recurrence',
				'tec-events-pro-classic-editor-events-event-date-js',
				'tec-events-pro-classic-editor-events-default-js',
				'tec-events-pro-classic-editor-events-sync-js',
				'tec-events-pro-classic-editor-events-day-of-month-js',
			],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'localize'     => [
					[
						'name' => 'tecEventDetails',
						'data' => [ $this, 'get_event_details' ],
					],
				],
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [
					static::$classic_event_full_group_key,
					static::$classic_event_min_group_key,
				],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-event-series-metabox-js',
			'custom-tables-v1/event-series-metabox.js',
			[ 'tribe-dropdowns' ],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'localize'     => [],
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [ static::$classic_event_full_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-editor-events-classic-css',
			'custom-tables-v1/editor-events-classic.css',
			[ 'tribe-common-admin' ],
			'admin_enqueue_scripts',
			[
				'in_footer'    => true,
				'priority'     => 200,
				'conditionals' => $context->is_classic_event_post_screen(),
				'groups'       => [
					static::$classic_event_min_group_key,
				],
			]
		);

		/**
		 * Block Event assets.
		 */
		tribe_asset(
			$plugin,
			'tec-events-pro-block-editor-data-js',
			'custom-tables-v1/app/data.js',
			[ 'tribe-pro-gutenberg-data', TEC::POSTTYPE . '-premium-admin' ],
			'enqueue_block_editor_assets',
			[
				'in_footer'    => true,
				'localize'     => [
					[
						'name' => 'tecEventDetails',
						'data' => [ $this, 'get_event_details' ],
					],
					[
						'name' => 'tribe_events_pro_recurrence_strings',
						'data' => [ $this, 'get_recurrence_strings' ],
					],
				],
				'priority'     => 200,
				'conditionals' => $context->is_blocks_event_post_screen(),
				'groups'       => [ static::$block_event_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-block-editor-blocks-js',
			'custom-tables-v1/app/blocks.js',
			[ 'tec-events-pro-block-editor-data-js' ],
			'enqueue_block_editor_assets',
			[
				'in_footer'    => true,
				'localize'     => [],
				'priority'     => 201,
				'conditionals' => $context->is_blocks_event_post_screen(),
				'groups'       => [ static::$block_event_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-block-editor-elements-js',
			'custom-tables-v1/app/elements.js',
			[ 'tribe-pro-gutenberg-elements' ],
			'enqueue_block_editor_assets',
			[
				'in_footer'    => true,
				'priority'     => 202,
				'conditionals' => $context->is_blocks_event_post_screen(),
				'groups'       => [ static::$block_event_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-block-editor-dialog-js',
			'custom-tables-v1/app/dialog.js',
			[
				'tec-events-pro-editor-dialog-js',
				'tec-events-pro-block-editor-data-js',
			],
			'enqueue_block_editor_assets',
			[
				'in_footer'    => true,
				'localize'     => [],
				'priority'     => 202,
				'conditionals' => $context->is_blocks_event_post_screen(),
				'groups'       => [ static::$block_event_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-block-editor-series-metabox-js',
			'custom-tables-v1/app/series-metabox.js',
			[
				'jquery',
				'tec-events-pro-block-editor-data-js',
			],
			'enqueue_block_editor_assets',
			[
				'in_footer'    => true,
				'localize'     => [],
				'priority'     => 203,
				'conditionals' => $context->is_blocks_event_post_screen(),
				'groups'       => [ static::$block_event_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-block-editor-occurrence-redirect-js',
			'custom-tables-v1/app/occurrence-redirect.js',
			[
				'jquery',
				'tec-events-pro-block-editor-data-js',
			],
			'enqueue_block_editor_assets',
			[
				'in_footer'    => true,
				'localize'     => [],
				'priority'     => 203,
				'conditionals' => $context->is_blocks_event_post_screen(),
				'groups'       => [ static::$block_event_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-block-editor-blocks-css',
			'custom-tables-v1/app/blocks.css',
			[ 'tribe-pro-gutenberg-blocks-styles' ],
			'enqueue_block_editor_assets',
			[
				'in_footer'    => false,
				'conditionals' => $context->is_blocks_event_post_screen(),
				'groups'       => [ static::$block_event_group_key ],
			]
		);

		tribe_asset(
			$plugin,
			'tec-events-pro-block-editor-elements-css',
			'custom-tables-v1/app/elements.css',
			[ 'tribe-pro-gutenberg-element' ],
			'enqueue_block_editor_assets',
			[
				'in_footer'    => false,
				'conditionals' => $context->is_blocks_event_post_screen(),
				'groups'       => [ static::$block_event_group_key ],
			]
		);

		// Build a UI Lock on the current Request context and conditionally lock the UI.
		$this->container->singleton( UI_Lock::class, function () {
			$template = $this->container->make( Tribe__Events__Pro__Editor__Template__Admin::class );
			$request = $this->container->make( Requests::class )->from_http_request();
			$occurrence = $this->container->make( Occurrence::class );

			return new UI_Lock( $request->get_param( 'id' ), $template, $occurrence );
		} );
		add_filter( 'tec_events_pro_lock_rules_ui', [ $this, 'lock_rules_ui' ] );
		add_filter( 'tec_events_pro_lock_exclusions_ui', [ $this, 'lock_exclusions_ui' ] );
	}

	/**
	 * Get event details for localization.
	 *
	 * @since 6.0.0
	 *
	 * @return array<string,mixed> The event details.
	 */
	public function get_event_details() {
		return $this->container->make( Event::class )->get_event_details();
	}

	/**
	 * Get event settings for localization.
	 *
	 * @since 6.0.0
	 * @return array<string,mixed> The event settings.
	 *
	 */
	public function get_event_settings() {
		return $this->container->make( Event::class )->get_event_settings();
	}

	/**
	 * Returns the map of localized strings dealing with recurrence rules.
	 *
	 * @since 6.0.0
	 *
	 * @return array<string,array<string,string>>> The map of localized strings.
	 */
	public function get_recurrence_strings() {
		return apply_filters(
			'tribe_events_pro_recurrence_strings',
			[
				'date'       => \Tribe__Events__Pro__Recurrence__Meta::date_strings(),
				'recurrence' => \Tribe__Events__Pro__Recurrence__Strings::recurrence_strings(),
				'exclusion'  => [],
			]
		);
	}

	/**
	 * Filters whether the recurrence rules UI should be locked or not.
	 *
	 * @since 6.0.0
	 *
	 * @return bool Whether the recurrence rule UI should be locked or not.
	 */
	public function lock_rules_ui(): bool {
		return $this->container->make( UI_Lock::class )->lock_rules_ui();
	}

	/**
	 * Filters whether the exclusions rules UI should be locked or not.
	 *
	 * @since 6.0.0
	 *
	 * @return bool Whether the exclusions rules UI should be locked or not.
	 */
	public function lock_exclusions_ui(): bool {
		return $this->container->make( UI_Lock::class )->lock_exclusions_ui();
	}
}