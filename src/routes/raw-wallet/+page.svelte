<script lang="ts">
    import { PrivateKey } from '@bsv/sdk'

    let WIF:string
    let address:string

    function createKeys () {
        const privKey = PrivateKey.fromRandom()
        WIF=privKey.toWif()
        console.log("Private Key WIF format is ",WIF)
        address = privKey.toAddress()
        console.log("Your Bitcoin address is ", address)
    }
</script>

<section class="flex flex-col items-center justify-center space-y-5 mt-10">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" on:click={createKeys}>
      Generate New Wallet Keys
    </button>
    <div class="flex flex-col items-center justify-center bg-white p-4 w-1/2 text-center rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
        <p class="mb-2">Private Key WIF format is <strong>{WIF}</strong></p>
        <p>Your Bitcoin Address is <strong>{address}</strong></p>
    </div>
  </section>