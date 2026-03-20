<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData, ActionData } from './$types';
  export let data: PageData;
  export let form: ActionData;

  import { page } from '$app/stores';
  $: success = $page.url.searchParams.get('success') === '1';
</script>

<svelte:head>
  <title>Submit an Enterprise – Unacquirable Enterprises</title>
</svelte:head>

<div class="max-w-2xl space-y-8">
  <div>
    <h1 class="text-3xl font-bold text-gray-900">Submit an Enterprise</h1>
    <p class="mt-2 text-gray-600">Know a business that's legally locked from being sold? Submit it for review.</p>
  </div>

  {#if success}
    <div class="rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
      ✅ Thank you! Your submission has been received and will be reviewed by an admin.
    </div>
  {/if}

  <form method="POST" use:enhance class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-5">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Enterprise Name *</label>
      <input
        id="name" name="name" type="text" required
        value={form?.values?.name ?? ''}
        class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="e.g. Rolex SA"
      />
      {#if form?.errors?.name}<p class="mt-1 text-xs text-red-600">{form.errors.name}</p>{/if}
    </div>

    <div>
      <label for="type" class="block text-sm font-medium text-gray-700 mb-1">Enterprise Type *</label>
      <input
        id="type" name="type" type="text" required
        value={form?.values?.type ?? ''}
        class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="e.g. Foundation-owned, Cooperative, State-owned"
      />
      {#if form?.errors?.type}<p class="mt-1 text-xs text-red-600">{form.errors.type}</p>{/if}
    </div>

    <div>
      <label for="jurisdiction" class="block text-sm font-medium text-gray-700 mb-1">Jurisdiction *</label>
      <input
        id="jurisdiction" name="jurisdiction" type="text" required
        value={form?.values?.jurisdiction ?? ''}
        class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="e.g. Switzerland, Germany, United States"
      />
      {#if form?.errors?.jurisdiction}<p class="mt-1 text-xs text-red-600">{form.errors.jurisdiction}</p>{/if}
    </div>

    <div>
      <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
      <textarea
        id="description" name="description" rows="3"
        class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="Why can't this enterprise be sold? What makes it unacquirable?"
      >{form?.values?.description ?? ''}</textarea>
    </div>

    <div>
      <label for="website" class="block text-sm font-medium text-gray-700 mb-1">Website</label>
      <input
        id="website" name="website" type="url"
        value={form?.values?.website ?? ''}
        class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="https://example.com"
      />
    </div>

    <div>
      <label for="contact_email" class="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
      <input
        id="contact_email" name="contact_email" type="email" required
        value={form?.values?.contact_email ?? ''}
        class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="you@example.com"
      />
      {#if form?.errors?.contact_email}<p class="mt-1 text-xs text-red-600">{form.errors.contact_email}</p>{/if}
      <p class="mt-1 text-xs text-gray-500">We'll only use this to follow up if we have questions.</p>
    </div>

    <button
      type="submit"
      class="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
    >
      Submit for Review
    </button>
  </form>
</div>
