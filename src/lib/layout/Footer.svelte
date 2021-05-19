<script>
	import { pages, links } from '$lib/pages';

	import Text from '$lib/components/Text.svelte';
	import Link from '$lib/components/Link.svelte';

</script>

<div class="footer-wrapper">
	<hr />
	<footer>
		<nav class="pages">
			<p class="footer-header">Pages</p>
			{#each pages as page}
				<div><Link href={page.href}>{page.title}</Link></div>
			{/each}
		</nav>
		<nav class="links">
			<p class="footer-header">Links</p>
			{#each links as link}
				<div><Link href={link.href}>{link.title}</Link></div>
			{/each}
		</nav>
	</footer>
	<div id="source-code">
		<Link href="https://github.com/nico-bachner/v4">Source Code</Link>
	</div>
</div>

<style>
	.footer-wrapper {
		font-size: var(--font-base);
		max-width: var(--width-prose);
		padding: 0 1.5rem;
		margin: 6rem auto 7rem;
	}
	footer {
		margin: 5rem auto 2rem;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 6rem;
	}
	nav {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: repeat(9, minmax(0, 1fr));
		gap: 1rem;
	}
	nav > * {
		color: var(--light);
	}
	.pages > * {
		text-align: left;
	}
	.links > * {
		text-align: right;
	}

	.footer-header {
		color: var(--strongest);
	}

	@media (min-width: 640px) {
		.footer-header {
			grid-column: span 2;
		}
		nav {
			grid-template-rows: repeat(5, minmax(0, 1fr));
		}
	}

	#source-code {
		text-align: center;
		font-family: var(--font-family-mono);
		font-size: var(--font-lg);
		font-weight: 500;
		color: transparent;
		background-image: linear-gradient(
			to top right,
			var(--primary-light),
			var(--primary-dark)
		);
		-webkit-background-clip: text;
		background-clip: text;
	}
	#source-code:hover {
		background-image: linear-gradient(
			to top right,
			var(--primary-light),
			var(--primary)
		);
	}

</style>
