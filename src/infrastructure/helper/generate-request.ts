export const generateRequest = (
  method: string,
  ver: string,
  endpoint: string,
  id?: number,
) => {
  const path = id ? `/api/${ver}/${endpoint}/${id}` : `/api/${ver}/${endpoint}`;
  return {
    url: path,
    method: `${method.toUpperCase()}`,
    route: { path },
  };
};
