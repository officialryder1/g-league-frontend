<script>
    import Register from "$lib/components/coach/register.svelte";
	
    let { form } = $props()
    $inspect(form)
</script>

<Register {form}/>