export default function (name, routeList) {
  if (!routeList?.length) {
    return "";
  }
  return routeList.find((route) => route?.name === name)?.route ?? "";
}
