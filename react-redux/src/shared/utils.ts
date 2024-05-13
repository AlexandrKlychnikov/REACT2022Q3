export function isDate18orMoreYearsOld(date: string) {
  const birth = new Date(date);
  const deadline = new Date(birth.getFullYear() + 18, birth.getMonth() + 1, birth.getDate());
  return deadline <= new Date();
}

export function calculateAge(date: string) {
  const birthday = new Date(date);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
