<script lang="ts">
	export let href: string;
	export let variant: LinkVariant = 'none';

	let internal = href.startsWith('/');

</script>

{#if internal}
	<a {href} class={variant}>
		<slot />
	</a>
{:else}
	<a {href} class={variant} target="_blank" rel="noopener noreferrer">
		<slot />
	</a>
{/if}

<style>
	.highlight {
		color: var(--primary);
	}
	.highlight:hover {
		text-decoration: underline;
	}

	.primary {
		color: var(--gray-stronger);
	}
	.primary:hover {
		text-decoration: underline;
	}

	.secondary {
		color: var(--gray-strong);
	}
	.secondary:hover {
		color: var(--gray-stronger);
	}

	.none {
		color: inherit;
	}

</style>
