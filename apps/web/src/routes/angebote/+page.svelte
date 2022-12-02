<script lang="ts">
	import AngeboteRotator from 'components/complete/angebote_rotator.svelte';
	import AllOverviews from '../../../../../packages/components/complete/all_overviews.svelte';
	import AlleBuchbar from 'components/complete/alle_buchbar.svelte';
	import Inklusive from 'components/complete/inklusive.svelte';
</script>

<div>
	<AngeboteRotator />
	<AlleBuchbar />
	<AllOverviews ebay_version={false} />
	<Inklusive version={"tagaro"} />
</div>
