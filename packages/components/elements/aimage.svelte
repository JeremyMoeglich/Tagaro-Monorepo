<script lang="ts">
	import { dev } from '$app/environment';
	import { indexed_assets } from 'asset_library/all_assets';
	import type { package_id } from 'asset_library/assets/packages';
	import { receive_assets, receive_id } from 'asset_library/assets/receive_type';
	import { zubuchoption_id } from 'asset_library/assets/zubuchoptionen';
	import { make_url } from 'frontend/url';

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
		} else if ('wahl' in image) {
			path += `packages/wahl/${image.wahl}.png`;
		} else if (is_receive_id(image.asset_id)) {
			path += `receivers/${image.asset_id}.png`;
		} else {
			path += `zubuchoptionen/${image.asset_id}.png`;
		}
		return path;
	}

	$: path = get_path(image);
</script>

<img
	src={make_url(path, dev)}
	alt={'wahl' in image ? image.wahl : indexed_assets[image.asset_id].name}
	class="img"
/>

<style>
	.img {
		width: 100%;
	}
</style>
