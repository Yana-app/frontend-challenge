export const timestamp = (): string => {
  return new Date().toISOString();
};

export const getDateInLocaleString = (date: Date): string => {
  return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(date);
};

export const delay = <T>(callback: () => T, miliseconds: number): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, miliseconds);
  });
};
