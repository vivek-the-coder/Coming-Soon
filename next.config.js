const enablePlasmicLoader = process.env.ENABLE_PLASMIC_LOADER === 'true';

let withPlasmic = (config) => config;

if (enablePlasmicLoader) {
  process.env.PLASMIC_LOADER_SKIP_VERSION_CHECK =
    process.env.PLASMIC_LOADER_SKIP_VERSION_CHECK || 'true';

  const plasmicCli = require('@plasmicapp/loader/shared/cli');

  // The loader version check currently hits an endpoint that responds with 404s in CI
  // which breaks next build. Until the upstream endpoint is restored, noop the check.
  if (plasmicCli && typeof plasmicCli.ensureRequiredLoaderVersion === 'function') {
    plasmicCli.ensureRequiredLoaderVersion = async () => undefined;
  }

  const plasmic = require('@plasmicapp/loader/next');
  withPlasmic = plasmic({
    projects: ['3PrTx1j8FMCduLs2kY48ad'], // An array of project ids.
  });
} else {
  console.warn('Plasmic loader disabled. Set ENABLE_PLASMIC_LOADER=true to enable.');
}

module.exports = withPlasmic({
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Your NextJS config.
});
  