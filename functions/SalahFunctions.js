export function FarjSalahCompletion(salahData) {
  let farjCompletion = 0;
  const salahNamePattern = /^fardh_/;

  for (const [key, value] of Object.entries(salahData)) {
    if (salahNamePattern.test(key) && value === true) {
      farjCompletion++;
    }
  }

  return farjCompletion;
}
