/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
const nftCollection = [];


function mintNFT (name, eyeColor, skinType, weaponType, hairType) {
  const NFT = {
    "name": name,
    "eyeColor": eyeColor,
    "skinType": skinType,
    "weaponType": weaponType,
    "hairType": hairType 
  }
  nftCollection.push(NFT);
  console.log("Successfully minted " + name + "!");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for (let i = 0; i < nftCollection.length; i++){
    console.log("\nName: " + nftCollection[i].name);
    console.log("Eye Color: " + nftCollection[i].eyeColor);
    console.log("Skin Type: " + nftCollection[i].skinType);
    console.log("Weapon Type: " + nftCollection[i].weaponType);
    console.log("Hair Type: " + nftCollection[i].hairType);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal Supply: "+ nftCollection.length);
}

// call your functions below this line
mintNFT("dwarfTownNFT", "red", "yellow", "axe", "bald");
mintNFT("Goblin Town", "blue", "pale", "sword", "normal");
mintNFT("CryptoPunks", "yellow", "dark", "baseball bat", "short");
mintNFT("Azuki", "red", "purple", "tan", "long");
listNFTs();
getTotalSupply();
