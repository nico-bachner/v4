<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');

	type ButtonType = 'primary' | 'secondary';
	export let type: ButtonType = 'primary';

</script>

<button class={type} on:click={click}>
	<slot />
</button>

<style>
	button {
		cursor: pointer;
		font-size: var(--font-sm);
		padding: 0.5em 0.75em;
		border: 1px solid;
		border-radius: 4pt;
	}
	button:hover {
		background-color: var(--gray-lightest);
	}

	.primary {
		transition-property: background;
		color: var(--gray-lightest);
		background-color: var(--gray-strongest);
	}
	.primary:hover {
		color: var(--gray-strongest);
		background-color: var(--gray-lightest);
	}

	.secondary {
		color: var(--gray-strong);
		background-color: var(--gray-lightest);
		border-color: var(--gray-lighter);
	}
	.secondary:hover {
		color: var(--gray-stronger);
		border-color: var(--gray-stronger);
	}

</style>
