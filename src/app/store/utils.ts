export function minAge(minAge: number) {
  return (value: number) => {
    return value >= minAge ? null : { minAge: [value, minAge] };
  };
}
