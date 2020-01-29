const bikeCreateDtoInType = shape({
  name: uu5String(255).isRequired(),
  role: Object,
  src: uu5String(4000)
});
