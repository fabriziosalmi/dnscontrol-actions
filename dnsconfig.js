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

// Domains and records
D('example.com', REG_CLOUDFLARE, DnsProvider(DSP_CLOUDFLARE),
  
  // A Records
  A('@', '127.0.0.1', CF_PROXY_ON),
  A('test', '1.2.3.4', CF_PROXY_OFF),

  // AAAA Records (IPv6)
  AAAA('@', '2001:0db8:85a3:0000:0000:8a2e:0370:7334', CF_PROXY_ON),
  AAAA('test-ipv6', '2001:0db8:85a3:0000:0000:8a2e:0370:7335', CF_PROXY_OFF),

  // CNAME Records
  CNAME('www', '@'),
  CNAME('blog', 'blog.example.com.'),

  // MX Records (Mail servers)
  MX('@', 10, 'mail.example.com.'),

  // TXT Records 
  TXT('@', 'v=spf1 a -all'),

  // NS Records (Name Servers)
  NS('subdomain', 'ns1.subdomain.example.com.'),
  NS('subdomain', 'ns2.subdomain.example.com.'),

  // SRV Records 
  SRV('_sip._tcp', 10, 5060, 'sipserver.example.com.'),

  // ALIAS Records (similar to CNAME but at root level)
  ALIAS('@', 'alias.example.net.'),

  // CAA Records (Certificate Authority Authorization)
  CAA('@', 'issue', 'letsencrypt.org'),

  // SSHFP Records (SSH Key Fingerprints)
  SSHFP('@', 1, 1, '123456789abcdef67890123456789abcdef67890a'),

  // SPF Records (Deprecated but still in use by some systems)
  SPF('@', 'v=spf1 a -all'),

  // URL Redirects (For domain forwarding)
  URL_REDIRECT('@', 'https://redirectsite.com/'),

  // URL Frames (URL masking or domain cloaking)
  URL_FRAME('@', 'https://framesite.com/', 'Frame Title', 'frame_keywords', 'frame_description'),

  // PTR Records (commented out since they're generally used in reverse DNS zones)
  // PTR('1', 'ptr.example.com.'),

  // NAPTR Records (Name Authority Pointer)
  NAPTR('@', 10, 100, 'U', 'E2U+sip', '!^.*$!sip:info@example.com!', ''),

  // TLSA Records (for DANE, a protocol for binding public keys to a domain name)
  TLSA('25._tcp.mail', 3, 0, 1, '123456789abcdef67890123456789abcdef67890a'),

  // DS Records (for DNSSEC, signs a delegation)
  DS('secure', 12345, 3, 1, '123456789abcdef67890123456789abcdef67890a')
);
