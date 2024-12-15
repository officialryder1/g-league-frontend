<script>
    let {form} = $props()
    
    
</script>

<!-- Registration Form -->
<div class="min-h-screen flex items-center justify-center bg-inherit m-10">
  <form class="card w-full max-w-sm shadow-lg bg-white p-6 rounded-lg" method="POST">
    <h2 class="text-2xl font-bold text-center mb-6">Register as Coach</h2>
    {#if form?.error}
        <p class="text-center text-red-500 font-bold">{form?.error}</p>
    {/if}
    <!-- Token Field -->
    <div class="form-control mb-4">
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label class="label">
        <span class="label-text">Token</span>
      </label>
      <input type="text" name="token" placeholder="Enter your invite token" required 
             class="input input-bordered w-full" />
    </div>

    <!-- Username Field -->
    <div class="form-control mb-4">
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label class="label">
        <span class="label-text">Username</span>
      </label>
      <input type="text" name="username" placeholder="Choose a username" required 
             class="input input-bordered w-full" />
    </div>

    <!-- Password Field -->
    <div class="form-control mb-4">
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label class="label">
        <span class="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="Enter your password" required 
             class="input input-bordered w-full" />
    </div>

    <!-- Confirm Password Field -->
    <div class="form-control mb-4">
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label class="label">
        <span class="label-text">Confirm Password</span>
      </label>
      <input type="password" name="confirm_password" placeholder="Confirm your password" required 
             class="input input-bordered w-full" />
    </div>

    <!-- Submit Button -->
    <div class="form-control mt-6">
      <button type="submit" class="btn btn-primary w-full">Register</button>
    </div>
  </form>
</div>
