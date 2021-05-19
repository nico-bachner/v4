<script lang="ts">
	import { typewriter } from '$lib/transitions/typewriter';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => (mounted = true));

	let written = false;

</script>

{#if mounted}
	<span
		in:typewriter
		on:introend={() => (written = true)}
		class={`${!written && 'cursor'}`}
	>
		<slot />
	</span>
{:else}
	<span class="placeholder">|</span>
{/if}

<style>
	.cursor::after {
		content: '|';
	}
	.cursor::after,
	.placeholder {
		font-weight: 100;
	}

</style>
