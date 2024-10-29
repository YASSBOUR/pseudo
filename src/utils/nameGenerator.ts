export const generateCustomName = (baseWord: string = '') => {
  const prefixes = ['Super', 'Mega', 'Ultra', 'Epic', 'Pro', 'Master'];
  const suffixes = ['Gaming', 'Player', 'Master', 'Pro', 'Legend', 'Champion'];
  const numbers = ['123', '777', 'X', '99', '007'];

  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  if (!baseWord) {
    const defaultNames = [
      'PonyPrincess', 'NightTek', 'CrazyBadboy',
      'PosePython', 'RunicDragon', 'BearChicken',
      'FreedomWitcher', 'SynnNova', 'Mambal',
      'GtPoney', 'BraveTek', 'NeverThunder'
    ];
    return defaultNames;
  }

  // Generate variations using the base word
  return [
    `${randomPrefix}${baseWord}`,
    `${baseWord}${randomSuffix}`,
    `${baseWord}${randomNumber}`,
    `${randomPrefix}${baseWord}${randomNumber}`,
    `${baseWord}${randomSuffix}${randomNumber}`,
    `${randomPrefix}${baseWord}${randomSuffix}`,
    `${baseWord}Pro`,
    `${baseWord}Gaming`,
    `Pro${baseWord}`,
  ];
};