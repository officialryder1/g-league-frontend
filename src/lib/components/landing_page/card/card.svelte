<script>
    let {
        heading = "AI Games Picks", 
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis adipisci ullam. Soluta, reiciendis esse repudiandae eum ", image = "/images/gaming-phone.jpg"
        } = $props()
</script>

<div class="card bg-neutral text-neutral-content w-96 mt-5 flex-1">
    <div class="card-body">
        <h6 class="card-title text-sm">{heading}</h6>
        <small>{description}</small>
    </div>
    <figure>
        <img src={image} alt="card-phone" loading="lazy" class="h-60 w-full">
    </figure>
</div>