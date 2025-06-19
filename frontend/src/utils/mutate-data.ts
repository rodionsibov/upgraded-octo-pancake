export async function mutateData(method: string, path: string, payload: any) {
  const baseUrl = import.meta.env.STRAPI_URL;
  const url = new URL(path, baseUrl);

  const authToken = false;

  const headers: any = {
    "Content-Type": "application/json",
  };

  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  try {
    const response = await fetch(url.href, {
      method: method,
      headers,
      body: JSON.stringify({ ...payload }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
