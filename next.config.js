/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'task.com']
    },
    experimental: {
        serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    }
}

// const headers = async () => {
//     return [
//       {
//         source: '/(.*)', // Modify this pattern to match the specific route or URL pattern
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: "script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' https://apis.google.com",
//           },
//         ],
//       },
//     ];
// };

module.exports = {
    ...nextConfig,
    // headers,
}
