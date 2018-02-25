const HOME_URL = 'https://github.com/semantic-release/semantic-release';
const FAQ_URL = `${HOME_URL}/blob/caribou/docs/support/FAQ.md`;
const GET_HELP_URL = `${HOME_URL}#get-help`;
const USAGE_DOC_URL = `${HOME_URL}/blob/caribou/docs/usage/README.md`;
const NEW_ISSUE_URL = `${HOME_URL}/issues/new`;

const formatError = error => `### ${error.message}

${error.details ||
  `Unfortunatly this error doesn't have any additionnal information.${
    error.pluginName
      ? ` Feel free to kindly ask the author of the \`${error.pluginName}\` plugin to add more helpful informations.`
      : ''
  }`}`;

module.exports = (
  branch,
  errors
) => `## :rotating_light: The automated release from the \`${branch}\` branch failed. :rotating_light:

I recommend you give this issue a high priority, so other packages depending on you could benefit from your bug fixes and new features.

You can find below the list of errors reported by **semantic-release**. Each one of them has to be resolved in order to automatically publish your package. I’m sure you can resolve this 💪.

Errors are usually caused by a misconfiguration or an authentication problem. With each error reported below you will find explanation and guidance to help you to resolve it.

Once all the errors are resolved, **semantic-release** will release your package the next time you push a commit the \`${branch}\` branch. You can also manually restart the failed CI job that runs **semantic-release**.

If you are not sure how to resolve this, here is some links that can help you:
- [Usage documentation](${USAGE_DOC_URL})
- [Frequently Asked Questions](${FAQ_URL})
- [Support channels](${GET_HELP_URL})

If those don’t help, or if this issue is reporting something you think isn’t right, you can always ask the humans behind **[semantic-release](${NEW_ISSUE_URL})**.

---

${errors.map(formatError).join('\n\n---\n\n')}

---

Good luck with your project ✨

Your **[semantic-release](${HOME_URL})** bot :package::rocket:`;