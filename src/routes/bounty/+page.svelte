<script>
  export let form;
</script>

<div class="mt-0 pt-10 w-full max-w-5xl mx-auto flex flex-wrap justify-center space-x-1">
  <div class="w-full lg:w-1/2 mb-6">
    <div class="p-4 rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
      <form method="POST" action="?/deploy">
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="bounty">
              Bounty
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="bounty"
              type="number"
              placeholder="Enter Bounty Amount"
              name="bounty"
            />
          </div>
          <div class="w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="square">
              Enter the number whose Square Root is on bounty
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="square"
              type="number"
              placeholder="Enter square number"
              name="square"
            />
          </div>
          <div class="w-full px-3">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 px-4 py-2 rounded w-full"
            >
              Deploy Bounty
            </button>
          </div>
        </div>
      </form>
      {#if form?.deployed}
        <p class="pt-2 text-center text-green-500">Bounty was deployed successfully: <a href={"https://whatsonchain.com/tx/" + form?.txid} class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Transaction Link!</a></p>
      {/if}
    </div>
  </div>

  <div class="w-full lg:w-1/2 mb-6">
    <div class="p-4 rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
      <form method="POST" action="?/unlock">
        <div class="flex flex-wrap -mx-3 mb-2 items-end">
          <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="root">
              Root
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="root"
              type="number"
              placeholder="Enter Root Answer that unlocks"
              name="root"
            />
          </div>
          <div class="w-full md:w-1/3 px-3">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 px-4 py-2 rounded w-full"
            >
              Unlock Bounty
            </button>
          </div>
        </div>
      </form>
      {#if form?.success}
        <p class="pt-2 text-center text-green-500">Bounty was unlocked successfully: <a href={"https://whatsonchain.com/tx/" + form?.txid} class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Transaction Link!</a></p>
      {/if}
    </div>
  </div>
</div>
