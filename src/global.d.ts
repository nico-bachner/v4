/// <reference types="@sveltejs/kit" />

// theme
type Theme = 'system' | 'light' | 'dark';

// color types
type Shade =
	| 'lightest'
	| 'lighter'
	| 'light'
	| 'strong'
	| 'stronger'
	| 'strongest';
type PrimaryColor = 'primary' | 'primary-light';
type Color = Shade | PrimaryColor;

// text style types
type TextType = 'h1' | 'h2' | 'h3' | 'p';
type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
type FontWeight = 300 | 400 | 500 | 600 | 700 | 800;
type LineHeight = 'none' | 'tight' | 'base' | 'prose' | 'loose';
type Transform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';
type Align = 'left' | 'center' | 'right';

// component types
type LinkVariant = 'highlight' | 'primary' | 'secondary' | 'none';

// miscellaneous
interface Node {
	textContent: string | null;
}
