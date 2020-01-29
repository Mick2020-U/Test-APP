const bikeCreateDtoInType = shape({
  name: uu5String(255).isRequired(),
  // role: uu5String(255),
  role: shape({
    "en": uu5String(255)
  }),
  src: uu5String(4000)
});
