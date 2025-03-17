import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env.BACKEND_URL": JSON.stringify(
      "https://ai-code-reviewer-and-dsa-guide.onrender.com"
    ),
  },
});
