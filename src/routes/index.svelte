<script lang="ts">
	import Text from '$lib/components/Text.svelte';
	import Typewriter from '$lib/components/Typewriter.svelte';
	import Link from '$lib/components/Link.svelte';
	import Mail from '$lib/components/Mail.svelte';

</script>

<svelte:head>
	<title>Nico Bachner - Aspiring Open Sourcerer</title>
	<meta
		name="description"
		content="High School Student, Hobby Developer, and Aspiring Open Sourcerer"
	/>
</svelte:head>

<main>
	<h1>Hi, I'm Nico.</h1>
	<Text
		size="3xl"
		weight={700}
		height="tight"
		className="subtitle"
		style={[
			'color: transparent',
			'background-image: linear-gradient(to top right, var(--primary-light), var(--primary))',
			'-webkit-background-clip: text',
			'background-clip: text',
		]}
	>
		<Typewriter>I'm an Aspiring Open Sourcerer</Typewriter>
	</Text>
	<section>
		<h2>About Me</h2>
		<p>
			I'm a <strikethrough>High School</strikethrough> Student, Hobby Developer,
			and Aspiring Open Sourcerer currently living in Luxembourg. I have worked with
			various different technologies, especially in the domain of Web Development.
		</p>
	</section>
	<section>
		<h2>Projects</h2>
		<p>
			Here are some of my most cherished projects. All of my code-based projects
			are Open Source and their source code can be found on GitHub, where you
			can also find some of my less noteworthy projects.
		</p>
	</section>
	<section>
		<h2>Articles</h2>
		<p>Here are some of articles I have recently written.</p>
	</section>
	<section>
		<h2>Contact</h2>
		<p>
			Should you wish to get in touch with me, you can
			<Mail address="hello@nicob.dev" variant="highlight">send me an email</Mail
			>. I am also available on
			<Link href="https://dev.to/nico_bachner" variant="highlight">DEV.to</Link
			>.
		</p>
	</section>
</main>

<style>
	main {
		max-width: max-content;
		margin: 0 auto;
	}

	h1 {
		margin-bottom: 4pt;
	}

	section {
		margin: 4rem 0;
	}
	@media (min-width: 640px) {
		section {
			margin: 6rem 0;
		}
	}

</style>
