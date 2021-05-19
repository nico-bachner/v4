<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	export let variant: LinkVariant = 'none';
	export let address: string;
	export let cc: string | undefined = undefined;
	export let bcc: string | undefined = undefined;
	export let subject: string | undefined = undefined;
	export let body: string | undefined = undefined;

	let query: string;
	if (cc || bcc || subject || body) {
		query = '?';
		if (cc) {
			query += `cc=${encodeURIComponent(cc)}`;
		}
		if (bcc) {
			query += `${cc && '&'}bcc=${encodeURIComponent(bcc)}`;
		}
		if (subject) {
			query += `${(cc || bcc) && '&'}subject=${encodeURIComponent(subject)}`;
		}
		if (body) {
			query += `${(cc || bcc || subject) && '&'}body=${encodeURIComponent(
				body
			)}`;
		}
	}

</script>

<Link href={'mailto:' + address + (query ?? '')} {variant}>
	<slot />
</Link>
