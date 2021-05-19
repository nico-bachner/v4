<script lang="ts">
	import '../app.css';

	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	import { theme } from '$lib/stores';

</script>

<svelte:head>
	<meta
		name="color-scheme"
		content={$theme == 'system' ? 'light dark' : $theme}
	/>
	<link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<Header />

<div>
	<slot />
</div>

<Footer />

<style>
	div {
		margin: 0 1.5rem;
	}

</style>
