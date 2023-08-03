import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
  useSDK,
  useGrantRole,
} from "@thirdweb-dev/react";
import React, { FormEvent, useState } from "react";
import Container from "../components/Container/Container";

export default function Create() {
  const roleToGrant =
    "0x86d5cf0a6bdc8d859ba3bdc97043337c82a0e609035f378e419298b6a3e00ae6";
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      collectionAddress: (event.target as any).collectionAddress.value,
      marketplaceName: (event.target as any).marketplaceName.value,
    };

    const sdk = useSDK();

    const tx = async function deployContract() {
      sdk?.deployer.deployMarketplaceV3({
        name: data.marketplaceName,
      });
    };
  };

  return (
    <Container maxWidth="lg">
      <h1>Create your marketplace contract</h1>
      <p>Create a collection first on thirdweb.</p>
      <form onSubmit={handleSubmit}>
        <label className="label">Collection Address</label>
        <input type="text" name="collectionAddress" />
        <label className="name">Marketplace Name</label>
        <input type="text" name="marketplaceName" />
        <button>Create Marketplace</button>
      </form>
    </Container>
  );
}
