import { URL } from "$env/static/private";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      const token = data.get("token");
      const username = data.get("username");
      const password = data.get("password");
      const password1 = data.get("confirm_password");

      // Validate required fields
      if (!token || !username || !password || !password1) {
        return fail(400, {
          error: "All fields are required."
        });
      }

      // Check password match
      if (password !== password1) {
        return fail(400, {
          error: "Passwords do not match."
        });
      }

      // Make API request
      const res = await fetch(`${URL}${token}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      const result = await res.json();

      if (!res.ok) {
        return fail(res.status, {
          error: result.error || res.statusText
        });
      }


    } catch (err) {
      console.error("Unexpected Error:", err);
      return fail(500, {
        error: "An unexpected error occurred. Token might have expired."
      });
    }

    // Successful registration
    throw redirect(302, "/coach/message");
  }
};
