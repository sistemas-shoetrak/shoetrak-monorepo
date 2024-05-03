// @ts-expect-error - This file is a module.
import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [RuleConfigSeverity.Error, "always", 80],
    "body-max-line-length": [RuleConfigSeverity.Error, "always", 80],
    "footer-max-line-length": [RuleConfigSeverity.Error, "always", 80],
  },
} satisfies UserConfig;
