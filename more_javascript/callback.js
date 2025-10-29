function ghotok(patri, name) {
  patri(name);
}
const patri = function (name) {
  console.log("okeay ami paici", name);
};
ghotok(patri, "dipi");
