export default {
	extends: ["stylelint-config-standard"],
	rules: {
		"at-rule-no-unknown": [true, {
			ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
		}],
		"no-empty-source": null,
		"selector-class-pattern": null
	}
};
