function checkIsSuccess(data) {
  return new Promise(function(resolve, reject) {
    if (data === "success") {
      return resolve("successfully executed");
    } else {
      return reject("unsuccessfully executed");
    }
  });
}

export { checkIsSuccess };
