<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<svelte:head>
  <title>Admin Dashboard – Unacquirable Enterprises</title>
</svelte:head>

<div class="space-y-8">
  <div class="flex items-center justify-between">
    <h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
    <form method="POST" action="/admin/login?/logout">
      <button type="submit" class="text-sm text-gray-500 hover:text-red-600 transition-colors">
        Sign out
      </button>
    </form>
  </div>

  <div>
    <h2 class="text-xl font-semibold text-gray-800 mb-4">
      Pending Submissions
      {#if data.pending.length > 0}
        <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          {data.pending.length}
        </span>
      {/if}
    </h2>

    {#if data.pending.length === 0}
      <div class="text-center py-16 bg-white rounded-xl border border-gray-200 text-gray-500">
        No pending submissions. 🎉
      </div>
    {:else}
      <div class="grid gap-4">
        {#each data.pending as sub}
          <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-semibold text-gray-900">{sub.name}</h3>
                <div class="mt-1 flex flex-wrap gap-2">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">{sub.type}</span>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">📍 {sub.jurisdiction}</span>
                </div>
                {#if sub.description}
                  <p class="mt-2 text-sm text-gray-600">{sub.description}</p>
                {/if}
                <div class="mt-3 text-xs text-gray-500 space-y-1">
                  {#if sub.website}<div>🌐 <a href={sub.website} target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline">{sub.website}</a></div>{/if}
                  <div>✉️ {sub.contact_email}</div>
                  <div>📅 {new Date(sub.submitted_at).toLocaleDateString()}</div>
                </div>
              </div>
              <div class="flex flex-col gap-2 shrink-0">
                <form method="POST" action="?/approve" use:enhance>
                  <input type="hidden" name="id" value={sub.id} />
                  <button type="submit" class="w-full px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
                    ✓ Approve
                  </button>
                </form>
                <form method="POST" action="?/reject" use:enhance>
                  <input type="hidden" name="id" value={sub.id} />
                  <button type="submit" class="w-full px-4 py-1.5 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
                    ✗ Reject
                  </button>
                </form>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
