export default function getSpecial(arr) {
  const specials = [];
  arr.forEach((element) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = element;
    specials.push({
      id,
      name,
      icon,
      description,
    });
  });

  return specials;
}
