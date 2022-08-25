/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { Icon, listView } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import edit from './edit';

/**
 * Style dependencies - will load in editor
 */
import './editor.scss';
import './view.scss';
import metadata from './block.json';
const { name, attributes, category } = metadata;

// Name must be exported separately.
export { name };

export const title = __( 'Author List', 'newspack-blocks' );

export const settings = {
	title,
	icon: {
		src: <Icon icon={ listView } />,
		foreground: '#36f',
	},
	keywords: [ __( 'author', 'newspack-blocks' ), __( 'profile', 'newspack-blocks' ) ],
	description: __( 'Display a list of author profile cards.', 'newspack-blocks' ),
	styles: [
		{ name: 'default', label: _x( 'Default', 'block style', 'newspack-blocks' ), isDefault: true },
		{ name: 'center', label: _x( 'Centered', 'block style', 'newspack-blocks' ) },
	],
	attributes,
	category,
	supports: {
		html: false,
		default: '',
	},
	edit,
	save: () => null, // to use view.php
};
