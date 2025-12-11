const plasmicCli = require('@plasmicapp/loader/shared/cli');

// The loader version check currently hits an endpoint that responds with 404s in CI
// which breaks next build. Until the upstream endpoint is restored, noop the check.
if (plasmicCli && typeof plasmicCli.ensureRequiredLoaderVersion === 'function') {
  plasmicCli.ensureRequiredLoaderVersion = async () => undefined;
}

const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['3PrTx1j8FMCduLs2kY48ad'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Your NextJS config.
});
  