import "intl";
import "intl/locale-data/jsonp/es-MX";

export const getDate = (): string => {
  const date = new Date();

  return Intl.DateTimeFormat("es-MX", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
};
