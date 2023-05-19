const buildArrayOfObjectsHash = (arrayOfObject, objectProperty) => {
  const hash = {};

  arrayOfObject.forEach((object) => {
    hash[object[objectProperty]] = object;
  });
  console.log("haash is", arrayOfObject, hash);
  return hash;
};

export default buildArrayOfObjectsHash;
