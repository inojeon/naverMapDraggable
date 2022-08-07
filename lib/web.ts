import { getItem_auth_token } from "../lib/localStorage";

export const apiRequest = (
  method: string,
  url: string,
  body: string = "",
  headers: any = null
) => {
  const authToken = getItem_auth_token();
  let _headers: any = {};
  if (null === headers) {
  }
  if (authToken) {
    _headers.authorization = `Bearer ${authToken}`;
  }
  // console.log(authToken)
  let requestInit: RequestInit = {
    method,
    headers: {
      ..._headers,
    },
  };
  if ("get" != method) {
    requestInit["body"] = body;
  }
  return fetch(url, requestInit).then((res) => {
    return res.json().then((response_json) => ({
      ok: res.ok,
      status: res.status,
      response_json,
    }));
  });
};

export function fetch_imsp() {
  return apiRequest(
    "get",
    "http://bluesignal.iptime.org:48080/v2/commons/imsp"
  );
}
