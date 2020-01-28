const bikeCreateDtoInType = shape({
  name: uu5String(255).isRequired(),
  role: uu5String(4000).isRequired(),
  src: uu5String(4000)
});
