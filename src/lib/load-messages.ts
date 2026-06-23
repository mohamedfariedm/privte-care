import type { AbstractIntlMessages } from "next-intl";

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  const result = { ...target };

  for (const key of Object.keys(source)) {
    const sourceVal = source[key];
    const targetVal = result[key];

    if (
      targetVal &&
      sourceVal &&
      typeof targetVal === "object" &&
      typeof sourceVal === "object" &&
      !Array.isArray(targetVal) &&
      !Array.isArray(sourceVal)
    ) {
      result[key] = deepMerge(
        targetVal as Record<string, unknown>,
        sourceVal as Record<string, unknown>
      );
    } else {
      result[key] = sourceVal;
    }
  }

  return result;
}

export async function loadMessages(locale: string): Promise<AbstractIntlMessages> {
  const [common, home, shared, prices, services, about, help] = await Promise.all([
    import(`../locales/${locale}/common.json`).then((m) => m.default),
    import(`../locales/${locale}/home.json`).then((m) => m.default),
    import(`../locales/${locale}/shared.json`).then((m) => m.default),
    import(`../locales/${locale}/prices.json`).then((m) => m.default),
    import(`../locales/${locale}/services.json`).then((m) => m.default),
    import(`../locales/${locale}/about.json`).then((m) => m.default),
    import(`../locales/${locale}/help.json`).then((m) => m.default),
  ]);

  const pages = { prices, services, about, help };

  return deepMerge(
    deepMerge(
      deepMerge(common as Record<string, unknown>, home as Record<string, unknown>),
      shared as Record<string, unknown>
    ),
    { pages }
  ) as AbstractIntlMessages;
}
