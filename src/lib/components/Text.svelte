<script lang="ts">
	export let as: TextType = 'p';
	export let size: FontSize = 'base';
	export let weight: FontWeight = 400;
	export let height: LineHeight = 'prose';
	export let transform: Transform = 'none';
	export let align: Align = 'left';
	export let color: Color = 'stronger';
	export let style: string[] | string | undefined = undefined;
	export let className: string | undefined = undefined;

	let styles = [
		`font-size: var(--font-${size})`,
		`font-weight: ${weight}`,
		`line-height: var(--line-height-${height})`,
		`text-transform: ${transform}`,
		`text-align: ${align}`,
		`color: var(--${color})`,
	];

	if (style) {
		styles.push(...style);
	}

</script>

{#if as == 'h1'}
	<h1 style={styles.join(';')} class={className}>
		<slot />
	</h1>
{:else if as == 'h2'}
	<h2 style={styles.join(';')} class={className}>
		<slot />
	</h2>
{:else if as == 'h3'}
	<h3 style={styles.join(';')} class={className}>
		<slot />
	</h3>
{:else}
	<p style={styles.join(';')} class={className}>
		<slot />
	</p>
{/if}
