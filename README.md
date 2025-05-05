# DNSControl Actions

Easily update, push, and rollback your DNS configuration using [DNSControl](https://github.com/StackExchange/dnscontrol) and [GitHub Actions](https://github.com/features/actions)

[![Update DNS Configuration](https://github.com/fabriziosalmi/dnscontrol-actions/actions/workflows/update.yml/badge.svg)](https://github.com/fabriziosalmi/dnscontrol-actions/actions/workflows/update.yml) [![Rollback DNS Configuration](https://github.com/fabriziosalmi/dnscontrol-actions/actions/workflows/rollback-latest.yml/badge.svg)](https://github.com/fabriziosalmi/dnscontrol-actions/actions/workflows/rollback-latest.yml)

## Features

- **DNS configuration CD/CI** using DNSControl and GitHub Actions.
- **Preview DNS changes** upon each update to dnsconfig.js.
- **Manual push** configuration for safer DNS updates.
- Option to **rollback to a previous DNS configuration** in case of errors.
- Support for **multiple DNS providers** for enhanced **redundancy**.
- Optional: send notification via Apprise on rollback

## How to Use

#### Initialization
- Clone or fork this repository

> [!WARNING]
> If You fork this repo don't forget to set repository visibility of your forked one to **private**

#### Setup Credentials:
- Refer to creds.json for example configurations of popular DNS providers.
- Populate the appropriate fields with your credentials.
- For security, use repository action secrets for sensitive information (e.g., `CLOUDFLARE_API_USER` and `CLOUDFLARE_API_TOKEN`).
- Remember to give workflows read/write permissions (https://github.com/user/repo/settings/actions)

#### Configure DNS:
- Edit and save your DNS settings in dnsconfig.js.
- This will automatically trigger the "Update DNS" action.

#### Push Configuration:
- After the update action has successfully executed, you can manually trigger the "Push Configuration" action to propagate DNS updates.

#### Rollback (if needed):
- If there are issues with the DNS update, manually trigger the "Rollback" action to restore the previous configuration.

## Advanced Configuration

- Multi-provider Redundancy: Define multiple DNS providers in dnsconfig.js to achieve redundancy across providers. Example: Using both Cloudflare and AWS.
- Note: When using Cloudflare's proxying feature in combination with another DNS provider, ensure you handle the logic behind these proxies. 
