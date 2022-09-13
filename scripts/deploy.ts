import { ethers } from "hardhat";
const pancakeRouterAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E";

async function main() {
  const currentTimestampInSeconds = Math.floor(Date.now() / 1000);
  const ONE_YEAR_IN_SECONDS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECONDS;
  const lockedAmount = ethers.utils.parseEther("1");
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  let data = {
    address: counter.address,
    abi: JSON.parse(JSON.stringify(counter.interface.format("json"))),
  };

  console.log(data);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
