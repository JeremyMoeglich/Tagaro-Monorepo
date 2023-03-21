<script lang="ts">
	import { indexed_assets } from 'asset_library/all_assets';
	import type { package_id } from 'asset_library/assets/packages';
	import { receive_assets, receive_id } from 'asset_library/assets/receive_type';
	import { zubuchoption_id } from 'asset_library/assets/zubuchoptionen';

	type AImageType =
		| ({
				asset_id: package_id;
		  } & (
				| {
						variant: 'normal' | 'square';
				  }
				| {
						variant: 'senders';
						sender: string;
				  }
		  ))
		| {
				asset_id: zubuchoption_id;
		  }
		| {
				asset_id: receive_id;
		  }
		| {
				asset_id: 'wahl';
				wahl: string;
		  };

	export let image: AImageType;

	function is_receive_id(id: string): id is receive_id {
		return receive_assets.map((asset) => asset.id).includes(id as receive_id);
	}

	function get_path(image: AImageType): string {
		let path = '/images/assets/';
		if ('variant' in image) {
			path += 'packages/';
			if (image.variant === 'senders') {
				path += `senders/${image.asset_id}/${image.sender}.png`;
			} else {
				path += `${image.variant}/${image.asset_id}.${image.variant === 'normal' ? 'png' : 'webp'}`;
			}
		}
		if ('wahl' in image) {
			path += `packages/wahl/${image.wahl}.png`;
		}
		if (is_receive_id(image.asset_id)) {
			path += `receivers/${image.asset_id}.png`;
		} else {
			path += `zubuchoptionen/${image.asset_id}.png`;
		}
		return path;
	}

	$: path = get_path(image);
</script>

<img src={path} alt={'wahl' in image ? image.wahl : indexed_assets[image.asset_id].name} />
