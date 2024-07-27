async function requester(method, url, data) {
  const options = {};

  if (method !== "GET") {
    options.method = method;
  }
  if (method === "POST" || method === "PUT") {
  }
  if (data) {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}

export const get = requester.bind(undefined, "GET");
export const post = requester.bind(undefined, "POST");
export const put = requester.bind(undefined, "PUT");
export const del = requester.bind(undefined, "DELETE");

export default {
    get,
    post,
    put,
    del,
    };

// export const get = (url, data ) => requester("GET", url, data);
// export const post = (url, data ) => requester("POST", url, data);
// export const put = (url, data ) => requester("PUT", url, data);
// export const del = (url, data ) => requester("DELETE", url, data);