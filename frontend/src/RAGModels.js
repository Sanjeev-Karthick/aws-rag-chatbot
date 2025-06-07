export const modelList = [
  {
    customizationsSupported: [],
    guardrailsSupported: true,
    inferenceTypesSupported: ["ON_DEMAND"],
    inputModalities: ["TEXT"],
    modelArn:
      "arn:aws:bedrock:ap-south-1::foundation-model/amazon.titan-text-lite-v1",
    modelId: "amazon.titan-text-lite-v1",
    modelLifecycle: {
      status: "ACTIVE",
    },
    modelName: "Titan Text",
    outputModalities: ["TEXT"],
    providerName: "Amazon",
    responseStreamingSupported: true,
  },
  {
    customizationsSupported: [],
    guardrailsSupported: true,
    inferenceTypesSupported: ["ON_DEMAND"],
    inputModalities: ["TEXT"],
    modelArn: "arn:aws:bedrock:ap-south-1::foundation-model/meta.llama3-70b-instruct-v1:0",
    modelId: "meta.llama3-70b-instruct-v1:0",
    modelLifecycle: {
      status: "ACTIVE",
    },
    modelName: "LLama 3",
    outputModalities: ["TEXT"],
    providerName: "Meta",
    responseStreamingSupported: true,
  }
];
