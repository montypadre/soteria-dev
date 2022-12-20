const namePrefix = "Non-Fungible Coinbaes";
const description = "Adorable Non-Fungible Coinbae";
const baseUri = "PLACEHOLDER_URI";

const layerConfig = [
  {
    totalTokens: 100,
    layersOrder: [
      { name: "Background", options: { bypassDNA: true } },
      { name: "Skin" },
      { name: "Eyes" },
      { name: "Mouths" },
      { name: "Clothing" },
      { name: "Hair-Headgear" },
      { name: "Accessories" }
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2400,
  height: 2600,
  smoothing: false,
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  uniqueDnaTorrance,
  layerConfig,
  rarityDelimiter,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  namePrefix,
};
