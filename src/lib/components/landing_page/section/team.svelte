<script>
    import Teamcard from "../card/Teamcard.svelte";
    

    const cards = [
        { id: 1, title: "Card 1" },
        { id: 2, title: "Card 2" },
        { id: 3, title: "Card 3" },
        { id: 4, title: "Card 4" },
        { id: 5, title: "Card 5" },
    ];

</script>

<section class="mt-10">
    <span class="badge badge-secondary badge-outline font-bold mx-auto my-0 block">Team</span><br>
    <div class="carousel" >
        <div class="track">
            {#each cards as card (card.id) }
                <Teamcard/>
            {/each}
        </div>
    </div>
</section>

<style>
    .carousel {
        overflow: hidden;
        width: 100%;
        height: 400px;
        position: relative;
    }
    .track{
        display: flex;
        width: max-content;
        justify-content: space-between;
        gap: 50px;
        animation: scroll 10s linear infinite;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
</style>