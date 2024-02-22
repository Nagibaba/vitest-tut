export const mergeObjects = (a, b) => {
  return { ...a, ...b };
};

export function sum(a, b) {
  if (typeof a === "string" || typeof b === "string")
    return new Error("string not allowed");
  return a + b;
}

export const logger = (a, cb) => {
  cb(a);
};
