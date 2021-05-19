export const typewriter = (
	node: Node,
	{ speed = 60, delay = 500, delayEnd = 500 }
) => {
	if (node.textContent != null) {
		const text = node.textContent;
		const duration = text.length * speed + delayEnd;

		return {
			delay,
			duration,
			tick: (tick: number) => {
				const i =
					text.length *
					tick *
					((text.length * speed + delayEnd) / (text.length * speed));
				node.textContent = text.slice(0, i);
			},
		};
	}

	throw new Error('the typewriter transition only works for text');
};
