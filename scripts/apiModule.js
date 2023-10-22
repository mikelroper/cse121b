export const apiUrl = 'https://cataas.com/cat';

export async function fetchCatImage() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const catImage = await response.url; // Assuming the URL of the cat image is directly in the response.

    return catImage;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
