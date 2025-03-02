import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['pages', 'components', 'app', 'utils', 'lib'],
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
