import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default ({ attributes }) => {

	return (
		<div {...useBlockProps.save()} style={{
			backgroundColor: attributes.bg_color,
			color: attributes.text_color,
		}}>
			{ attributes.message }
			<InnerBlocks.Content />
		</div>
	)

}
