<script>
    const logos = [
      { name: "Company 1", src: "https://via.placeholder.com/150" },
      { name: "Company 2", src: "https://via.placeholder.com/150" },
      { name: "Company 3", src: "https://via.placeholder.com/150" },
      { name: "Company 4", src: "https://via.placeholder.com/150" },
      { name: "Company 5", src: "https://via.placeholder.com/150" }
    ];
</script>

<section class="py-16 bg-inherit">
<div class="text-center mb-8">
    <h2 class="text-3xl font-bold">Our Trusted Partners</h2>
    <p class="text-gray-600 mt-2">We are proud to work with industry-leading companies</p>
</div>

<div class="flex justify-center items-center space-x-8 overflow-hidden">
    <div class="carousel carousel-center space-x-8">
    {#each logos as logo}
        <div class="carousel-item">
        <img 
            src={logo.src} 
            alt={logo.name} 
            class="w-32 h-auto object-contain transition-transform hover:scale-110" 
        />
        </div>
    {/each}
    </div>
</div>
</section>
  