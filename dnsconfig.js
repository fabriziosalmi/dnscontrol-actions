// Cloudflare proxy vars
var CF_PROXY_OFF = { "cloudflare_proxy": "off" };     // Proxy disabled.
var CF_PROXY_ON = { "cloudflare_proxy": "on" };       // Proxy enabled.

// Domains:

// Cloudflare
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");
var REG_CLOUDFLARE = NewRegistrar("none", "NONE");

// AWS Route 53
var DSP_ROUTE53 = NewDnsProvider("route53", "ROUTE53");
var REG_ROUTE53 = NewRegistrar("none", "NONE");

// Google Cloud DNS
var DSP_GCLOUD = NewDnsProvider("gcloud", "GCLOUD");
var REG_GCLOUD = NewRegistrar("none", "NONE");

// DigitalOcean
var DSP_DO = NewDnsProvider("digitalocean", "DO");
var REG_DO = NewRegistrar("none", "NONE");

// Azure
var DSP_AZURE = NewDnsProvider("azure", "AZURE");
var REG_AZURE = NewRegistrar("none", "NONE");

// BIND (as an example of self-hosted DNS)
var DSP_BIND = NewDnsProvider("bind", "BIND");
var REG_BIND = NewRegistrar("none", "NONE");

// Namecheap 
var DSP_NAMECHEAP = NewDnsProvider("namecheap", "NAMECHEAP");
var REG_NAMECHEAP = NewRegistrar("namecheap", "NAMECHEAP");

// PowerDNS
var DSP_POWERDNS = NewDnsProvider("powerdns", "POWERDNS");
var REG_POWERDNS = NewRegistrar("none", "NONE");

D('example.com', REG_CLOUDFLARE, DnsProvider(DSP_CLOUDFLARE),
	A('@', '127.0.0.1', CF_PROXY_ON),
  A('test', '1.2.3.4', CF_PROXY_OFF)
);
