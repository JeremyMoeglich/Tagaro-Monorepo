<script lang="ts">
	/**
	 * The URL of the image to be used as a preview when sharing the website.
	 * @type {string}
	 */
	export let previewImageUrl = '/share_preview.png';

	/**
	 * A short description of the website or webpage.
	 * @type {string}
	 */
	export let websiteDescription =
		'Sky Abo nach Wahl + € 20 Bonus vom Sky Onlinehändler ✓ Täglicher Versand ✓ Immer sparen ✓ Service seit 2006 ✓ Sky Cinema, Sport und Bundesliga mit Rabatt im Jahresabo inkl. Sky Q hier bestellen.';

	/**
	 * The canonical URL of the website or webpage.
	 * @type {string}
	 */
	export let websiteUrl = 'https://tagaro.de';

	/**
	 * The width of the preview image, in pixels.
	 * @type {string}
	 */
	export let previewImageWidth = '2209';

	/**
	 * The height of the preview image, in pixels.
	 * @type {string}
	 */
	export let previewImageHeight = '2209';

	/**
	 * The type of the website (e.g., website, blog, app).
	 * @type {string}
	 */
	export let websiteType = 'website';

	/**
	 * A list of keywords that represent the content of the website.
	 * @type {string}
	 */
	export let websiteKeywords = 'Sky, Abo, Tagaro';

	/**
	 * The name of the author of the website.
	 * @type {string}
	 */
	export let websiteAuthor = 'Jeremy Möglich';

	/**
	 * The title of the website or webpage.
	 * @type {string}
	 */
	export let websiteTitle = 'Sky Abo + 20€ Prämie | Sky Händler seit 2006 | Spare bis zu 188€';
</script>

<svelte:head>
	<meta property="og:title" content={websiteTitle} />
	<meta property="og:image" content={previewImageUrl} />
	<meta property="og:description" content={websiteDescription} />
	<meta property="og:url" content={websiteUrl} />
	<meta property="og:image:width" content={previewImageWidth} />
	<meta property="og:image:height" content={previewImageHeight} />
	<meta property="og:type" content={websiteType} />
	<meta name="description" content={websiteDescription} />
	<meta name="keywords" content={websiteKeywords} />
	<meta name="author" content={websiteAuthor} />
	<title>{websiteTitle}</title>
</svelte:head>
