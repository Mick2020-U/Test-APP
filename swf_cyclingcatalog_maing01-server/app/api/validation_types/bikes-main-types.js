const bikeCreateDtoInType = shape({
  name: string(255).isRequired(),
  role: shape({
    en: string(255).isRequired()
  }),
  src: string(4000).isRequired()
});
