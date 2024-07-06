<script>
	export let names;
	let updateId = null;
	let updateName = '';
	let updateEmail = '';
  
	function showUpdateForm(id, name, email) {
	  updateId = id;
	  updateName = name;
	  updateEmail = email;
	}
  
	function hideUpdateForm() {
	  updateId = null;
	  updateName = '';
	  updateEmail = '';
	}
</script>
  
<div class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
	<div class="flex items-center justify-between mb-4">
		<div class="space-y-1">
			<h2 class="text-xl font-semibold">List of Users</h2>
			<p class="text-sm text-gray-500">
				Fetched {names.length} users
			</p>
		</div>
	</div>
	<div class="divide-y divide-gray-900/5">
		{#each names as user (user.id)}
			<div class="flex items-center justify-between py-3">
				<div class="flex items-center space-x-4">
					<div class="flex">
						<p class="font-medium pt-1 leading-none">{user.name}</p>
						<p class="font-medium pl-5 text-gray-500 pt-0">{user.email}</p>
					</div>
				</div>
				<div class="flex space-x-2">
					<button on:click="{() => showUpdateForm(user.id, user.name, user.email)}">
						<img class="w-4" src="./edit.svg" alt="edit"/>
					</button>
					<form method="POST" action="?/delete">
						<input type="hidden" name="id" value={user.id}>
						<button type="submit">
							<img class="w-4" src="./trash-can.svg" alt="delete"/>
						</button>
					</form>
				</div>
			</div>
		{/each}
	</div>

	{#if updateId !== null}
		<div class="mt-10 pt-6 w-full max-w-xl p-5 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
			<form method="POST" action="?/update">
				<input type="hidden" name="id" value={updateId} />
				<div class="space-y-4">
					<div>
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="update-name">
							Name
						</label>
						<input
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="update-name"
							type="text"
							placeholder="Enter name"
							name="name"
							bind:value={updateName}
						/>
					</div>
					<div>
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="update-email">
							Email
						</label>
						<input
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="update-email"
							type="text"
							placeholder="Enter email"
							name="email"
							bind:value={updateEmail}
						/>
					</div>
					<div class="flex justify-end space-x-4">
						<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Update
						</button>
						<button type="button" on:click={hideUpdateForm} class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
							Cancel
						</button>
					</div>
				</div>
			</form>
		</div>
	{/if}
</div>
