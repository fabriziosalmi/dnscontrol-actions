# dnscontrol-actions

Update and rollback your DNS configuration via GitHub Actions.

## How to use

1. In the creds.json file you will find example configurations for most popular DNS providers.
2. Add the needed repository action secrets (example: CLOUDFLARE_API_USER and CLOUDFLARE_API_TOKEN)
3. Populate dnsconfig.js and save
4. Update DNS action will be triggered at each dnsconfig.js update
5. Once successfulky executed you can then manually trigger the push configuration action to propagate DNS updates
6. If something goes wrong you can manually trigger the rollback action to restore the previous configuration.

Optional: you can define more than just a single DNS provider to have redundancy across providers (example: Cloudflare + AWS). In this caase you must cover the logic of Cloudflare proxies in some way (working on that to make your life easier).


