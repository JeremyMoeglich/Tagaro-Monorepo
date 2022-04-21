<script lang="ts">
	import IpLogOverview from '$lib/components/site/routes/admin/Ip_log_overview.svelte';
	import { firestore } from '$lib/firebase_vars';
</script>

<IpLogOverview {firestore} />
