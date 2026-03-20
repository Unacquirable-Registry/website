<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<svelte:head>
  <title>Unacquirable Enterprises – Public Registry</title>
</svelte:head>

<div class="space-y-8">
  <div>
    <h1 class="text-3xl font-bold text-gray-900">Public Registry</h1>
    <p class="mt-2 text-gray-600">Businesses that are legally structured to prevent acquisition or sale.</p>
  </div>

  {#if data.enterprises.length === 0}
    <div class="text-center py-16 text-gray-500">No enterprises listed yet.</div>
  {:else}
    <div class="grid gap-4">
      {#each data.enterprises as enterprise}
        <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1 min-w-0">
              <h2 class="text-lg font-semibold text-gray-900">{enterprise.name}</h2>
              <div class="mt-1 flex flex-wrap gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {enterprise.type}
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  📍 {enterprise.jurisdiction}
                </span>
              </div>
              {#if enterprise.description}
                <p class="mt-3 text-sm text-gray-600">{enterprise.description}</p>
              {/if}
            </div>
            {#if enterprise.website}
              <a
                href={enterprise.website}
                target="_blank"
                rel="noopener noreferrer"
                class="shrink-0 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                Visit →
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <div class="text-sm text-gray-500">
    {data.enterprises.length} enterprise{data.enterprises.length !== 1 ? 's' : ''} listed.
    <a href="/submit" class="text-indigo-600 hover:underline ml-1">Know one we're missing? Submit it →</a>
  </div>
</div>
