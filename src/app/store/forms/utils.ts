export function minAge(minAge: number) {
  return (value: number) => {
    return value >= minAge ? null : { minAge: [value, minAge] };
  };
}

export function required(value: any) {
  return !!value ? null : { required: true };
}

export function min(minValue: number) {
  return (value: number) => {
    return value >= minValue ? null : { min: [value, minValue] };
  };
}
