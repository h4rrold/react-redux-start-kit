import { httpService } from "services/api/http";
import routes from "services/api/routes";
import getEndpointUrlWithName from "services/api/helpers/getEndpointUrlWithName";

export const loginRequest = async (postData) => {
  const route = getEndpointUrlWithName("PostUserLogin", routes);
  return await httpService.post(route, postData);
};

export const registerRequest = async ({ email, password }) => {
  const route = getEndpointUrlWithName("PostUserRegister", routes);
  return await httpService.post(route, { email, password });
};
