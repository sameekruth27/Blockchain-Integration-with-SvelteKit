<script lang="ts">
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div class="flex flex-wrap justify-center mt-5 space-x-14">
    <div class="w-full md:w-2/5 max-w-lg p-4 rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
        <h2 class="text-center text-2xl font-bold mb-4">LOGIN</h2>
        <form method="POST" action="?/login">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="email"
                    >
                    Email
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="password"
                    >
                    Password
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="password"
                    type="text"
                    placeholder="Enter password"
                    name="password"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3">
                    <button
                        type="submit"
                        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                    >
                        Login
                    </button>
                </div>
            </div>
        </form>
        {#if form?.success}
            <p class="pt-2 text-center text-green-500">Login Successful. Your balance is {form?.balance}</p>
        {/if}
    </div>

    <div class="w-full md:w-2/5 max-w-lg p-4 rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
        <h2 class="text-center text-2xl font-bold mb-4">PAYMENT</h2>
        <form method="POST" action="?/pay">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="email"
                    >
                    Email
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="password"
                    >
                    Password
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="password"
                    type="text"
                    placeholder="Enter password"
                    name="password"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="paymail"
                    >
                    Paymail
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="paymail"
                    type="text"
                    placeholder="Enter paymail"
                    name="paymail"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="amount"
                    >
                    Amount
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    name="amount"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3">
                    <button
                        type="submit"
                        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                    >
                        Pay
                    </button>
                </div>
            </div>
        </form>
        {#if form?.success}
            <p class="text-center text-green-500">Payment Successful. Here is your <a href="{form?.payment}" class="text-blue-500 underline" target="_blank">Transaction</a>!</p>
        {/if}
    </div>
</div>
