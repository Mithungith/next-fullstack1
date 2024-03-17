/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {protocol:"https",
            hostname:"images.pexels.com"
        },
            {protocol:"https",
            hostname:"www.befunky.com"
        }
        ]
    }
}

module.exports = nextConfig
