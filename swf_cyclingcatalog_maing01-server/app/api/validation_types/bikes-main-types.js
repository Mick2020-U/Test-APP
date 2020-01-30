const bikeCreateDtoInType = shape({
  name: uu5String(255).isRequired(),
  role: shape({
    "en": uu5String(255)
  }),
  src: uu5String(4000)
});
