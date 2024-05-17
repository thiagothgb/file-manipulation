export async function convertToBinary(input) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(input);
  const binaryResult = [...encodedData]
    .map((byte) => byte.toString(2).padStart(8, "0"))
    .join(" ");
  return binaryResult;
}
