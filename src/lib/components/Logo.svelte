<script lang="ts">
	import { draw } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => (mounted = true));

</script>

{#if mounted}
	<svg viewBox="0 0 60 60">
		<path
			in:draw={{ duration: 1500 }}
			d="
			M 15 35
			A 10 10, 0, 1, 0, 25 45
			A 5 5, 0, 0, 1, 30 40 
			A 10 10, 0, 1, 0, 20 30 
			A 5 5, 0, 0, 1, 15 35
		"
			stroke="currentColor"
			stroke-width="3.5"
			fill="none"
		/>
		<path
			in:draw={{ duration: 1000, delay: 500 }}
			d="
			M 40 30
			A 5 5, 0, 0, 1, 45 25
			A 10 10, 0, 1, 0, 35 15
			A 5 5, 0, 0, 1, 30 20
		"
			stroke="currentColor"
			stroke-width="3.5"
			fill="none"
		/>

		<circle
			in:draw={{ duration: 500, delay: 1500 }}
			cx="45"
			cy="15"
			r="3.5"
			stroke="currentColor"
			stroke-width="3.5"
			fill="none"
		/>
		<circle
			in:draw={{ duration: 500, delay: 1500 }}
			cx="30"
			cy="30"
			r="3.5"
			stroke="currentColor"
			stroke-width="3.5"
			fill="none"
		/>
		<circle
			in:draw={{ duration: 500, delay: 1500 }}
			cx="15"
			cy="45"
			r="3.5"
			stroke="currentColor"
			stroke-width="3.5"
			fill="none"
		/>
	</svg>
{/if}
