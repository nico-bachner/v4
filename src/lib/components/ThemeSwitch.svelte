<script lang="ts">
	import { theme } from '$lib/stores';

	const themes = [
		{ title: 'System', value: 'system' },
		{ title: 'Light', value: 'light' },
		{ title: 'Dark', value: 'dark' },
	];

</script>

<select bind:value={$theme}>
	{#each themes as { value, title }}
		<option {value}>
			{title}
		</option>
	{/each}
</select>

<style>
	select {
		cursor: pointer;
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		padding: 0.5rem 2.25rem 0.5rem 0.75rem;
		margin: 0 0 0 1rem;
		transition-property: border-color;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		border: 1px solid var(--lighter);
		border-radius: 0.25rem;
		color: var(--stronger);
		background-color: transparent;
		background-image: url(/icons/select.svg);
		background-position: right 0.75rem top 50%;
		background-repeat: no-repeat;
		background-size: 0.75rem 0.75rem;
		font-size: var(--font-sm);
		line-height: 1.2;
	}
	select:hover {
		border-color: var(--strong);
	}

</style>
