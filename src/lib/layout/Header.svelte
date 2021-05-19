<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';

	import { pages } from '$lib/pages';

	const nav_pages = pages.slice(0, 4);

</script>

<header>
	<nav>
		<a href="/" id="logo">
			<Logo />
		</a>
		{#each nav_pages as page}
			<div class="page">
				<Link variant="primary" href={page.href}>
					{page.title}
				</Link>
			</div>
		{/each}
		<ThemeSwitch />
	</nav>
</header>

<style>
	header {
		top: 0;
		z-index: 50;
		padding: 2rem 1.5rem;
		margin: 1rem 0;
	}
	@media (min-width: 640px) {
		header {
			position: sticky;
			margin: 1.5rem 0;
		}
	}
	@supports ((-webkit-backdrop-filter: blur()) or (backdrop-filter: blur())) {
		header {
			-webkit-backdrop-filter: blur(16px);
			backdrop-filter: blur(16px);
		}
	}
	@supports not (
		(-webkit-backdrop-filter: blur()) or (backdrop-filter: blur())
	) {
		header {
			background-color: var(--lightest);
		}
	}

	nav {
		max-width: calc(var(--width-prose) + 10rem);
		margin: auto;
		color: var(--strongest);
		font-size: var(--font-base);
		display: flex;
		align-items: center;
		justify-content: justify-between;
	}

	.page {
		display: none;
		margin: 0 1rem;
	}
	@media (min-width: 640px) {
		.page {
			display: inline;
		}
	}

	#logo {
		flex-grow: 1;
		width: 42pt;
		height: 42pt;
	}

</style>
