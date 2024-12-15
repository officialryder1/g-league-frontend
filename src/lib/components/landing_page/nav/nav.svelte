<script>
    let{menu = []} = $props()
</script>
<header class="sticky top-0 z-50 bg-gray-900 shadow-md">
  <nav class=" px-56 max-xl:px-20">
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <a class="btn btn-ghost text-xl" href="/">G-league</a>
        </div>
        <div class="navbar-center">
             <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
             <ul
             tabindex="0"
             class="flex justify-between bg-base-100 rounded-box z-[1] mt-3 shadow gap-5">
             {#each menu as link }
                <li><a class="hover:cursor-pointer hover:text-black hover:bg-green-400 hover:px-1 transition-color duration-500 ease-in-out" href="/"> {link.title} </a> </li> 
             {/each}
             
           </ul>
        </div>
        <div class="navbar-end">
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
  </nav>
</header>