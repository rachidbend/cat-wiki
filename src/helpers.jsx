export async function getImageLink(imageId) {
  // get the referance image of the breed
  const refrenceImageRes = await fetch(
    `https://api.thecatapi.com/v1/images/${imageId}`
  );
  const refrenceImageData = await refrenceImageRes.json();

  return refrenceImageData.url;
}
