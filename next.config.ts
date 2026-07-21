import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: "/main",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://otelix.pro https://yandex.ru https://yandex.com https://*.yandex.ru https://*.yandex.com https://*.yastatic.net",
              "style-src 'self' 'unsafe-inline' https://otelix.pro https://*.yastatic.net",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://otelix.pro https://yandex.ru https://yandex.com https://*.yandex.ru https://*.yandex.com https://*.yastatic.net",
              "frame-src 'self' https://otelix.pro https://yandex.ru https://yandex.com https://*.yandex.ru https://*.yandex.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self' https://otelix.pro",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
