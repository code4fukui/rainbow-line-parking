const list = {
  "gate1.csv": "https://code4fukui.github.io/fukui-kanko-people-flow-visualization/rainbow-line-parking-lot-1-gate/LicensePlate.csv",
  "gate2.csv": "https://code4fukui.github.io/fukui-kanko-people-flow-visualization/rainbow-line-parking-lot-2-gate/LicensePlate.csv",
};

for (const fn in list) {
  const url = list[fn];
  //const fn = url.substring(url.lastIndexOf("/") + 1);
  //console.log(fn);
  const bin = await (await fetch(url)).bytes();
  await Deno.writeFile(fn, bin);
}
