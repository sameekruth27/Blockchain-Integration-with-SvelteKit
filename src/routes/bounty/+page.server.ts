import { Root } from "$lib/../contracts/root.js";
import { DefaultProvider, sha256, bsv, toByteString } from "scrypt-ts";
import { NeucronSigner } from "neucron-signer";

const provider = new DefaultProvider({
  network: bsv.Networks.mainnet,
});
const signer = new NeucronSigner(provider);

await signer.login("sales@timechainlabs.io", "string");
await Root.loadArtifact();
let instance

/** @type {import('./$types').Actions} */
export const actions = {
  deploy: async ({ request }) => {

    const data = await request.formData();
    
    const square = BigInt(data.get("square"));
    instance = new Root(square);

    await instance.connect(signer);

    const deployTx = await instance.deploy(data.get("bounty"));

    console.log("Smart lock deployed : https://whatsonchain.com/tx/"+deployTx.id);
    
    return ({
        success:true,
        tx:deployTx.id
    })
  },
  unlock: async ({request})=>{

    const data = await request.formData()
    
    const root = BigInt(data.get('root'))

    const {tx:callTx} = await instance.methods.unlock(root)

    console.log(
        'contract successfully unlocked : https://whatsonchain.com/tx/'+callTx.id
    )
        
    return ({
        success:true,
        tx:callTx.id
    })


  }
};