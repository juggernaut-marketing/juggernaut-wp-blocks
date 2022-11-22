/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { TextControl, Panel } from '@wordpress/components'
import { useBlockProps, InnerBlocks, ColorPalette, InspectorControls } from '@wordpress/block-editor'


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import './editor.scss'


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default ({ attributes, setAttributes }) => {

	const ALLOWED_BLOCKS = ['juggernaut/button']
		
	const onChangeBGColor = (hexColor) => {
		setAttributes({ bg_color: hexColor })
	}

	const onChangeTextColor = (hexColor) => {
		setAttributes({ text_color: hexColor })
	}

	return (
		<div {...useBlockProps()}>
			<InspectorControls key="settings">
				<Panel header='Hello World'>
					<fieldset>
						<legend className="blocks-base-control__label">
							Background Color
						</legend>
						<ColorPalette value={attributes.bg_color} onChange={onChangeBGColor} />
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							Text Color
						</legend>
						<ColorPalette value={attributes.text_color} onChange={onChangeTextColor} />
					</fieldset>
				</Panel>
			</InspectorControls>
			<TextControl
				value={ attributes.message }
				onChange={(val) => setAttributes({ message: val })}
				style={{
					backgroundColor: attributes.bg_color,
					color: attributes.text_color,
				}}
			/>
			<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
		</div>
	)

}