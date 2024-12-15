<script>
	import Nav from "$lib/components/landing_page/nav/nav.svelte";
	import '../../app.css';
	let { children } = $props();

	let link = $state([
        {title: "Home"},
        {title: "About"},
        {title: "Contact us"},
        {title: "Join"}
    ])
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
</svelte:head>

<Nav menu={link}/>
<main class="h-full p-8">
	{@render children()}
</main>

<style>
	:global(body){
		/* // <uniquifier>: Use a unique and descriptive class name
		// <weight>: Use a value from 200 to 700 */
			font-family: "Ubuntu", sans-serif;
			font-weight: 400;
			font-style: normal;
		
	}
</style>