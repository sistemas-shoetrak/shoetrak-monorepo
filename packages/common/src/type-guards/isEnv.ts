export function isEnv<K extends string, E extends Record<string, unknown>, T>(
  env: E,
  key: K,
  typeGuard: (value: unknown) => value is T,
): env is E & Record<K, T> {
  return key in env && typeGuard(env[key]);
}
