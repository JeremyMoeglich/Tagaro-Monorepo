<script lang="ts">
	/**
	 * The URL of the image to be used as a preview when sharing the website.
	 * @type {string}
	 */
	export let previewImageUrl: string = '/share_preview.png';

	/**
	 * A short description of the website or webpage.
	 * @type {string}
	 */
	export let websiteDescription: string =
		'Sky Onlinehändler seit 2006 und bietet Ihnen zahlreiche Artikel aus den Bereichen Unterhaltungselektronik und Pay-TV an.';

	/**
	 * The canonical URL of the website or webpage.
	 * @type {string}
	 */
	export let websiteUrl: string = 'https://tagaro.de';

	/**
	 * The width of the preview image, in pixels.
	 * @type {string}
	 */
	export let previewImageWidth: string = '2209';

	/**
	 * The height of the preview image, in pixels.
	 * @type {string}
	 */
	export let previewImageHeight: string = '2209';

	/**
	 * The type of the website (e.g., website, blog, app).
	 * @type {string}
	 */
	export let websiteType: string = 'website';

	/**
	 * A list of keywords that represent the content of the website.
	 * @type {string}
	 */
	export let websiteKeywords: string = 'Sky, Abo, Tagaro';

	/**
	 * The name of the author of the website.
	 * @type {string}
	 */
	export let websiteAuthor: string = 'Jeremy Möglich';

	/**
	 * The title of the website or webpage.
	 * @type {string}
	 */
	export let websiteTitle: string = 'Sky Abo mit Prämie vom Sky Onlinehändler seit 2006';
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
