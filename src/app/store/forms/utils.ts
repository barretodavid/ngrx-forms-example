export function minAge(minAge: number) {
  return (value: number) => {
    return value >= minAge ? {} : { minAge: [value, minAge] };
  };
}

export function required(value: any) {
  return !!value ? {} : { required: true };
}

export function min(minValue: number) {
  return (value: number) => {
    return value >= minValue ? {} : { min: [value, minValue] };
  };
}
