<script lang="ts">
  import '../app.css';
</script>

<div class="min-h-screen bg-gray-50">
  <header class="bg-white border-b border-gray-200 shadow-sm">
    <div class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
        🔒 Unacquirable Enterprises
      </a>
      <nav class="flex gap-4 text-sm font-medium">
        <a href="/" class="text-gray-600 hover:text-indigo-600 transition-colors">Registry</a>
        <a href="/submit" class="text-gray-600 hover:text-indigo-600 transition-colors">Submit</a>
        <a href="/admin" class="text-gray-600 hover:text-indigo-600 transition-colors">Admin</a>
      </nav>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-4 py-8">
    <slot />
  </main>

  <footer class="border-t border-gray-200 mt-16">
    <div class="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
      A public registry of businesses legally locked from being sold.
    </div>
  </footer>
</div>
